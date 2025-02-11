import { importProvidersFrom, Injectable, makeEnvironmentProviders } from '@angular/core'
import { MessageService } from 'primeng/api'
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog'
import { Observable } from 'rxjs'
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}

  showToast(summary: string, detail: string, severity = 'info') {
    this.messageService.add({ severity: severity, summary: summary, detail: detail })
  }

  showDialog(
    header: string,
    content: string,
    okText = 'OK',
    cancelText?: string,
    customConfig?: DynamicDialogConfig
  ): Observable<boolean> {
    const dialogRef = this.dialogService.open(
      SimpleDialogComponent,
      customConfig || {
        header: header,
        data: {
          content,
          okText,
          cancelText,
        },
      }
    )
    console.log()

    return dialogRef.onClose
  }
}

export function provideUiService() {
  return makeEnvironmentProviders([importProvidersFrom(MessageService, DialogService)])
}
