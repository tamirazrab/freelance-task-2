import { Component, OnInit } from '@angular/core';
import { emailValidator } from "./utils";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";

export interface PersonResponse {
  tsID: string;
  name: string;
  email: string;
  location: string;
  gender: string;
  genderIcon: string;
  isInvalid: Boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  apiUrl: string = 'https://dothbe.com/'

  displayedColumns: string[] = ['name', 'email', 'location', 'gender'];
  dataSource = new MatTableDataSource<PersonResponse>()

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.getAllPersons().subscribe((persons: PersonResponse[]) => {
      persons.forEach(person => {
        person.genderIcon = this.genderValidate(person.gender)
        const isValidEmail = emailValidator(person.email)
        person.isInvalid = !isValidEmail;
      })
      this.dataSource.data = persons;
    })
  }


  title = 'freelance-task-2';


  getAllPersons(): Observable<PersonResponse[]> {
    return this.http.get<[PersonResponse[]]>(this.apiUrl + '/test').pipe(
      map((response) => response[0]),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return EMPTY;
      })
    )
  }

  genderValidate(gender: string) {
    const isGenderSpecified = gender === "female" || gender === "male"
    const genderIcon = (gender === "female" ? "female" : "male")
    return isGenderSpecified ? genderIcon : "question_mark"
  }


}
