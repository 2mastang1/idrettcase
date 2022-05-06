import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreningerInfoComponent } from './treninger-info.component';

describe('TreningerInfoComponent', () => {
  let component: TreningerInfoComponent;
  let fixture: ComponentFixture<TreningerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreningerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreningerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
