import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from "./app.module.shared";
import { NgModule } from '@angular/core';
import { AppComponent } from "./ts/app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppModuleShared        
    ]
})

export class AppModule { }


