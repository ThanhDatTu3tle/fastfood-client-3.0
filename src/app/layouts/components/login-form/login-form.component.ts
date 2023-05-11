import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";

// @ts-ignore
import * as firebase from 'firebase/app';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

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
  otpCode!: string;
  // @ts-ignore
  confirmationResult: firebase.auth.ConfirmationResult;
  constructor(
    private fb: FormBuilder,
    private readonly google: GoogleApiService,
    private afAuth: AngularFireAuthModule
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
    const phoneNumber = 'RECIPIENT_PHONE_NUMBER'; // Replace with the recipient's phone number

    // @ts-ignore
    this.afAuth.auth.signInWithPhoneNumber(phoneNumber)
      .then((confirmationResult: any) => {
        this.confirmationResult = confirmationResult;
        console.log('OTP sent successfully.');
      })
      // .catch(error => {
      //   console.error('Failed to send OTP:', error);
      // });
  }

  verifyOTP() {
    const otp = this.otpCode;

    this.confirmationResult.confirm(otp)
      .then(() => {
        console.log('OTP verification successful.');
      })
      // .catch(error => {
      //   console.error('Failed to verify OTP:', error);
      // });
  }

  handleSignInGoogle() {
    this.google.signIn()
  }
}
