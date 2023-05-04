import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Twilio from 'twilio-client';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  accountSid = 'your_account_sid';
  authToken = 'your_auth_token';
  serviceId = 'your_service_id';
  twilioClient: any;
  constructor(private http: HttpClient) {
    // @ts-ignore
    this.twilioClient = new Twilio(this.accountSid, this.authToken);
  }

  sendOTP(phoneNumber: string): Observable<any> {
    const verification = this.twilioClient.verify.services(this.serviceId).verifications.create({
      to: phoneNumber,
      channel: 'sms'
    });
    return verification;
  }

  verifyOTP(phoneNumber: string, code: string): Observable<any> {
    const verificationCheck = this.twilioClient.verify.services(this.serviceId).verificationChecks.create({
      to: phoneNumber,
      code: code
    });
    return verificationCheck;
  }
}
