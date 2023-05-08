import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
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
export class LoginFormComponent implements AfterViewInit {
  @ViewChild('inputRef') inputRef!: ElementRef;

  captcha: string;
  email: string;
  contentBtn: string = 'Continue';
  checkoutAsGuest: boolean = true;
  otpScreen: boolean = true;
  constructor(
    private fb: FormBuilder,
    private readonly google: GoogleApiService
  ) {
    this.captcha = '';
    this.email = 'Secret@email.com';
  }

  signInForm = this.fb.group({
    "email": [
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.email,
        Validators.pattern('^[0-9]{10}$')
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

  ngAfterViewInit() {
    this.inputRef.nativeElement.blur();
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('Resolved captcha with  response: ' + this.captcha);
  }

  handleCheckoutAsGuest() {
   this.checkoutAsGuest = !this.checkoutAsGuest;
  }

  handleOptScreen() {
    this.otpScreen = !this.otpScreen;
  }

  handleSignInGoogle() {
    this.google.signIn()
  }
}
