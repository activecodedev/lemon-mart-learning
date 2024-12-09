import { Component, ElementRef, inject, ViewChild } from '@angular/core'
import { LayoutService } from './service/app.layout.service'
import { AppSidebarComponent } from './app.sidebar.component'
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef
  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent
  activeItem!: number
  readonly layoutService = inject(LayoutService)

  constructor(
    public el: ElementRef,
    public authService: AuthService
  ) {}

  onMenuButtonClick() {
    this.layoutService.onMenuToggle()
  }

  onSidebarButtonClick() {
    this.layoutService.showSidebar()
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar()
  }
}
