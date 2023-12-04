import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cvListResolver } from './cv-list.resolver';

describe('cvListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cvListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
