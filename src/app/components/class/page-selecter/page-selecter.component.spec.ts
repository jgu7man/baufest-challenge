import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSelecterComponent } from './page-selecter.component';

describe('PageSelecterComponent', () => {
  let component: PageSelecterComponent;
  let fixture: ComponentFixture<PageSelecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSelecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSelecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
