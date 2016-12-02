import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';

/** Feature Modules */
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';

/** Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        AppRoutingModule,
        CoreModule.forRoot({ userName: 'Miss Marple' })
    ],
    declarations: [AppComponent, TitleComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})

export class AppModule { }
