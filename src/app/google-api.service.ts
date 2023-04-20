import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '893717568479-4t4vsa4i9hp48hcd8o9i0q5db1u3br3i.apps.googleusercontent.com',
  scope: 'email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService implements OnInit {

  constructor(
    private readonly oAuthService: OAuthService,
    private http: HttpClient
  ) {
    // oAuthService.configure(oAuthConfig)
    // oAuthService.logoutUrl = 'http://localhost:4200/'
    // oAuthService.loadDiscoveryDocument().then(() => {
    //   oAuthService.tryLoginImplicitFlow().then(() => {
    //     if (!oAuthService.hasValidAccessToken()) {
    //       oAuthService.initLoginFlow()
    //     } else {
    //       oAuthService.loadUserProfile().then((userProfile) => {
    //         const userName = Object.entries(userProfile)[0][1].name
    //         console.log(userName)
    //         localStorage.setItem('user', userName)
    //       })
    //     }
    //   })
    // })
  }

  ngOnInit() {
    this.signIn()
  }

  signIn() {
    this.oAuthService.configure(oAuthConfig)
    this.oAuthService.logoutUrl = 'http://localhost:4200'

    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            const userName = Object.entries(userProfile)[0][1].name
            console.log(userName)
            localStorage.setItem('user', userName)
            window.location.reload()
          })
        }
      })
    })
  }

  signOut() {
    localStorage.clear()
    this.oAuthService.logOut()
    window.location.reload()
  }
}
