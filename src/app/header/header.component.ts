import { Component } from '@angular/core';
import { Cart } from '../shared/modules/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
cart!:Cart;
}
