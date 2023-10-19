import { Component } from '@angular/core';
import { Menus } from 'src/app/common/common.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menus = Menus;
}
