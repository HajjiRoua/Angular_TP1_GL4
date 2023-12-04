import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cvDetailsResolver } from './cv-details.resolver';

describe('cvDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cvDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
