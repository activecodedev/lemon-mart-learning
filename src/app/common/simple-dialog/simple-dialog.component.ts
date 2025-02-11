import { Component, Inject } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-simple-dialog',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './simple-dialog.component.html',
  styleUrl: './simple-dialog.component.scss',
})
export class SimpleDialogComponent {
  constructor(
    public ref: DynamicDialogRef<SimpleDialogComponent>,
    @Inject(DynamicDialogConfig)
    public data: {
      header: string
      data: {
        content: string
        okText: string
        cancelText: string
      }
    }
  ) {
    console.log(data)
  }

  ok() {
    this.ref.close(true)
  }

  cancel() {
    this.ref.close(false)
  }
}
