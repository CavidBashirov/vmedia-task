import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GroupComponent } from './components/group/group.component';
import { PermissionComponent } from './components/permission/permission.component';

const routes: Routes = [
  { path: '', redirectTo:'permisson', pathMatch:'full' },
  { path: 'permisson', component: PermissionComponent },
  { path: 'group', component: GroupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    PermissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]

  
  
})
export class AppModule { }
