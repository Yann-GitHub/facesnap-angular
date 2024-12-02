// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './auth.interceptor';

// export const httpInterceptorProviders = [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthInterceptor,
//     multi: true,
//   },
// ];

// interceptors/index.ts
import { authInterceptor } from './auth.interceptor';

export const httpInterceptorProviders = [authInterceptor];
