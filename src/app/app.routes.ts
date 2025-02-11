import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AppLayoutComponent } from './layout/app.layout.component'
import { authGuard } from './auth/auth.guard'
import { Role } from './auth/auth.enum'

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'manager',
        loadChildren: () =>
          import('./manager/manager-routing.module').then((m) => m.ManagerRoutingModule),
        canMatch: [authGuard],
        data: { expectedRole: Role.Manager },
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'pos',
        loadChildren: () => import('./pos/pos.module').then((m) => m.PosModule),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./inventory/inventory.module').then((m) => m.InventoryModule),
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'login/:redirectUrl',
        component: LoginComponent,
      },
      {
        path: '**',
        loadComponent: () =>
          import('./page-not-found/page-not-found.component').then(
            (c) => c.PageNotFoundComponent
          ),
      },
    ],
  },
]
