import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes = [
  {path: 'servers', component: ServersComponent,
    children:
      [{path: ':id/edit', component: EditServerComponent},
        {path: ':id', component: ServerComponent}]},
  {path: 'users', component: UsersComponent,
    children: [{path: ':id/:name', component: UserComponent}]},
  {path: '', component: HomeComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}

];

@NgModule( {
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    [RouterModule]
  ]
})

export class AppRoutingModule {

}
