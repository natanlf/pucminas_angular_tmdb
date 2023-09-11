import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CustomPreloadingModuleService implements PreloadingStrategy { //posso por exemplo verificar a conexão da internet e outras coisas aqui
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route?.data && route.data['preload']) {
            return fn();
        }

        return of(null);
    }
}
