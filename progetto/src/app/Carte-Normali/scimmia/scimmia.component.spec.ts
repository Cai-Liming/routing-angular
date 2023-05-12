import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScimmiaComponent } from './scimmia.component';

describe('ScimmiaComponent', () => {
  let component: ScimmiaComponent;
  let fixture: ComponentFixture<ScimmiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScimmiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScimmiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
