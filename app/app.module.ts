import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';

import { HighlightDirective } from './highlight.directive';

import { UserService } from './user.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, TitleComponent, HighlightDirective],
    bootstrap: [AppComponent],
    providers: [UserService]
})

export class AppModule { }
