import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryDataSheetComponent } from './repository-data-sheet.component';

describe('RepositoryDataSheetComponent', () => {
  let component: RepositoryDataSheetComponent;
  let fixture: ComponentFixture<RepositoryDataSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryDataSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryDataSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
