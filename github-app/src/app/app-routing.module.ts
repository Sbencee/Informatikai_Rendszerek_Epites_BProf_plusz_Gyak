import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSearchComponent } from './user-search/user-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepositorySearchComponent } from './repository-search/repository-search.component';
import { RepositoryDataSheetComponent } from './repository-data-sheet/repository-data-sheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-search', pathMatch: 'full' },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-profile/:username', component: UserProfileComponent },
  { path: 'search-repos', component: RepositorySearchComponent },
  { path: 'repo/:owner/:repo', component: RepositoryDataSheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
