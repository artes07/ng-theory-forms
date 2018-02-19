import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'да'
  }, {
      type: 'no',
      text: 'нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  addRandEmail() {
    const randEmail = 'test@gmail.com';
    /*this.form.setValue({
      user: {
        pass: '',
        email: randEmail
      },
      country: '',
      answer: ''
    });*/
    this.form.form.patchValue({
      user: { email: randEmail }
    });
  }

  submitForm() {
    console.log('Submited!', this.form);
  }
}
