import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ContactComponent } from './components/contact/contact.component';

import { HighlightDirective } from './highlight.directive';
import { HighlightDirective as ContactHighlightDirective } from './components/contact/highlight.directive';

import { AwesomePipe } from './components/contact/awesome.pipe'

import { UserService } from './user.service';
import { ContactService } from './components/contact/contact.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TitleComponent, HighlightDirective,
        ContactComponent, AwesomePipe, ContactHighlightDirective],
    bootstrap: [AppComponent],
    providers: [UserService, ContactService]
})

export class AppModule { }
