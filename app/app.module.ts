import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';

import { HighlightDirective } from './highlight.directive';

import { UserService } from './user.service';

/** Feature Modules */
import { ContactModule } from './contact/contact.module';

/** Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, ContactModule, AppRoutingModule],
    declarations: [AppComponent, TitleComponent, HighlightDirective],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService]
})

export class AppModule { }
