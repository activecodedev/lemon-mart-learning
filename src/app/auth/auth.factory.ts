import { environment } from '../../environments/environment'
import { InMemoryAuthService } from './auth.in-memory.service'
import { AuthMode } from './auth.enum'
import { FirebaseAuthService } from './auth.firebase.service'

export function authFactory() {
  switch (environment.authMode) {
    case AuthMode.InMemory:
      return new InMemoryAuthService()
    case AuthMode.Firebase:
      return new FirebaseAuthService()
    case AuthMode.CustomServer:
      throw new Error('Not implemented yet')
    case AuthMode.CustomGraphQL:
      throw new Error('Not implemented yet')
  }
}
