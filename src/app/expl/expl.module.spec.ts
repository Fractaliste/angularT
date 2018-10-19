import { ExplModule } from './expl.module';

describe('ExplModule', () => {
  let explModule: ExplModule;

  beforeEach(() => {
    explModule = new ExplModule();
  });

  it('should create an instance', () => {
    expect(explModule).toBeTruthy();
  });
});
