import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

import { Opportunities } from "../model/opportunities";

@Component({
  selector: "app-opportunities",
  templateUrl: "./opportunities.component.html",
  styleUrls: ["./opportunities.component.scss"]
})
export class OpportunitiesComponent implements OnInit {
  opportunities$: Opportunities;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data
      .getOpportunities()
      .subscribe(data => (this.opportunities$ = data));
  }
}
