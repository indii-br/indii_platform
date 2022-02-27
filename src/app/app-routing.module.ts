import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
import { NewContractComponent } from "./views/admin/contracts/new-contract/new-contract.component";
import { ContractsComponent } from "./views/admin/contracts/contracts.component";
import { JobsComponent } from "./views/admin/jobs/jobs.component";
import { NewJobComponent } from "./views/admin/jobs/new-job/new-job.component";
import { ProfileComponent } from "./views/admin/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "contratos", component: ContractsComponent },
      { path: "oportunidades", component: JobsComponent },
      { path: "nova-oportunidade", component: NewJobComponent },
      { path: "editar-oportunidade/:id", component: NewJobComponent },
      { path: "profile/:id", component: ProfileComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
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
export class AppRoutingModule {}
