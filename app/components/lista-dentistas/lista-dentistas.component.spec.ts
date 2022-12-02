import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDentistasComponent } from './lista-dentistas.component';

describe('ListaDentistasComponent', () => {
  let component: ListaDentistasComponent;
  let fixture: ComponentFixture<ListaDentistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDentistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDentistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
