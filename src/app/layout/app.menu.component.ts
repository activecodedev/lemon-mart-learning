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
        label: 'Manager',
        icon: 'pi pi-id-card',
        items: [
          {
            label: 'Users',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/manager/users'],
          },
          {
            label: 'Receipts',
            icon: 'pi pi-fw pi-receipt',
            routerLink: ['/manager/receipts'],
          },
        ],
      },
      {
        label: 'Inventory',
        icon: 'pi pi-warehouse',
        items: [
          {
            label: 'Stock Entry',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/inventory/stock-entry'],
          },
          {
            label: 'Products',
            icon: 'pi pi-fw pi-briefcase',
            routerLink: ['/inventory/products'],
          },
          {
            label: 'Categories',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/inventory/categories'],
          },
        ],
      },
      {
        label: 'Clerk',
        icon: 'pi pi-paperclip',
        items: [
          {
            label: 'POS',
            icon: 'pi pi-fw pi-tags',
            routerLink: ['/pos'],
          },
        ],
      },
    ]
  }
}
