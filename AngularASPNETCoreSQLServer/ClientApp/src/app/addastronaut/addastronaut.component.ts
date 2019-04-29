import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { Router, ActivatedRoute } from '@angular/router';

import { FetchAstronautComponent } from '../fetchastronaut/fetchastronaut.component';
import { AstronautService } from '../services/astronautservice.service';

@Component({
    templateUrl: './addastronaut.component.html'
})

export class AddAstronaut implements OnInit {
    astronautForm: FormGroup;
    title: string = "Create";
    astronautId: number;
    errorMessage: any;
    nationalitiesList: Object;

    constructor(private _fb: FormBuilder, private _activatedRoute: ActivatedRoute,
                private _astronautService: AstronautService, private _rounter: Router) {

        if(this._activatedRoute.snapshot.params["id"]) {
            this.astronautId = this._activatedRoute.snapshot.params["id"];
        }

        this.astronautForm = this._fb.group({
            astronautId: 0,
            astronautName: ['', [Validators.required]],
            nationality: ['', [Validators.required]]
        })

    }


    ngOnInit() {
        this._astronautService.getNationalities().subscribe(
            data => this.nationalitiesList = data
        )

        if(this.astronautId > 0) {
            this.title = "Edit";

            this._astronautService.getAstronautById(this.astronautId)
                .subscribe(data => this.astronautForm.setValue(data),
                error => this.errorMessage = error);
        }
    }



    save() {

        if(!this.astronautForm.valid) {
            return;
        }

        if(this.title == "Create") {

            this._astronautService.saveAstronaut(this.astronautForm.value)
                .subscribe((data) => { this._rounter.navigate(['/fetch-astronaut']);
                }, error => this.errorMessage = error)

        } else if (this.title == "Edit") {

            this._astronautService.updateAstronaut(this.astronautForm.value)
                .subscribe((data) => { this._rounter.navigate(['/fetch-astronaut']);
            }, error => this.errorMessage = error)
        }
    }


    cancel() {
        this._rounter.navigate(['/fetch-astronaut']);
    }


    get astronautName() { return this.astronautForm.get('astronautName'); }
    get nationality() { return this.astronautForm.get('nationality'); }
    

}