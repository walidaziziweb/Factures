import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinvoicesComponent } from './editinvoices.component';

describe('EditinvoicesComponent', () => {
  let component: EditinvoicesComponent;
  let fixture: ComponentFixture<EditinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
