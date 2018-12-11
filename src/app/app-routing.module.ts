import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { OpportunitiesEditComponent } from "./opportunities-edit/opportunities-edit.component";

const routes: Routes = [
  { path: "", component: AboutComponent },
  {
    path: "OpportunitiesEditComponent",
    component: OpportunitiesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
