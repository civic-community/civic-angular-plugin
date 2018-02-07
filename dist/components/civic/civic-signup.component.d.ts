import { OnInit } from '@angular/core';
import { AppSettings } from './../../assets/AppSettings';
export declare class CivicSignupComponent implements OnInit {
    settings: AppSettings;
    Id: string;
    civicSip: any;
    jwtToken: any;
    flag: string;
    constructor();
    ngOnInit(): void;
    sendSignUpRequest(): void;
}
