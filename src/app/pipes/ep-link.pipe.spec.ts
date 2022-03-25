import { TestBed } from '@angular/core/testing';
import { EpLinkPipe } from './ep-link.pipe';

describe( 'EpLinkPipe', () => {
  let pipe: EpLinkPipe

  beforeEach(() => {
    TestBed.configureTestingModule({});
    pipe = TestBed.inject(EpLinkPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
