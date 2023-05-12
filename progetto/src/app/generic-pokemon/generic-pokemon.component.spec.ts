import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPokemonComponent } from './generic-pokemon.component';

describe('GenericPokemonComponent', () => {
  let component: GenericPokemonComponent;
  let fixture: ComponentFixture<GenericPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
