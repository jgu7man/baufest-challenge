import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeSelecterComponent } from './episode-selecter.component';

describe('EpisodeSelecterComponent', () => {
  let component: EpisodeSelecterComponent;
  let fixture: ComponentFixture<EpisodeSelecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeSelecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeSelecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
