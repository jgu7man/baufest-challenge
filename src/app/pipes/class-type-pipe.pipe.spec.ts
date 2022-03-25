import { AsCharacterPipe } from './class-type-pipe.pipe';

describe('ClassTypePipePipe', () => {
  it('create an instance', () => {
    const pipe = new AsCharacterPipe();
    expect(pipe).toBeTruthy();
  });
});
