import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeListComponentComponent } from './joke-list-component.component';

describe('JokeListComponentComponent', () => {
  let component: JokeListComponentComponent;
  let fixture: ComponentFixture<JokeListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
