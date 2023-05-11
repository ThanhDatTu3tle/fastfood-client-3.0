import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.scss']
})
export class ButtonOutlineComponent {
  @Input() content: string | undefined;

  handleBtn() {

  }
}
