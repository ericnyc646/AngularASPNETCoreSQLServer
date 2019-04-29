import { Injectable, Inject } from '@angular/core';  
import { Router } from '@angular/router';  
import { map } from 'rxjs/operators';  
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class AstronautService {
    myAppURL: string = '';

    constructor(private http: HttpClient, @Inject('BASE_URL') baseURL: string) {
        this.myAppURL = baseURL;
    }

    getNationalities() {
        return this.http.get(this.myAppURL + 'api/nationalities/Index');
    }

    getAstronauts() {
        return this.http.get(this.myAppURL + 'api/astronaut/Index');
    }

    getAstronautById(id: number) {
        return this.http.get(this.myAppURL + 'api/astronaut/Details/' + id);
    }

    saveAstronaut(astronaut) {
        return this.http.post(this.myAppURL + 'api/astronaut/Create', astronaut);
    }

    updateAstronaut(astronaut) {
        return this.http.put(this.myAppURL + 'api/astronaut/Edit', astronaut);
    }

    deleteAstronaut(id) {
        return this.http.delete(this.myAppURL + 'api/astronaut/Delete/' + id);
    }

    errorHandler(error: Response) {  
        console.log(error);  
        return Observable.throw(error);  
    }  
}