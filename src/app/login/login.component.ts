import { Component, inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CardModule } from 'primeng/card'
import { AuthService } from '../auth/auth.service'
import { ActivatedRoute, Router } from '@angular/router'
import { catchError, combineLatest, filter, first, tap, throwError } from 'rxjs'
import { ButtonModule } from 'primeng/button'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { InputTextModule } from 'primeng/inputtext'
import { MessagesModule } from 'primeng/messages'
import { CommonModule } from '@angular/common'
import { Message } from 'primeng/api'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    CommonModule,
    MessagesModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder)
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly route = inject(ActivatedRoute)

  loginForm!: FormGroup
  loginError = ''
  msgs: Message[] = []

  get redirectUrl() {
    return this.route.snapshot.queryParamMap.get('redirectUrl') || ''
  }

  ngOnInit(): void {
    this.authService.logout()
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(50)],
      ],
    })
  }

  async login(submittedForm: FormGroup) {
    this.authService.login(submittedForm.value.email, submittedForm.value.password).pipe(
      catchError((err) => {
        this.pushMessageError(err)
        return throwError(err)
      })
    )
    combineLatest([this.authService.authStatus$, this.authService.currentUser$])
      .pipe(
        filter(([authStatus, user]) => authStatus.isAuthenticated && user._id !== ''),
        first(),
        tap(([authStatus, user]) => {
          this.router.navigate([this.redirectUrl || '/manager'])
        })
      )
      .subscribe()
  }

  pushMessageError(error: string) {
    this.msgs = []
    this.msgs.push({
      severity: 'error',
      summary: 'Error Message',
      detail: error,
    })
  }
}
