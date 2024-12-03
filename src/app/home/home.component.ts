import { Component, OnInit } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { AuthService } from '../auth/auth.service'
import { combineLatest, filter, tap } from 'rxjs'
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, RouterLink, LoginComponent],
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
  displayLogin = true

  constructor() // private router: Router // private authService: AuthService,
  {}

  // ngOnInit(): void {}

  // login() {
  //   this.authService.login('manager@test.com', '12345678')
  //   combineLatest([this.authService.authStatus$, this.authService.currentUser$])
  //     .pipe(
  //       filter(([authStatus, user]) => authStatus.isAuthenticated && user._id !== ''),
  //       tap(([authStatus, user]) => {
  //         this.router.navigate(['/manager'])
  //       })
  //     )
  //     .subscribe()
  // }
}
