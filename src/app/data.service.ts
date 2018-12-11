import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SKILLS, BACKGROUNDS } from "./mock-data";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getOpportunities() {
    return this.http.get(
      "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/6124?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&api_key=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"
    );
  }

  getSkills(): Object {
    return SKILLS;
  }

  getBackgrounds(): Object {
    return BACKGROUNDS;
  }
}
