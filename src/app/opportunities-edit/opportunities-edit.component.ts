import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
// import { Opportunities } from "../model/opportunities";

@Component({
  selector: "app-opportunities-edit",
  templateUrl: "./opportunities-edit.component.html",
  styleUrls: ["./opportunities-edit.component.scss"]
})
export class OpportunitiesEditComponent implements OnInit {
  opportunities$: any;
  skills$: any;
  backgrounds$: any;
  // submitted: boolean = false;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data
      .getOpportunities()
      .subscribe(data => (this.opportunities$ = data));

    this.skills$ = this.data.getSkills();
    this.backgrounds$ = this.data.getBackgrounds();
  }
  onSubmit() {}
}
