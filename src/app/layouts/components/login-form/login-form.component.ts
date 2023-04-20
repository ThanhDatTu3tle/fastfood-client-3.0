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
import {GoogleApiService} from "../../../google-api.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  contentBtn: string = 'Continue';
  constructor(
    private fb: FormBuilder,
    private readonly google: GoogleApiService
  ) {
  }

  signInForm = this.fb.group({
    "email": [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)
      ])
    ]
  })

  ngOnInit() {

  }
  get form() {
    return this.signInForm.controls;
  }

  onSubmit() {

  }

  handleSignInGoogle() {
    this.google.signIn()
  }
}
