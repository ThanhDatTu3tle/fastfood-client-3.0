import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {timeout } from 'rxjs';
import { GoogleApiService } from "../../../google-api.service";

@Component({
  selector: 'app-nav-titles',
  templateUrl: './nav-titles.component.html',
  styleUrls: ['./nav-titles.component.scss']
})
export class NavTitlesComponent implements OnInit {

  constructor(
    private router: Router,
    private readonly google: GoogleApiService
  ) {
  }

  ngOnInit(): void {
  }
  logout() {
    this.google.signOut()
    setTimeout(() => {
      return this.router.navigate(["/"])
    }, 2000);
  }
}
