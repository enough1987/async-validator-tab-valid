import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

const asynkValidateLol = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

  return new Promise((resolve) => {
    setTimeout(() => {
        if (
          !control.value.name.includes('lol') &&
          !control.value.email.includes('lol')
        ) {
          resolve(null);
        }
        resolve({sameValue: 'ERROR...'});
      },
      1000);
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;
  activeForm: string;

  constructor() {
    this.form = new FormGroup({

      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]{2,3}')
      ]),
      'phone': new FormControl()
    }, null, asynkValidateLol);
  }

  listenTab(tab: string): void {
    console.log(tab, ' - ', this.form);
    if (this.form.status === 'VALID') {
      this.activeForm = tab;
    }
  }
}
