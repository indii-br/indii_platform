import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/services/profile.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { RATE_TYPE } from 'src/app/utils/constants';

declare var Swal: any;

@Component({
  selector: 'app-profile-contractor',
  templateUrl: './profile-contractor.component.html',
  styleUrls: ['./profile-contractor.component.less']
})
export class ProfileContractorComponent implements OnInit {

  editingProfile: boolean = false;
  loaded: boolean = false;

  profileData: any = { headline: '', bio: '', linkedin: '' };
  workingExperienceList: Array<any>;
  profileToUpdate: any = {};

  availabilityType: Array<string> = [
    'FULL-TIME',
    'PART-TIME',
  ]

  rateTypeList: Array<string> = [
    'HOURLY',
    'FIXED',
  ]

  seniorityLevelList: Array<string> = [
    'Junior',
    'Pleno',
    'Senior',
    'Lead/Leader',
    'Principal / Staff',
    'C-Level'
  ]

  rateTypeLabels = RATE_TYPE;

  selectedAvailabilityType: string;
  selectedSeniorityLevel: string
  selectedRateType: string;
  selectedSkillsList: any;

  selectedMinRate: any;
  selectedMaxRate: any;

  avatarImg: any;

  userData: any

  profileLinks: Array<any> = [];

  constructor(
    private profileService: ProfileService,
    private toastrService: ToastrService,
    private userService: UserService,
    private storageService: StorageService,
    private store: Store<any>
  ) { }

  setEditing(ev) {
    this.editingProfile = ev;

    this.setInitValues();
  }

  setValue(key: string, value: string) {
    this.profileToUpdate[key] = value;
  }

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(res => this.userData = res?.userData)

    const { data: profilesData, error } = await this.profileService.getProfileByUserUuid();

