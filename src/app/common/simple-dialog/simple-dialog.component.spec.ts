import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimpleDialogComponent } from './simple-dialog.component'
import { autoSpyObj } from 'angular-unit-test-helper'
import { DynamicDialogRef } from 'primeng/dynamicdialog'

describe('SimpleDialogComponent', () => {
  let component: SimpleDialogComponent
  let fixture: ComponentFixture<SimpleDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDialogComponent],
      providers: [{ provide: DynamicDialogRef, useValue: autoSpyObj(DynamicDialogRef) }],
    }).compileComponents()

    fixture = TestBed.createComponent(SimpleDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
