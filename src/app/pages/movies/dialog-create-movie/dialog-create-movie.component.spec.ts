import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateMovieComponent } from './dialog-create-movie.component';

describe('DialogCreateMovieComponent', () => {
  let component: DialogCreateMovieComponent;
  let fixture: ComponentFixture<DialogCreateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateMovieComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
