import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutForm } from './form.interface';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
    advancedForm: FormGroup;

    constructor(private fb:FormBuilder) {}

    ngOnInit() {
        this.advancedForm = this.fb.group({
            personal: this.fb.group({
                firstname: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
                lastname: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
                telephone: [''],
                emailaddress: ['']
            }),
            address: this.fb.group({
                addressline: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
                city: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
                country: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
                zipcode: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
            }),
            subscriptions: this.fb.group({
                exclusiveOffers: [''],
                privacyPolicy: ['', Validators.required]
            })
        });
    }

    onSubmit({ value }: { value: CheckoutForm }) {
        console.log(value);
    }
}
