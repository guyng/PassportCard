import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})
export class ApiKeyInterceptor implements HttpInterceptor {
    apiKey: string = "SDJSDF8234VHF2JX8BJ5";
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'ApiKey': this.apiKey
            }
        });
        debugger;
        return next.handle(req);
    }
}