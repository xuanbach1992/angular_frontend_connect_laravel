import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPhoneComponent} from './list/list-phone.component';
import {AddPhoneComponent} from './add/add-phone.component';
import {EditPhoneComponent} from './edit/edit-phone.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: ListPhoneComponent},
  {path: 'create', component: AddPhoneComponent},
  {path: ':id/update', component: EditPhoneComponent},
];

@NgModule({
  declarations: [ListPhoneComponent,
    AddPhoneComponent,
    EditPhoneComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PhoneModule {
}
