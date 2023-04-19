import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";

import {NoWhitespaceValidator} from "../../../validators/no-whitespace.validator";

import { Observable, of } from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  signInForm!: FormGroup
  contentBtn: string = 'Continue';
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: [
        "",
        Validators.compose([
          // NoWhitespaceValidator(),
          Validators.minLength(6),
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g)
        ])
      ]
    })

    new FormControl("", Validators.required, this.isUserNameDuplicated);
  }

  onSubmit() {

  }

  isUserNameDuplicated(control: AbstractControl): Observable<null> {
    return of(null);
  }
}
