import { TestBed, inject } from '@angular/core/testing';

import { Stock2Service } from './stock2.service';

describe('Stock2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Stock2Service]
    });
  });

  it('should be created', inject([Stock2Service], (service: Stock2Service) => {
    expect(service).toBeTruthy();
  }));
});
