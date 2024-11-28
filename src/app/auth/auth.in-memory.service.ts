import { Injectable } from '@angular/core'
import { AuthService, IAuthStatus, IServerAuthResponse } from './auth.service'
import { Observable, of, throwError } from 'rxjs'
import { PhoneType, User } from '../user/user/user'
import { sign } from 'fake-jwt-sign'
import { Role } from './auth.enum'

@Injectable({
  providedIn: 'root',
})
export class InMemoryAuthService extends AuthService {
  private defaultUser = User.Build({
    _id: '5da01751da27cc462d265913',
    email: 'rafal@hotmail.com',
    name: { first: 'Rafal', last: 'Pachnicki' },
    picture:
      'https://gravatar.com/userimage/258958359/a0ce9dcd4f343b46ec1dd90b52bc6013.jpeg?size=256',
    role: Role.Manager,
    dateOfBirth: new Date(1987, 1, 1),
    userStatus: true,
    address: {
      line1: 'Testowa 7',
      city: 'Warszawa',
      state: 'Mazowieckie',
      zip: '00-123',
    },
    level: 2,
    phones: [{ id: 0, type: PhoneType.Mobile, digits: '111222333' }],
  })

  constructor() {
    super()
    console.warn(
      'You are using the InMemoryAuthService. Do not use this service in production.'
    )
  }

  protected override authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    email = email.toLowerCase()

    if (!email.endsWith('@test.com')) {
      return throwError('Failed to login! Email needs to end with @test.com')
    }

    const authStatus = {
      isAuthenticated: true,
      userId: this.defaultUser._id,
      userRole: email.includes('cashier')
        ? Role.Cashier
        : email.includes('clerk')
          ? Role.Clerk
          : email.includes('manager')
            ? Role.Manager
            : Role.None,
    } as IAuthStatus
    this.defaultUser.role = authStatus.userRole
    const authResponse = {
      accessToken: sign(authStatus, 'secret', {
        expiresIn: '1h',
        algorithm: 'none',
      }),
    } as IServerAuthResponse

    return of(authResponse)
  }

  protected override transformJwtToken(token: IAuthStatus): IAuthStatus {
    return token
  }
  protected override getCurrentUser(): Observable<User> {
    return of(this.defaultUser)
  }
}
