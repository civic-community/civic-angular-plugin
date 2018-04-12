import { CivicComponent } from './civic.component';
import { Observable } from 'rxjs/Observable';
export declare class CivicSignupService {
    private civicObject;
    private flagSource;
    currentFlag: Observable<number>;
    constructor();
    init(x: CivicComponent): void;
    updateFlag(n: number): void;
    getJwtToken(): string;
    getSignupObject(): CivicComponent;
    getError(): any;
    getFlag(): any;
}
