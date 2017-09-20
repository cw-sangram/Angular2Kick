import { Component, Input } from "@angular/core";
import { QuestionBase } from "../_Question/Question-base";
import { FormGroup } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'dynamic-form',
    templateUrl: 'dynamicform.component.html'
})

export class DynamicFormComponent {
    @Input() questions: QuestionBase<any>;
    @Input() form: FormGroup;

    get isValid() { 
        return this.form.controls[this.questions.key].valid;
     }
}