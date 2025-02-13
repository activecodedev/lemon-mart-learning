import { inject, Injectable } from '@angular/core'
import {
  AuthService,
  defaultAuthStatus,
  IAuthStatus,
  IServerAuthResponse,
} from './auth.service'
import { Observable, of, Subject } from 'rxjs'
import { IUser, User } from '../user/user/user'
import {
  Auth as FireAuth,
  User as FireUser,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth'
import { Role } from './auth.enum'

interface IJwtToken {
  email: string
  iat: number
  exp: number
  sub: string
}

@Injectable()
export class FirebaseAuthService extends AuthService {
  private afAuth: FireAuth = inject(FireAuth)

  constructor() {
    super()
  }

  protected authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    const serverResponse$ = new Subject<IServerAuthResponse>()

    signInWithEmailAndPassword(this.afAuth, email, password).then(
      (res) => {
        const firebaseUser: FireUser | null = res.user
        firebaseUser?.getIdToken().then(
          (token) => serverResponse$.next({ accessToken: token } as IServerAuthResponse),
          (err) => serverResponse$.error(err)
        )
      },
      (err) => serverResponse$.error(err)
    )

    return serverResponse$
  }

  protected transformJwtToken(token: IJwtToken): IAuthStatus {
    if (!token) {
      return defaultAuthStatus
    }

    return {
      isAuthenticated: token.email ? true : false,
      userId: token.sub,
      userRole: Role.None,
    }
  }

  protected getCurrentUser(): Observable<User> {
    return of(this.transformFirebaseUser(this.afAuth.currentUser))
  }

  private transformFirebaseUser(firebaseUser: FireUser | null): User {
    if (!firebaseUser) {
      return new User()
    }

    return User.Build({
      name: {
        first: firebaseUser?.displayName?.split(' ')[0] || 'Firebase',
        last: firebaseUser?.displayName?.split(' ')[1] || 'User',
      },
      picture: firebaseUser.photoURL,
      email: firebaseUser.email,
      role: Role.None,
      _id: firebaseUser.uid,
    } as IUser)
  }

  override async logout() {
    if (this.afAuth) {
      await signOut(this.afAuth)
    }

    this.clearToken()
    this.authStatus$.next(defaultAuthStatus)
  }
}
