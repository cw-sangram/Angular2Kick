import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../_services/question.service";

@Component({
  selector: 'app-dynamic-form-test',
  template: `<div>
               <h2>Job Application for Heroes</h2>
               <dynamic-form [questions]="questions"></dynamic-form>
           </div>`,
  providers: [QuestionService]
})
export class DynamicFormTestComponent implements OnInit {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
``