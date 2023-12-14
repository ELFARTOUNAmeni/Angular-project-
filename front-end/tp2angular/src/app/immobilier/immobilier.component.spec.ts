import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilierComponent } from './immobilier.component';

describe('ImmobilierComponent', () => {
  let component: ImmobilierComponent;
  let fixture: ComponentFixture<ImmobilierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmobilierComponent]
    });
    fixture = TestBed.createComponent(ImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
