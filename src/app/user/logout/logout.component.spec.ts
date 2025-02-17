import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LogoutComponent } from './logout.component'
import { commonTestingProviders } from '../../common/common.testing'

describe('LogoutComponent', () => {
  let component: LogoutComponent
  let fixture: ComponentFixture<LogoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutComponent],
      providers: [...commonTestingProviders],
    }).compileComponents()

    fixture = TestBed.createComponent(LogoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
