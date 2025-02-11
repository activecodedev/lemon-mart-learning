import { TestBed } from '@angular/core/testing'

import { UiService } from './ui.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MessageService } from 'primeng/api'
import { autoSpyObj } from 'angular-unit-test-helper'
import { DialogService } from 'primeng/dynamicdialog'

describe('UiService', () => {
  let service: UiService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UiService,
        { provide: MessageService, useValue: autoSpyObj(MessageService) },
        { provide: DialogService, useValue: autoSpyObj(DialogService) },
      ],
    })
    service = TestBed.inject(UiService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
