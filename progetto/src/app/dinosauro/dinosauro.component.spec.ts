import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosauroComponent } from './dinosauro.component';

describe('DinosauroComponent', () => {
  let component: DinosauroComponent;
  let fixture: ComponentFixture<DinosauroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinosauroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinosauroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
