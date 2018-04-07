import { Injectable, Component, ElementRef, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommonModule } from '@angular/common';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CivicSignupService = /** @class */ (function () {
    function CivicSignupService() {
        this.flagSource = new BehaviorSubject(-1);
        this.currentFlag = this.flagSource.asObservable();
    }
    /**
     * @param {?} x
     * @return {?}
     */
    CivicSignupService.prototype.init = function (x) {
        this.civicObject = x;
    };
    /**
     * @param {?} n
     * @return {?}
     */
    CivicSignupService.prototype.updateFlag = function (n) {
        console.log('updating flag ' + n);
        this.flagSource.next(n);
    };
    /**
     * @return {?}
     */
    CivicSignupService.prototype.getJwtToken = function () {
        this.civicObject.updateFlag();
        return this.civicObject.getJwtToken();
    };
    /**
     * @return {?}
     */
    CivicSignupService.prototype.getSignupObject = function () {
        this.civicObject.updateFlag();
        return this.civicObject;
    };
    /**
     * @return {?}
     */
    CivicSignupService.prototype.getError = function () {
        this.civicObject.updateFlag();
        return this.civicObject.getError();
    };
    /**
     * @return {?}
     */
    CivicSignupService.prototype.getFlag = function () {
        this.civicObject.updateFlag();
        return this.civicObject.flag;
    };
    return CivicSignupService;
}());
CivicSignupService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CivicSignupService.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CivicComponent = /** @class */ (function () {
    /**
     * @param {?} x
     * @param {?} data
     */
    function CivicComponent(x, data) {
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
    CivicComponent.prototype.setCurrentClasses = function () {
        // CSS classes: added/removed per current state of component properties
        this.currentClasses = {
            'civic-button-a': this.defaultStyle,
            'medium': this.defaultStyle
        };
    };
    /**
     * @return {?}
     */
    CivicComponent.prototype.ngOnInit = function () {
        this.civicSip = new civic.sip({ appId: this.Id });
        this.setCurrentClasses();
        this.data.init(this);
        window.buffer_service = this.data;
    };
    /**
     * @return {?}
     */
    CivicComponent.prototype.updateFlag = function () {
        this.flag = window.buffer_flag;
    };
    /**
     * @return {?}
     */
    CivicComponent.prototype.sendSignUpRequest = function () {
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
    };
    /**
     * @return {?}
     */
    CivicComponent.prototype.getJwtToken = function () {
        this.jwtToken = window.buffer_jwt;
        this.flag = window.buffer_flag;
        if (this.flag == 1) {
            return this.jwtToken;
        }
        else {
            console.log("Error jwtToken not yet recieved");
            return null;
        }
    };
    /**
     * @return {?}
     */
    CivicComponent.prototype.getError = function () {
        if (this.flag == 4) {
            return this.error;
        }
        console.log("No errors while sending signup request..check flag number to find out more");
        return null;
    };
    return CivicComponent;
}());
CivicComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-civic',
                template: "\n<button id=\"signupButton\" [ngClass]=\"currentClasses\" type=\"button\" (click)=\"sendSignUpRequest()\">\n  <span>{{buttonText}}</span>\n</button>",
                styles: [""]
            },] },
];
/** @nocollapse */
CivicComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: CivicSignupService, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CivicModule = /** @class */ (function () {
    function CivicModule() {
    }
    /**
     * @return {?}
     */
    CivicModule.forRoot = function () {
        return {
            ngModule: CivicModule,
            providers: [CivicSignupService]
        };
    };
    return CivicModule;
}());
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
CivicModule.ctorParameters = function () { return []; };
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
export { CivicModule, CivicSignupService as ɵa, CivicComponent as ɵb };
//# sourceMappingURL=civic-signup.js.map
