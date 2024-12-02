import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Injection of the AuthService
  const authService = inject(AuthService);

  // Retrieval of the token
  const token = authService.getToken();

  // Display of the request URL and the token
  console.log('Interceptor - URL of the request:', req.url);
  console.log('Interceptor - Token:', token);

  // If there is no token, we pass the request
  if (!token) {
    return next(req);
  }

  // Modification of the request by adding the token in the headers
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log('Modified request:', authReq);

  // Return the next handle with the modified request
  return next(authReq);
};

//// Old version of the auth.interceptor.ts file ////
// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpHeaders,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('Requête interceptée:', req.url);
//     console.log('Token utilisé:', this.authService.getToken());
//     const headers = new HttpHeaders().append(
//       'Authorization',
//       `Bearer ${this.authService.getToken()}`
//     );

//     // req are immutable, so we need to clone the req and add the headers
//     const modifiedReq = req.clone({ headers });

//     // return the next handle with the modified request
//     return next.handle(modifiedReq);
//   }
// }
