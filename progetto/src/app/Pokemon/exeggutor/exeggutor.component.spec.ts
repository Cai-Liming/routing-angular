import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeggutorComponent } from './exeggutor.component';

describe('ExeggutorComponent', () => {
  let component: ExeggutorComponent;
  let fixture: ComponentFixture<ExeggutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeggutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeggutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
