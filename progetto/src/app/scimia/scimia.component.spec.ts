import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScimiaComponent } from './scimia.component';

describe('ScimiaComponent', () => {
  let component: ScimiaComponent;
  let fixture: ComponentFixture<ScimiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScimiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScimiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
