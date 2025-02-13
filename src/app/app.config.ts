import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { AuthService } from './auth/auth.service'
import { InMemoryAuthService } from './auth/auth.in-memory.service'
import { AuthHttpInterceptor } from './auth/auth.http.interceptor'
import { MessageService } from 'primeng/api'
import { DialogService } from 'primeng/dynamicdialog'
import { providePrimeNG } from 'primeng/config'
import Aura from '@primeng/themes/aura'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getAuth, provideAuth } from '@angular/fire/auth'
import { environment } from '../environments/environment'
import { FirebaseAuthService } from './auth/auth.firebase.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([AuthHttpInterceptor])),
    MessageService,
    DialogService,
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    { provide: AuthService, useClass: FirebaseAuthService },
  ],
}
