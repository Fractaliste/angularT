import { StatRoutingModule } from './stat-routing.module';

describe('StatRoutingModule', () => {
  let statRoutingModule: StatRoutingModule;

  beforeEach(() => {
    statRoutingModule = new StatRoutingModule();
  });

  it('should create an instance', () => {
    expect(statRoutingModule).toBeTruthy();
  });
});
