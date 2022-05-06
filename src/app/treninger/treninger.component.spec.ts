import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreningerComponent } from './treninger.component';

describe('TreningerComponent', () => {
  let component: TreningerComponent;
  let fixture: ComponentFixture<TreningerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreningerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreningerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
