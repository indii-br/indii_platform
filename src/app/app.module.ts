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
import {IMaskModule} from 'angular-imask';

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
import { configReducer } from "./stores/config.reducer";

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
import { InvoiceComponent } from "./views/admin/invoices/invoice/invoice.component";
import { DashInvoicesComponent } from './views/admin/dashboard/dash-invoices/dash-invoices.component';
import { DashAppliesComponent } from './views/admin/dashboard/dash-applies/dash-applies.component';
import { DashHolidaysComponent } from './views/admin/dashboard/dash-holidays/dash-holidays.component';
import { DashContractsPendingComponent } from './views/admin/dashboard/dash-contracts-pending/dash-contracts-pending.component';
import { MyContractComponent } from './views/admin/contracts-contractor/my-contract/my-contract.component';
import { DashContractorInvoicesComponent } from './views/admin/dashboard/dash-contractor-invoices/dash-contractor-invoices.component';
import { DashContractorOnboardingComponent } from './views/admin/dashboard/dash-contractor-onboarding/dash-contractor-onboarding.component';
import { ContractorInvoiceComponent } from './views/admin/invoices/contractor-invoice/contractor-invoice.component';
import { MyInvoicesComponent } from "./views/admin/invoices/my-invoices/my-invoices.component";
import { CreateContractorComponent } from './views/signup/create-contractor/create-contractor.component';
import { BillingComponent } from './views/admin/billing/billing.component';
import { SquadsComponent } from './views/admin/squads/squads.component';
import { ContractorMenuComponent } from './components/sidebar/contractor-menu/contractor-menu.component';
import { ClientMenuComponent } from './components/sidebar/client-menu/client-menu.component';
import { ViewDetailsBillComponent } from './views/admin/billing/view-details-bill/view-details-bill.component';
import { JobRowComponent } from './views/admin/jobs-contractor/job-row/job-row.component';
import { PartnerRowComponent } from './views/admin/jobs-contractor/partner-row/partner-row.component';
import { JobWrapperComponent } from './views/admin/jobs-contractor/job-wrapper/job-wrapper.component';
import { NewSquadComponent } from "./views/admin/squads/new-squad/new-squad.component";
import { CreateClientComponent } from './views/signup/create-client/create-client.component';

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
    InvoiceComponent,
    DashInvoicesComponent,
    DashAppliesComponent,
    DashHolidaysComponent,
    DashContractsPendingComponent,
    MyInvoicesComponent,
    MyContractComponent,
    DashContractorInvoicesComponent,
    DashContractorOnboardingComponent,
    ContractorInvoiceComponent,
    CreateContractorComponent,
    BillingComponent,
    SquadsComponent,
    ContractorMenuComponent,
    ClientMenuComponent,
    ViewDetailsBillComponent,
    JobRowComponent,
    PartnerRowComponent,
    JobWrapperComponent,
    NewSquadComponent,
    CreateClientComponent,
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
    IMaskModule,
    StoreModule.forRoot({ 
      user: userReducer,
      profile: profileReducer,
      company: companyReducer,
      config: configReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
