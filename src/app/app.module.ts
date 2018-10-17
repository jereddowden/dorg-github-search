import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TabsModule } from './tabs/tabs.module';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, TabsModule],
  declarations: [AppComponent, SearchComponent, ProfileComponent, ReposComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
