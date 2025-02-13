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

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // firebaseConfig = {
  //   apiKey: 'AIzaSyDmygXsQ6GbPa4ASD6YADWokSdbc6CVaZM',
  //   authDomain: 'active-store-learning.firebaseapp.com',
  //   projectId: 'active-store-learning',
  //   storageBucket: 'active-store-learning.firebasestorage.app',
  //   messagingSenderId: '846214862875',
  //   appId: '1:846214862875:web:a6ed827ecc50bd592580be',
  //   measurementId: 'G-6VBGQFCWZ4',
  // }

  // // Initialize Firebase
  // app = initializeApp(this.firebaseConfig)
  // analytics = getAnalytics(this.app)
}
