import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPayementComponent } from './new-payement.component';

describe('NewPayementComponent', () => {
  let component: NewPayementComponent;
  let fixture: ComponentFixture<NewPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewPayementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
