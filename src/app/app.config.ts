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

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([AuthHttpInterceptor])),
    { provide: AuthService, useClass: InMemoryAuthService },
    MessageService,
    DialogService,
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
}
