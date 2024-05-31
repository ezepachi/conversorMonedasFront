import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCurrenciesComponent } from './favorite-currencies.component';

describe('FavoriteCurrenciesComponent', () => {
  let component: FavoriteCurrenciesComponent;
  let fixture: ComponentFixture<FavoriteCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCurrenciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
