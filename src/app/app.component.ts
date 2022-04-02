import {Component, OnInit} from '@angular/core';
import {emailValidator} from "./utils";

export interface PersonResponse {
  tsID: string;
  name: string;
  email: string;
  location: string;
  gender: string;
  isInvalid?: Boolean
}

const ELEMENT_DATA: PersonResponse[] = [{
  "tsID": "1",
  "name": "Jane Doe",
  "email": "jane.doe@chloedog.org",
  "location": "United State",
  "gender": "famale"
}, {
  "tsID": "2",
  "name": "David Pierce",
  "email": "david.pierce@chloedog.org",
  "location": "Finland",
  "gender": "male"
}, {
  "tsID": "3",
  "name": "Paul Jone",
  "email": "paul.jones@chloedog.org",
  "location": "Egypt",
  "gender": "male"
}, {
  "tsID": "4",
  "name": "Mary Smith",
  "email": "",
  "location": "Norway",
  "gender": "female"
}, {
  "tsID": "5",
  "name": "John Davis",
  "email": "john.davischloedog.org",
  "location": "Canada",
  "gender": "male"
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    ELEMENT_DATA.forEach(element => {
      const isValidEmail = emailValidator(element.email)
      element.isInvalid = !isValidEmail;
    })
  }

  title = 'freelance-task-2';

  displayedColumns: string[] = ['name', 'email', 'location', 'gender'];
  dataSource = ELEMENT_DATA;


}
