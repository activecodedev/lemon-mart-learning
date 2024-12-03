import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { AuthService } from './auth/auth.service'
import { InMemoryAuthService } from './auth/auth.in-memory.service'
import { AuthHttpInterceptor } from './auth/auth.http.interceptor'
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([AuthHttpInterceptor])),
    { provide: AuthService, useClass: InMemoryAuthService },
  ],
}
