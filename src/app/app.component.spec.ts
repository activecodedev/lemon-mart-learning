import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { commonTestingModules, commonTestingProviders } from './common/common.testing'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...commonTestingModules, AppComponent],
      providers: [...commonTestingProviders],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have the 'lemon-mart-learning' title`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('ActiveStore')
  })
})
