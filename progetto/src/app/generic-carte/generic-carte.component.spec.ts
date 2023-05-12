import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCarteComponent } from './generic-carte.component';

describe('GenericCarteComponent', () => {
  let component: GenericCarteComponent;
  let fixture: ComponentFixture<GenericCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericCarteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
