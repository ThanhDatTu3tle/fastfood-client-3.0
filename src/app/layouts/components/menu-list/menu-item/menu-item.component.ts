import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() content: string | undefined;
  @Input() image: string | undefined;
  @Input() link: string | undefined;
}
