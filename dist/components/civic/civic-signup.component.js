import { Component } from '@angular/core';
import { AppSettings } from './../../assets/AppSettings';
var CivicSignupComponent = /** @class */ (function () {
    function CivicSignupComponent() {
        this.settings = new AppSettings();
        this.Id = this.settings.appId;
        this.flag = "nothing";
    }
    CivicSignupComponent.prototype.ngOnInit = function () {
        this.civicSip = new civic.sip({ appId: this.Id });
    };
    CivicSignupComponent.prototype.sendSignUpRequest = function () {
        this.civicSip.signup({ style: 'popup', scopeRequest: this.civicSip.ScopeRequests.BASIC_SIGNUP });
        this.civicSip.on('auth-code-received', function (event) {
            // encoded JWT Token is sent to the server
            this.jwtToken = event.response;
            console.log(this.jwtToken);
            this.flag = "success";
        });
        this.civicSip.on('user-cancelled', function (event) {
            console.log("user cancelled");
            this.flag = "user cancelled";
        });
        this.civicSip.on('read', function (event) {
            this.flag = "read";
        });
        this.civicSip.on('civic-sip-error', function (error) {
            // handle error display if necessary.
            console.log('   Error type = ' + error.type);
            console.log('   Error message = ' + error.message);
            this.flag = "error\t" + error.type + "\t" + error.message;
        });
    };
    CivicSignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'civic-component',
                    template: "\n    <link rel=\"stylesheet\" href=\"https://hosted-sip.civic.com/css/civic-modal.min.css\">\n\n\n    <button id=\"signupButton\" class=\"civic-button-a medium\" type=\"button\" (click)=\"sendSignUpRequest()\">\n      <span>Log in with Civic</span>\n    </button>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    /** @nocollapse */
    CivicSignupComponent.ctorParameters = function () { return []; };
    return CivicSignupComponent;
}());
export { CivicSignupComponent };
//# sourceMappingURL=civic-signup.component.js.map