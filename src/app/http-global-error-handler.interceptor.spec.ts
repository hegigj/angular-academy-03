import { TestBed } from '@angular/core/testing';

import { HttpGlobalErrorHandlerInterceptor } from './http-global-error-handler.interceptor';

describe('HttpGlobalErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpGlobalErrorHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpGlobalErrorHandlerInterceptor = TestBed.inject(HttpGlobalErrorHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
