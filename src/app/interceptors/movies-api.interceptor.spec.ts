import { TestBed } from '@angular/core/testing';

import { MoviesApiInterceptor } from './movies-api.interceptor';

describe('MoviesApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MoviesApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MoviesApiInterceptor = TestBed.inject(MoviesApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
