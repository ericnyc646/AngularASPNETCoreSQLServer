import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AstronautService } from '../services/astronautservice.service';

@Component({
    templateUrl: 'fetchastronaut.component.html'
})

export class FetchAstronautComponent {

    astronautList: Object;

    constructor(private _router: Router, 
                private _astronautservice: AstronautService) {

        this.getAstronauts();
    }

    getAstronauts() {
        this._astronautservice.getAstronauts().subscribe(
            data => this.astronautList = data
        )
    }

    delete(astronautId) {
        var confirmanswer = confirm("Do you want to delete astronaut with Id: " + astronautId);
        if (confirmanswer) {
            this._astronautservice.deleteAstronaut(astronautId).subscribe((data) => { this.getAstronauts();
            }, error => console.error(error))
        }
    }
}




interface AstronautData {
    astronautId: number;
    astronautName: string;
    nationality: string;
}