import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { AuthService } from '../auth/auth.service'
import { LoginComponent } from '../login/login.component'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, LoginComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styles: [
    `
      div {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent {
  constructor(public authService: AuthService) {
    // private router: Router // private authService: AuthService,
  }
}
