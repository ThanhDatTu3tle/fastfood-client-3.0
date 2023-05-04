import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { createPopper, Instance } from '@popperjs/core';

import {GoogleApiService} from "../../../../google-api.service";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  popperInstance!: Instance;
  state = false;

  @ViewChild('button', { static: true }) button!: ElementRef
  @ViewChild('tooltip', { static: true }) tooltip!: ElementRef
  constructor(
    private readonly google: GoogleApiService
  ) {}

  ngOnInit(): void {
    this.popperInstance = createPopper(
      this.button.nativeElement,
      this.tooltip.nativeElement,
      {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
              interactive: true,
            },
          },
        ],
      }
    );
  }

  show(): void {
    // Make the tooltip visible
    if (!this.state) {
      this.tooltip.nativeElement.setAttribute('data-show', '');
      this.state = true;
    } else {
      this.tooltip.nativeElement.removeAttribute('data-show');
      this.state = false;
    }

    // Enable the event listeners
    this.popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    this.popperInstance.update();
  }

  logout() {
    return this.google.signOut()
  }
}
