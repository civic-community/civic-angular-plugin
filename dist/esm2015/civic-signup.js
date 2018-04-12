import { Injectable, Component, ElementRef, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CivicSignupService {
    constructor() {
        this.flagSource = new BehaviorSubject(-1);
        this.currentFlag = this.flagSource.asObservable();
    }
    /**
     * @param {?} x
     * @return {?}
     */
    init(x) {
        this.civicObject = x;
    }
    /**
     * @param {?} n
     * @return {?}
     */
    updateFlag(n) {
        console.log('updating flag ' + n);
        this.flagSource.next(n);
    }
    /**
     * @return {?}
     */
    getJwtToken() {
        this.civicObject.updateFlag();
        return this.civicObject.getJwtToken();
    }
    /**
     * @return {?}
     */
    getSignupObject() {
        this.civicObject.updateFlag();
        return this.civicObject;
    }
    /**
     * @return {?}
     */
    getError() {
        this.civicObject.updateFlag();
        return this.civicObject.getError();
    }
    /**
     * @return {?}
     */
    getFlag() {
        this.civicObject.updateFlag();
        return this.civicObject.flag;
    }
}
CivicSignupService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CivicSignupService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CivicComponent {
    /**
     * @param {?} x
     * @param {?} data
     */
    constructor(x, data) {
        this.data = data;
        this.flag = -1;
        this.data.updateFlag(this.flag);
        this.Id = x.nativeElement.getAttribute('appId');
        this.buttonText = x.nativeElement.getAttribute('buttonLabel');
        this.defaultStyle = x.nativeElement.hasAttribute('default');
    }
    /**
     * @return {?}
     */
    setCurrentClasses() {
        // CSS classes: added/removed per current state of component properties
        this.currentClasses = {
            'civic-button-a': this.defaultStyle,
            'medium': this.defaultStyle
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.civicSip = new civic.sip({ appId: this.Id });
        this.setCurrentClasses();
        this.data.init(this);
        window.buffer_service = this.data;
    }
    /**
     * @return {?}
     */
    updateFlag() {
        this.flag = window.buffer_flag;
    }
    /**
     * @return {?}
     */
    sendSignUpRequest() {
        this.civicSip.signup({ style: 'popup', scopeRequest: this.civicSip.ScopeRequests.BASIC_SIGNUP });
        this.civicSip.on('auth-code-received', function (event) {
            // encoded JWT Token is sent to the server
            this.jwtToken = event.response;
            window.buffer_flag = 1;
            window.buffer_jwt = this.jwtToken;
            window.buffer_service.updateFlag(1);
            console.log(this.jwtToken);
        });
        this.civicSip.on('user-cancelled', function (event) {
            console.log("user cancelled");
            window.buffer_flag = 2;
            window.buffer_service.updateFlag(2);
        });
        this.civicSip.on('read', function (event) {
            window.buffer_flag = 3;
            window.buffer_service.updateFlag(3);
        });
        this.civicSip.on('civic-sip-error', function (err) {
            window.buffer_flag = 4;
            window.buffer_error = err;
            window.buffer_service.updateFlag(4);
        });
        return 0;
    }
    /**
     * @return {?}
     */
    getJwtToken() {
        this.jwtToken = window.buffer_jwt;
        this.flag = window.buffer_flag;
        if (this.flag == 1) {
            return this.jwtToken;
        }
        else {
            console.log("Error jwtToken not yet recieved");
            return null;
        }
    }
    /**
     * @return {?}
     */
    getError() {
        if (this.flag == 4) {
            return this.error;
        }
        console.log("No errors while sending signup request..check flag number to find out more");
        return null;
    }
}
CivicComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-civic',
                template: `
<button id="signupButton" [ngClass]="currentClasses" type="button" (click)="sendSignUpRequest()">
  <span>{{buttonText}}</span>
</button>`,
                styles: [``]
            },] },
];
/** @nocollapse */
CivicComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: CivicSignupService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CivicModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CivicModule,
            providers: [CivicSignupService]
        };
    }
}
CivicModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                providers: [CivicSignupService],
                declarations: [CivicComponent],
                exports: [
                    CivicComponent
                ],
                bootstrap: [
                    CivicComponent
                ]
            },] },
];
/** @nocollapse */
CivicModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CivicModule, CivicSignupService, CivicComponent as ɵa };
//# sourceMappingURL=civic-signup.js.map
