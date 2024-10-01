import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div
      class="flex flex-column align-content-center align-items-center justify-content-center border-primary-500 border-round m-2"
    >
      <p class="text-5xl">Hello, Liumoncu!</p>
      <button pButton pRipple class="p-button-success">Login</button>
    </div>
  `,
  styles: [
    `
      div {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent {}
