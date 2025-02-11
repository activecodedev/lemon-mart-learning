import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, Router } from '@angular/router'
import { AuthService } from './auth.service'
import { UiService } from '../common/ui.service'
import { map, Observable, take } from 'rxjs'
import { Role } from './auth.enum'

export const authGuard = (route?: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const uiService = inject(UiService)

  return checkLogin(authService, router, uiService, route)
}

function checkLogin(
  authService: AuthService,
  router: Router,
  uiService: UiService,
  route?: ActivatedRouteSnapshot
): Observable<boolean> {
  return authService.authStatus$.pipe(
    map((authStatus) => {
      const roleMatch = checkRoleMatch(authStatus.userRole, route)
      const allowLogin = authStatus.isAuthenticated && roleMatch

      if (!allowLogin) {
        showAlert(uiService, authStatus.isAuthenticated, roleMatch)
        router.navigate(['login'], {
          queryParams: {
            redirectUrl: router?.getCurrentNavigation()?.initialUrl.toString(),
          },
        })
      }

      return allowLogin
    }),
    take(1)
  )
}

function checkRoleMatch(role: Role, route?: ActivatedRouteSnapshot) {
  if (!route?.data?.data?.['expectedRole']) {
    return true
  }

  return role === route.data['expectedRole']
}

function showAlert(uiService: UiService, isAuth: boolean, roleMatch: boolean) {
  if (!isAuth) {
    uiService.showToast('', 'Yout must login to continue')
  }
  if (!roleMatch) {
    uiService.showToast('', 'You do not have permissions to view this resource')
  }
}
