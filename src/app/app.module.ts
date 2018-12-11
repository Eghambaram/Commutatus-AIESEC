import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { OpportunitiesComponent } from "./opportunities/opportunities.component";
import { OpportunitiesEditComponent } from "./opportunities-edit/opportunities-edit.component";

import { Opportunities } from "./model/opportunities";
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    OpportunitiesComponent,
    OpportunitiesEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
