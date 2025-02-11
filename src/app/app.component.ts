import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { ToolbarModule } from 'primeng/toolbar'
import { TooltipModule } from 'primeng/tooltip'
import { AppLayoutModule } from './layout/app.layout.module'
import { AppConfig, LayoutService } from './layout/service/app.layout.service'
import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    AppLayoutModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ActiveStore'

  constructor(
    private layoutService: LayoutService,
    public authService: AuthService
  ) {
    const config: AppConfig = {
      ripple: true,
      menuMode: 'horizontal',
      inputStyle: 'outlined',
      colorScheme: 'light',
      theme: 'blue',
      menuTheme: 'light',
      scale: 14,
      topbarTheme: 'light',
    }

    this.layoutService.config.set(config)
  }
}
