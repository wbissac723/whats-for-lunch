import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class FoodLocatorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authRequest = req.clone({

            headers: req.headers.set('Accept', 'application/json')

        });

        return next.handle(authRequest);
    }
}
