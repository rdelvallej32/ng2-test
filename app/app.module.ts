import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';

import { HighlightDirective } from './highlight.directive';

import { UserService } from './user.service';

/** Contact Imports */
import { ContactModule } from './components/contact/contact.module';

@NgModule({
    imports: [BrowserModule, ContactModule],
    declarations: [AppComponent, TitleComponent, HighlightDirective],
    bootstrap: [AppComponent],
    providers: [UserService]
})

export class AppModule { }
