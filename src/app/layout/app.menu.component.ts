import { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: MenuItem[] = []

  ngOnInit() {
    this.model = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Manager',
        icon: 'pi pi-id-card',
        routerLink: ['/manager'],
      },
      {
        label: 'Inventory',
        icon: 'pi pi-warehouse',
        routerLink: ['/inventory'],
      },
      {
        label: 'POS',
        icon: 'pi pi-list',
        routerLink: ['/pos'],
      },
    ]
  }
}
