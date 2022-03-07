import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../../../../services/company.service';
import { JobService } from '../../../../services/job.service';
import { JOB_STATUS } from '../../../../types/constants';

declare var Swal: any;

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.less']
})
export class NewJobComponent implements OnInit {

  titlePanel: string = '';

  editingNewJob: boolean = true;

  selectedSeniorityLevel: string;
  selectedProfileType: string;
  selectedContractType: string;
  selectedAvailabilityType: string;
  selectedMeetingTimeType: string;
  

  selectedRate: any;
  selectedSkillsList: any;

  companyData: any;
  jobData: any;
  jobToSaveOrUpdate: any = {};

  rateToCheck: boolean = false;

  seniorityLevelList: Array<string> = [
    'Não se aplica',
    'Junior',
    'Pleno',
    'Senior',
    'Lead/Leader',
    'Principal / Staff',
  ]

  profileType: Array<string> = [
    'Freelancer',
    'Contractor / PJ / Autônomo',
  ]

  availabilityType: Array<string> = [
    'FULL-TIME',
    'PART-TIME',
  ]

  meetingTimeType: Array<string> = [
    'Manhã',
    'Tarde',
    'Noite',
    'Indiferente'
  ]

  contractType: Array<string> = [
    'Por Hora',
    'Fixo',
    'Milestone / Por Entrega'
  ]

  jobStatusList: any;

  saveOrUpdateCB: Function;

  constructor(
    private jobService: JobService,
    private companyService: CompanyService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {
    this.saveOrUpdateCB = this.saveNewJob
    this.jobStatusList = JOB_STATUS;
  }

  async ngOnInit() {

    this.route.params.subscribe(async (params) => {
      const jobId = params['id'];
      this.titlePanel = (!jobId) ? 'Nova Oportunidade' : 'Editar Oportunidade'


      if (jobId) {
        const { data: jobById, error } = await this.jobService.getJobById(jobId);

        if (jobById) {
          this.editingNewJob = false;
          this.jobData = jobById;
        }

        if (jobById && error) {
          this.toastrService.error('Erro ao acessar Oportunidade!')
        }
      }

    })

    const { data, error } = await this.companyService.getCompanyByUser()

    if (data) {
      this.companyData = data;
    }
  }

  setEditing(ev) {
    this.editingNewJob = ev;

    this.jobToSaveOrUpdate = this.jobData;

    this.selectedSeniorityLevel = this.jobToSaveOrUpdate.seniorityLevel;
    this.selectedSkillsList = this.jobToSaveOrUpdate.skills;
    this.selectedProfileType = this.jobToSaveOrUpdate.profileType;
    this.selectedContractType = this.jobToSaveOrUpdate.contractType;
    this.selectedAvailabilityType = this.jobToSaveOrUpdate.availabilityType;
    this.selectedMeetingTimeType = this.jobToSaveOrUpdate.meetingTimeType;
    this.selectedRate = this.jobToSaveOrUpdate.rate;
  }

  setValue(key: string, value: string) {
    this.jobToSaveOrUpdate[key] = value;

    if (key === 'contractType') {
      if (value !== 'Por Hora' && value !== 'Fixo') {
        this.rateToCheck = true;
      }
    }
  }

  async triggerSaveOrEdit() {
    if (this.jobData && this.jobData.id) {
      this.editJob();
    } else {
      this.saveNewJob();
    }
  }

  async saveNewJob() {
    const jobToSave = Object.assign(this.jobToSaveOrUpdate, {
      company: this.companyData.id,
      rate: this.selectedRate
    })

    if (this.checkRequiredValues(jobToSave)) {
      this.toastrService.warning('Preencha todos os campos para salvar!')

      return;
    }

    const { data, error } = await this.jobService.saveNewJob(jobToSave)
    if (data) {
      this.jobData = data[0];
      this.editingNewJob = false;
      this.toastrService.success('Salvo com sucesso!')
    }
    if (error) {
      console.log(error)
      this.editingNewJob = true;
      this.toastrService.error('Erro ao Salvar!')
    }
  }

  async editJob() {
    const jobToUpdate = Object.assign(this.jobToSaveOrUpdate, {
      rate: this.selectedRate
    })

    if (this.checkRequiredValues(jobToUpdate)) {
      this.toastrService.warning('Preencha todos os campos para editar!')

      return;
    }

    const { data, error } = await this.jobService.updateJobData(jobToUpdate, this.jobData.id)
    if (data) {
      this.jobData = data[0];
      this.editingNewJob = false;
      this.toastrService.success('Editado com sucesso!')
    }
    if (error) {
      console.log(error)
      this.editingNewJob = true;
      this.toastrService.error('Erro ao Editar!')
    }
  }

  async closeJob(jobId) {
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: "Para reativar oportunidades fechadas entre em contato com o suporte!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, fechar oportunidade!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.jobService.closeJob(jobId)
        if (data) {
          this.jobData = data[0];
          this.toastrService.success('Fechado com sucesso!')
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao Fechar Oportunidade!')
        }
      }
    })
  }


  checkRequiredValues(jobToSave) {
    return (
      !jobToSave.title || jobToSave.title === '' ||
      !jobToSave.seniorityLevel || jobToSave.seniorityLevel === '' ||
      !jobToSave.skills || jobToSave.skills === '' ||
      !jobToSave.scopeOfWork || jobToSave.scopeOfWork === '' ||
      !jobToSave.requirements || jobToSave.requirements === '' ||
      !jobToSave.profileType || jobToSave.profileType === '' ||
      !jobToSave.contractType || jobToSave.contractType === '' ||
      !jobToSave.availabilityType || jobToSave.availabilityType === '' ||
      !jobToSave.meetingTimeType || jobToSave.meetingTimeType === '' ||
      !jobToSave.rate || jobToSave.rate === ''
    )
  }

}
