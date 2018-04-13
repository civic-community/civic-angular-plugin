# Installation
- Using npm
```sh
$ npm install civic-signup
```
 ### Prerequisite
   -  The main html file should load the civic javascript library
   to do this add the line given belo to your index.html
    - If you want to use the civic default style for the button, then you should import the css file too
    from https://hosted-sip.civic.com/css/civic-modal.min.css (This is optional)
 ```sh
 <script src="https://hosted-sip.civic.com/js/civic.sip.min.js"></script>
 ```
## Dependencies
- none
## Usage

- ### Importing inside your module
   To use the component, its functions and to handle the data you will need to import it.
   To import,   in app.module.ts add this at top and add CivicModule to your imports array 
```sh
import { CivicModule } from 'civic-signup';
import {CivicSignupService} from 'civic-signup';
```

- ### adding the button
    the decorator is `app-civic'

#### Example
```sh
<app-civic appId='xyz123' buttonLabel='Login'></app-civic>
<app-civic appId='xyz123' buttonLabel='Login' default></app-civic> (If you are want to use default civic style button)
```

- ### Handling the jwtToken
    To access the the data  you need to use import the civic-signup inject it in you component 
    app.component.ts
````sh
import { Component, OnInit } from '@angular/core';
import {CivicSignupService} from 'civic-signup'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Token:any;

 constructor(private cs:CivicSignupService){
 }
 ngOnInit(){
  this.cs.currentFlag.subscribe(flag =>this.message=flag);
 }
 
 updateToken(){
  this.Token=this.cs.getJwtToken();

}
}

````




# Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Packaging

We are using `ng-packagr` for building the library. To build from source execute `
npm run packagr`. This will create the `\dist` folder.
For local development you can execute `npm pack` inside `dist` to create a distributable tarball

