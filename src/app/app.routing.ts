import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent }   from './about/about.component';
import { ListcharComponent }   from './listchar/listchar.component';
import { EditcharComponent }   from './editchar/editchar.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'listchar',
    component: ListcharComponent
  },
  {
    path: 'chars/:id',
    component: EditcharComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
