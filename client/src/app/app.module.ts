import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutes } from './app.routes';
import { I18nModule } from './app.i18n';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { CreateComponent } from './story/create/create.component';
import { StoryFormComponent } from './story/create/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    StoryComponent,
    CreateComponent,
    StoryFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
