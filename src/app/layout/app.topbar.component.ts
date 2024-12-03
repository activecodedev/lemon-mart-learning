import { Component, ElementRef, inject, ViewChild } from '@angular/core'
import { LayoutService } from './service/app.layout.service'
import { AppSidebarComponent } from './app.sidebar.component'

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef
  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent
  activeItem!: number
  readonly layoutService = inject(LayoutService)

  constructor(public el: ElementRef) {}

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
