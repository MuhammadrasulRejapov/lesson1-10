import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2ContentComponent } from './lesson2-content.component';

describe('Lesson2ContentComponent', () => {
  let component: Lesson2ContentComponent;
  let fixture: ComponentFixture<Lesson2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson2ContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
