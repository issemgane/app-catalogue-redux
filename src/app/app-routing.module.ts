import { NgModule } from '@angular/core';
import {Routes,RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';



export const appRoutes : Routes = [
  { path: 'products', component: ProductsComponent },
   { path: '', component: HomeComponent}
 ];
 
 /*
 { path: 'table', component: DynamicComponent},
   { path: 'generic', component: GenericQuestionComponent},
   { path: '', redirectTo: '/home',pathMatch: 'full'},
   { path: 'employees', loadChildren: './employee/employee-feature.module#EmployeeModule'},
   { path: '**', component: PageNotFoundComponent }
   */


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
