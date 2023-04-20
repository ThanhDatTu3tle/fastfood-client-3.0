import { Component } from '@angular/core';

import {GoogleApiService} from "./google-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fastfood-client-3.0';

  constructor(
    private readonly google: GoogleApiService
  ) {
  }
}
