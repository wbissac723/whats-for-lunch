import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class FoodLocatorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token1 = 'a63vBF5N-p5D2w05KaYF78UVcBV99NK1P6Z3tyVsWZLGHcSWays53-';
        const token2 = 'lnAOsm8e5cy8DtyiPf6q-OW2l6jD4uv7hQ4sDEELTgqXcTNBB7yyV_10WZtBwTE06FiOhWXHYx';
        const token = token1 + token2;

        const authRequest = req.clone({

            headers: req.headers.set('Authorization', 'Bearer ' + token)

        });

        return next.handle(authRequest);
    }
}
