import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GroupComponent } from './components/group/group.component';
import { PermissionComponent } from './components/permission/permission.component';
import { RoleComponent } from './components/role/role.component';

const routes: Routes = [
  { path: '', redirectTo:'permisson', pathMatch:'full' },
  { path: 'permisson', component: PermissionComponent },
  { path: 'group', component: GroupComponent },
  { path: 'role', component: RoleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    PermissionComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]

  
  
})
export class AppModule { }
