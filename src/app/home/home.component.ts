import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styles: [
    `
      div {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent {}
