import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilierListComponent } from './immobilier-list.component';

describe('ImmobilierListComponent', () => {
  let component: ImmobilierListComponent;
  let fixture: ComponentFixture<ImmobilierListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmobilierListComponent]
    });
    fixture = TestBed.createComponent(ImmobilierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
