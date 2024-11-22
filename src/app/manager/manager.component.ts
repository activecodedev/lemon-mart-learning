import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { ToolbarModule } from 'primeng/toolbar'
import { TooltipModule } from 'primeng/tooltip'

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ToolbarModule, ButtonModule, TooltipModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss',
})
export class ManagerComponent {}
