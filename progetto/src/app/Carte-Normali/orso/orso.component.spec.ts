import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrsoComponent } from './orso.component';

describe('OrsoComponent', () => {
  let component: OrsoComponent;
  let fixture: ComponentFixture<OrsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
