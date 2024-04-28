import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildDefaultComponent } from './components/child-default/child-default.component';
import { ChildOnpushComponent } from './components/child-onpush/child-onpush.component';
import { GrandchildOnpushComponent } from './components/grandchild-onpush/grandchild-onpush.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildDefaultComponent,
    ChildOnpushComponent,
    GrandchildOnpushComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
