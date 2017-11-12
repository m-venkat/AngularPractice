import { AppComponent } from "./ts/app.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,   
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})

export class AppModuleShared { }
