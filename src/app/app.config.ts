import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideHttpClient } from '@angular/common/http'
import { AuthService } from './auth/auth.service'
import { InMemoryAuthService } from './auth/auth.in-memory.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: AuthService, useClass: InMemoryAuthService },
  ],
}
