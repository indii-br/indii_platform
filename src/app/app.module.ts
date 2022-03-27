import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxCurrencyModule } from "ngx-currency";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";

import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { SiteComponent } from "./views/site/site.component";
import { LandingComponent } from "./views/landing/landing.component";
import { PublicProfileComponent } from "./views/public-profile/public-profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { AvatarDefaultComponent } from './components/avatar-default/avatar-default.component';
import { SettingsUserComponent } from './views/admin/settings/settings-user/settings-user.component';
import { SettingsCompanyComponent } from './views/admin/settings/settings-company/settings-company.component';
import { NewContractComponent } from './views/admin/contracts/new-contract/new-contract.component';
import { EditablePainelComponent } from './components/editable-painel/editable-painel.component';
import { EditableInputBlockComponent } from './components/editable-input-block/editable-input-block.component';
import { ContractsComponent } from './views/admin/contracts/contracts.component';
import { JobsComponent } from './views/admin/jobs/jobs.component';
import { NewJobComponent } from './views/admin/jobs/new-job/new-job.component';
import { TipsJobComponent } from './views/admin/jobs/tips-job/tips-job.component';
import { ProfileAppliedComponent } from './views/admin/jobs/profile-applied/profile-applied.component';
import { ProfileComponent } from "./views/admin/profile/profile.component";
import { SelectTypeContractComponent } from './views/admin/contracts/select-type-contract/select-type-contract.component';
import { AddMilestonesComponent } from './views/admin/contracts/add-milestones/add-milestones.component';
import { ResetPasswordComponent } from './views/auth/reset-password/reset-password.component';
import { InfoContractComponent } from './views/admin/contracts/info-contract/info-contract.component';
import { ContractorBlockComponent } from './views/admin/contracts/contractor-block/contractor-block.component';
import { PaymentBlockComponent } from './views/admin/contracts/payment-block/payment-block.component';
import { UploadContractBlockComponent } from './views/admin/contracts/upload-contract-block/upload-contract-block.component';
import { StoreModule } from '@ngrx/store';

import { userReducer } from "./stores/user.reducer";
import { profileReducer } from "./stores/profile.reducer";


import { HeaderStatsContractorComponent } from './components/headers/header-stats-contractor/header-stats-contractor.component';
import { JobsContractorComponent } from './views/admin/jobs-contractor/jobs-contractor.component';
import { ContractsContractorComponent } from './views/admin/contracts-contractor/contracts-contractor.component';
import { ContractorDocumentsComponent } from './views/admin/contractor-documents/contractor-documents.component';
import { JobPageComponent } from './views/admin/job-page/job-page.component';
import { SettingsContractorCompanyComponent } from './views/admin/settings/settings-contractor-company/settings-contractor-company.component';
import { ProfileContractorComponent } from './views/admin/profile-contractor/profile-contractor.component';
import { InvoicesComponent } from './views/admin/invoices/invoices.component';
import { companyReducer } from "./stores/company.reducer";
import { DocumentsListComponent } from './views/admin/contractor-documents/documents-list/documents-list.component';
import { MyDocumentsComponent } from './views/admin/contractor-documents/my-documents/my-documents.component';
import { BankAccountsComponent } from './views/admin/bank-accounts/bank-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    SiteComponent,
    LandingComponent,
    ProfileComponent,
    PublicProfileComponent,
    AvatarDefaultComponent,
    SettingsUserComponent,
    SettingsCompanyComponent,
    NewContractComponent,
    EditablePainelComponent,
    EditableInputBlockComponent,
    ContractsComponent,
    JobsComponent,
    NewJobComponent,
    TipsJobComponent,
    ProfileAppliedComponent,
    SelectTypeContractComponent,
    AddMilestonesComponent,
    ResetPasswordComponent,
    InfoContractComponent,
    ContractorBlockComponent,
    PaymentBlockComponent,
    UploadContractBlockComponent,
    HeaderStatsContractorComponent,
    JobsContractorComponent,
    ContractsContractorComponent,
    ContractorDocumentsComponent,
    JobPageComponent,
    SettingsContractorCompanyComponent,
    ProfileContractorComponent,
    InvoicesComponent,
    DocumentsListComponent,
    MyDocumentsComponent,
    BankAccountsComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    NgSelectModule, 
    NgxCurrencyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      user: userReducer,
      profile: profileReducer,
      company: companyReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
