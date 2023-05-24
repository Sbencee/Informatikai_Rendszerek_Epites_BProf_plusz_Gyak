import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepositorySearchComponent } from './repository-search/repository-search.component';
import { RepositoryDataSheetComponent } from './repository-data-sheet/repository-data-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserProfileComponent,
    RepositorySearchComponent,
    RepositoryDataSheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
