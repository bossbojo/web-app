import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (this.authService.authToken) {
        //   req = req.clone({ setHeaders: { Authorization: this.authService.authToken } });
        // }
        req = req.clone({ url: environment['API_HOST'] + req.url });
        req = req.clone({ body: this.cleanObject(req.body) });
        return next.handle(req);
    }
    cleanObject<T>(object: T): T {
        const json = JSON.stringify(object, (_, value) => {
            if (typeof value === 'string') {
                return value.trim();
            }
            return value;
        });

        return JSON.parse(json);
    }
}
