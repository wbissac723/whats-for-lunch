import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class FoodLocatorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = `a63vBF5N-p5D2w05KaYF78UVcBV99NK1P6Z3tyVsWZLGHcSWays53-
        lnAOsm8e5cy8DtyiPf6q-OW2l6jD4uv7hQ4sDEELTgqXcTNBB7yyV_10WZtBwTE06FiOhWXHYx`;

        request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});

        if (!request.headers.has('Content-Type')) {
            request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        }

        request = request.clone({headers: request.headers.set('Accept', 'application/json')});

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event --->', event);
                }
                return event;
            }));
    }
}
