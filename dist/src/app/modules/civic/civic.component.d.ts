import { OnInit, ElementRef } from '@angular/core';
import { CivicSignupService } from './civic-signup.service';
export declare class CivicComponent implements OnInit {
    private data;
    civicSip: any;
    jwtToken: any;
    flag: number;
    Id: string;
    buttonText: string;
    error: any;
    defaultStyle: boolean;
    currentClasses: {};
    setCurrentClasses(): void;
    constructor(x: ElementRef, data: CivicSignupService);
    ngOnInit(): void;
    updateFlag(): void;
    sendSignUpRequest(): number;
    getJwtToken(): any;
    getError(): any;
}
