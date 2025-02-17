import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { UserManagementComponent } from './user-management/user-management.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { ManagerComponent } from './manager.component'
import { authGuard } from '../auth/auth.guard'
import { Role } from '../auth/auth.enum'

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: ManagerHomeComponent,
        canActivate: [authGuard],
        data: { expectedRole: Role.Manager },
      },
      {
        path: 'users',
        component: UserManagementComponent,
        canActivate: [authGuard],
        data: { expectedRole: Role.Manager },
      },
      {
        path: 'receipts',
        component: ReceiptLookupComponent,
        canActivate: [authGuard],
        data: { expectedRole: Role.Manager },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
