import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { AuthService } from "src/app/services/auth.service";

declare var Swal: any;

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false })
  btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;

  @Input('user') user: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }

  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  openHelpBlock() {
    Swal.fire({
      title: 'Você precisa de ajuda?',
      text: "Entre em contato via contato@indii.com.br",
      icon: 'info',
    })
  }

  logout() {
    this.authService.signOut()
  }
}
