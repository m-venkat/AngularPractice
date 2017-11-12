import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from "./app.module.shared";
import { AppComponent } from "./ts/app.component";
import { NgModule } from '@angular/core';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        ServerModule,
        AppModuleShared
    ]
})

export class AppModule { }
