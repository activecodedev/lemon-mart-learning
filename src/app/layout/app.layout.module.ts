import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { InputTextModule } from 'primeng/inputtext'
import { SidebarModule } from 'primeng/sidebar'
import { BadgeModule } from 'primeng/badge'
import { RadioButtonModule } from 'primeng/radiobutton'
import { InputSwitchModule } from 'primeng/inputswitch'
import { TooltipModule } from 'primeng/tooltip'
import { RippleModule } from 'primeng/ripple'
import { AppConfigModule } from './config/app.config.module'
import { AppLayoutComponent } from './app.layout.component'
import { AppBreadcrumbComponent } from './app.breadcrumb.component'
import { AppSidebarComponent } from './app.sidebar.component'
import { AppTopbarComponent } from './app.topbar.component'
import { AppProfileSidebarComponent } from './app.profilesidebar.component'
import { AppMenuComponent } from './app.menu.component'
import { AppMenuitemComponent } from './app.menuitem.component'
import { RouterModule } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { StyleClassModule } from 'primeng/styleclass'
import { CommonModule } from '@angular/common'
import { ToastModule } from 'primeng/toast'

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppBreadcrumbComponent,
    AppSidebarComponent,
    AppTopbarComponent,
    AppProfileSidebarComponent,
    AppMenuComponent,
    AppMenuitemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StyleClassModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    TooltipModule,
    RippleModule,
    RouterModule,
    AppConfigModule,
    ButtonModule,
    ToastModule,
  ],
})
export class AppLayoutModule {}
