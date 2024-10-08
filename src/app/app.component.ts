import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { ToolbarModule } from 'primeng/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ToolbarModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lemon-mart-learning'

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //     'store',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/store.svg')
  //   )
  // }
}
