import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from "../login-form/login-form.component";
import {GoogleApiService} from "../../../google-api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string | null = localStorage.getItem('user');

  contentBtnLogin: string = "LOGIN";
  contentBtnLogout: string = "LOGOUT";
  constructor(
    public dialog: MatDialog,
    private readonly google: GoogleApiService
  ) {
  }

  ngOnInit() {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginFormComponent, {
      width: '620px',
      height: '420px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  logout() {
    return this.google.signOut()
  }
}

