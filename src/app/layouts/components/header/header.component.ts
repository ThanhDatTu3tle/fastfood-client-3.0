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
  constructor(
    public dialog: MatDialog,
    private readonly google: GoogleApiService
  ) {
  }

  ngOnInit() {
    if (this.user != null) {
      localStorage.setItem('isLogin', 'true');
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginFormComponent, {
      width: '620px',
      height: '420px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