    if (profilesData && profilesData.length !== 0) {
      this.profileData = profilesData[0];

      this.profileLinks = (this.profileData.links) ? this.profileData.links : [];

      this.setInitValues();

      this.getWorkExp();

      this.loaded = true;
    } else {
      this.loaded = true;
      this.editingProfile = true;
    }
  }

  getAvatarImg() {
    if (this.userData.avatar) {
      return this.userData.avatar;
    }

    if (this.avatarImg) {
      return this.avatarImg;
    }

    return '../../../../assets/img/blank_avatar.jpeg'
  }

  async uploadedAvatar(event) {
    const file = event.target.files[0]

    if (file) {
      const { data: avatarUploaded, error } = await this.storageService.saveAvatar(file, this.userData.email)

      if (error) {
        this.toastrService.error("Erro ao carregar foto!");
        console.error(error)
      }

      if (avatarUploaded) {
        let documentResponse;
        let errorResponse;

        const updateTimeAvatar = '?t='+new Date().getTime()

        const { data: dataGetUrl, error: errorGetUrl } = await this.storageService.getUrlToSave(this.userData.email)

        if (dataGetUrl) {
          this.avatarImg = dataGetUrl.publicURL+updateTimeAvatar;

          await this.userService.updateUserData({
            avatar: this.avatarImg
          }, this.userData.id);

          this.toastrService.success("Imagem alterada com sucesso!");

          //@ts-ignore
          document.querySelector('.avatar-img').style.backgroundImage = `url(${this.avatarImg})`;

        }

        if (errorResponse || errorGetUrl) {
          this.toastrService.error("Erro ao atualizar Documento - Upload!");
          console.error(errorResponse)
        }
      }
    }
  }

  async getWorkExp() {
    const { data: workingExperienceList, errorWE } = await this.profileService.getWorkExpByUser(this.profileData.user.id)

    if (workingExperienceList) {
      this.workingExperienceList = workingExperienceList;
    }
  }

  setInitValues() {
    this.selectedAvailabilityType = this.profileData.availability;
    this.selectedRateType = this.profileData.typeRate;
    this.selectedMinRate = this.profileData.minRate
    this.selectedMaxRate = this.profileData.maxRate
    this.selectedSkillsList = JSON.parse(this.profileData.skills);
  }

  setHideCancel() {
    return !this.profileData || !this.profileData.id;
  }

  updateOrSaveProfile() {
    if (this.profileData && this.profileData.id) {
      this.editProfile()
    } else {
      this.saveProfile()
    }
  }

  async editProfile() {
    const profileToUpdate = Object.assign(this.profileToUpdate, {
      minRate: this.selectedMinRate,
      maxRate: this.selectedMaxRate,
      links: this.profileToUpdate.links
    })

    const { data, error } = await this.profileService.updateProfileData(profileToUpdate, this.profileData.id)
    if (data) {
      this.profileData = data[0];
      this.editingProfile = false;
      this.toastrService.success('Editado com sucesso!')
    }
    if (error) {
      console.log(error)
      this.editingProfile = true;
      this.toastrService.error('Erro ao Editar!')
    }
  }

  async saveProfile() {
    const profileToUpdate = Object.assign(this.profileToUpdate, {
      minRate: this.selectedMinRate,
      maxRate: this.selectedMaxRate,
      links: this.profileToUpdate.links,
      user: this.userData.id
    })

    const { data, error } = await this.profileService.saveProfileData(profileToUpdate)
    if (data) {
      this.profileData = data[0];
      this.editingProfile = false;
      this.toastrService.success('Perfil salvo com sucesso!')
    }
    if (error) {
      console.log(error)
      this.editingProfile = true;
      this.toastrService.error('Erro ao Editar!')
    }
  }

  removeLinkFromListToSave(linkIndex: number) {
    this.profileLinks.splice(linkIndex, 1);
    this.profileToUpdate['links'] = this.profileLinks;
  }

  async addLink() {
    const { value: url } = await Swal.fire({
      input: 'text',
      inputLabel: 'Insira links relevantes para seu perfil!',
      inputPlaceholder: 'ex: Site pessoal, Portfolio, etc...',
      showCancelButton: true,
      customClass: 'swal-wide',
      confirmButtonText: 'Adicionar Link',
      cancelButtonText: 'Cancelar'
    })

    if (url) {
      this.profileLinks.push(url)
      this.profileToUpdate['links'] = this.profileLinks
    }
  }

  async editOrCreateWorkExpModal(workExp?: any) {
    let workExpDataToSaveOrUpdate: any = {
      title: "",
      company: "",
      startedAt: "",
      endAt: "",
      description: "",
    };

    let stillWorking: any = null;

    if (workExp) {
      workExpDataToSaveOrUpdate = workExp
    }

    const { value: formValues } = await Swal.fire({
      customClass: 'swal-wide',
      title: 'Projeto ou Experiência Profissional',
      html: `
        <label class="font-semibold block text-sm text-blueGray-500">Título / Cargo</label>
        <input id="swal-title" value="${workExpDataToSaveOrUpdate?.title}" placeholder="Ex: Full-stack Developer, Designer Senior" class="swal2-input">
        <label class="font-semibold block mt-4 text-sm text-blueGray-500">Empresa</label>
        <input id="swal-company" value="${workExpDataToSaveOrUpdate?.company}" placeholder="Insira a Empresa" class="swal2-input">
        <label class="font-semibold block mt-4 text-sm text-blueGray-500">De (Data de início)</label>
        <input id="swal-startedAt" value="${workExpDataToSaveOrUpdate?.startedAt}" type="date" placeholder="Insira a data de início" class="swal2-input">
        <label id="label-to-endAt" class="font-semibold block mt-4 text-sm text-blueGray-500">Até (Data de término)</label>
        <input id="swal-endAt" value="${workExpDataToSaveOrUpdate?.endAt}" type="date" placeholder="Insira a data de término" class="swal2-input">
        <div class="mt-4 mb-2">
          <input type="checkbox" id="swal-stillWorking" name="stillWorking">
          <label for="stillWorking" class="ml-2">Meu emprego atual</label>
        </div>
        <label class="font-semibold block mt-4 text-sm text-blueGray-500">Fale um pouco sobre o Projeto/Experiência</label>
        <textarea id="swal-description" placeholder="Sobre" value="${workExpDataToSaveOrUpdate?.description}" class="swal2-input">${workExpDataToSaveOrUpdate?.description}</textarea>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      cancelButtonText: 'Cancelar',
      didRender: () => {
        if (workExpDataToSaveOrUpdate.id && workExpDataToSaveOrUpdate.stillWorking) {
          // @ts-ignore
          document.getElementById('swal-stillWorking')?.checked = true;
          document.getElementById('swal-endAt').style.display = "none"
          document.getElementById('label-to-endAt').style.display = "none"
        }

        document.getElementById('swal-stillWorking').addEventListener('change', (ev: any) => {
          const checkedValue = ev.target?.checked
          if (checkedValue === true) {
            stillWorking = true;
            workExpDataToSaveOrUpdate.endAt = null
            // @ts-ignore
            document.getElementById('swal-endAt')?.value = null

            document.getElementById('swal-endAt').style.visibility = "hidden"
            document.getElementById('label-to-endAt').style.visibility = "hidden"
          } else {
            stillWorking = null;
            document.getElementById('swal-endAt').style.visibility = "visible"
            document.getElementById('label-to-endAt').style.visibility = "visible"
          }
        });
      },
      preConfirm: () => {
        // @ts-ignore 
        const endAt = document.getElementById('swal-endAt')?.value
        return {
          // @ts-ignore
          title: document.getElementById('swal-title')?.value,
          // @ts-ignore
          company: document.getElementById('swal-company')?.value,
          // @ts-ignore
          startedAt: document.getElementById('swal-startedAt')?.value,
          endAt: (endAt === "" || !endAt) ? null : endAt,
          // @ts-ignore
          description: document.getElementById('swal-description')?.value,
          stillWorking: stillWorking
        }
      }
    })

    if (formValues) {
      if (workExpDataToSaveOrUpdate && workExpDataToSaveOrUpdate.id) {
        const { data: workingExperienceData, errorEditWE } = await this.profileService.updateWorkExpData(formValues, workExpDataToSaveOrUpdate.id)

        if (workingExperienceData) {
          Swal.close()
          this.getWorkExp()
          this.toastrService.success("Editado com sucesso!");
        }

        if (errorEditWE) {
          console.log(errorEditWE)
          this.toastrService.error('Erro ao Editar!')
        }
      } else {
        const dataToSave = Object.assign({
          user: this.profileData.user.id
        }, formValues)

        const { data: workingExperienceData, errorSaveWE } = await this.profileService.saveWorkExpData(dataToSave)

        if (workingExperienceData) {
          Swal.close()
          this.getWorkExp()
          this.toastrService.success("Salvo com sucesso!");
        }

        if (errorSaveWE) {
          console.log(errorSaveWE)
          this.toastrService.error('Erro ao Salvar!')
        }
      }
    }
  }

  async deleteWorkExp(WexpID) {
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: "Tenha cuidado, pois essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.profileService.deleteWorkExpData(WexpID)
        if (data) {
          this.getWorkExp();
          this.toastrService.success('Deletado com sucesso!')
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao Deletar!')
        }
      }
    })
  }
}
