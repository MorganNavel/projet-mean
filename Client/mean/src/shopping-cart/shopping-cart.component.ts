import { Component } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

}
