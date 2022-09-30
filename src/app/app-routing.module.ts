import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { NewContractComponent } from "./views/admin/contracts/new-contract/new-contract.component";
import { ContractsComponent } from "./views/admin/contracts/contracts.component";
import { JobsComponent } from "./views/admin/jobs/jobs.component";
import { NewJobComponent } from "./views/admin/jobs/new-job/new-job.component";
import { ProfileComponent } from "./views/admin/profile/profile.component";
import { ResetPasswordComponent } from "./views/auth/reset-password/reset-password.component";
import { JobsContractorComponent } from "./views/admin/jobs-contractor/jobs-contractor.component";
import { ContractsContractorComponent } from "./views/admin/contracts-contractor/contracts-contractor.component";
import { JobPageComponent } from "./views/admin/job-page/job-page.component";
import { ProfileContractorComponent } from "./views/admin/profile-contractor/profile-contractor.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

//signup views
import { CreateContractorComponent } from "./views/signup/create-contractor/create-contractor.component";

// no layouts views
import { SiteComponent } from "./views/site/site.component";
import { LandingComponent } from "./views/landing/landing.component";
import { PublicProfileComponent } from "./views/public-profile/public-profile.component";
import { InvoicesComponent } from "./views/admin/invoices/invoices.component";
import { ContractorDocumentsComponent } from "./views/admin/contractor-documents/contractor-documents.component";
import { MyDocumentsComponent } from "./views/admin/contractor-documents/my-documents/my-documents.component";
import { BankAccountsComponent } from "./views/admin/bank-accounts/bank-accounts.component";
import { InvoiceComponent } from "./views/admin/invoices/invoice/invoice.component";
import { MyContractComponent } from "./views/admin/contracts-contractor/my-contract/my-contract.component";
import { ContractorInvoiceComponent } from "./views/admin/invoices/contractor-invoice/contractor-invoice.component";
import { MyInvoicesComponent } from "./views/admin/invoices/my-invoices/my-invoices.component";
import { BillingComponent } from "./views/admin/billing/billing.component";
import { SquadsComponent } from "./views/admin/squads/squads.component";
import { ViewDetailsBillComponent } from "./views/admin/billing/view-details-bill/view-details-bill.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "contratos", component: ContractsComponent },
      { path: "meus-contratos", component: ContractsContractorComponent },
      { path: "m/contrato/:id", component: MyContractComponent },
      { path: "m/invoice/:id", component: ContractorInvoiceComponent },
      { path: "novo-contrato", component: NewContractComponent },
      { path: "editar-contrato/:id", component: NewContractComponent },
      { path: "oportunidades", component: JobsComponent },
      { path: "oportunidades-abertas", component: JobsContractorComponent },
      { path: "nova-oportunidade", component: NewJobComponent },
      { path: "oportunidade/:id", component: JobPageComponent },
      { path: "editar-oportunidade/:id", component: NewJobComponent },
      { path: "profile/:id", component: ProfileComponent },
      { path: "meu-perfil", component: ProfileContractorComponent },
      { path: "faturas", component: InvoicesComponent },
      { path: "invoice/:id", component: InvoiceComponent },
      { path: "meus-pagamentos", component: MyInvoicesComponent },
      { path: "documentos", component: ContractorDocumentsComponent },
      { path: "minhas-contas", component: BankAccountsComponent },
      { path: "meus-documentos", component: MyDocumentsComponent },
      { path: "billing", component: BillingComponent },
      { path: "billing-details/:id", component: ViewDetailsBillComponent },
      { path: "squads", component: SquadsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "alterar-senha", component: ResetPasswordComponent },
      { path: "alterar-senha/:token", component: ResetPasswordComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
    // signup views
    {
      path: "signup",
      component: AuthComponent,
      children: [
        { path: "contractor", component: CreateContractorComponent },
      ],
    },
  // no layout views
  { path: "public-profile", component: PublicProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: SiteComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
