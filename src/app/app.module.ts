import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PractitionerComponent } from './practitioner/practitioner.component';
import { ContractphysicianComponent } from './contractphysician/contractphysician.component';
import { LndpageComponent } from './lndpage/lndpage.component';
import { NoncontractphysicianComponent } from './noncontractphysician/noncontractphysician.component';
import { ContractmidlevelComponent } from './contractmidlevel/contractmidlevel.component';
import { ContractnonphysicianComponent } from './contractnonphysician/contractnonphysician.component';
import { NoncontractmidlevelComponent } from './noncontractmidlevel/noncontractmidlevel.component';
import { NoncontractnonphysicianComponent } from './noncontractnonphysician/noncontractnonphysician.component';
import { SetActiveClassDirective } from './shared/set-active-class.directive';



@NgModule({
  declarations: [
    AppComponent,
    PractitionerComponent,
    ContractphysicianComponent,
    LndpageComponent,
    NoncontractphysicianComponent,
    ContractmidlevelComponent,
    ContractnonphysicianComponent,
    NoncontractmidlevelComponent,
    NoncontractnonphysicianComponent,
    SetActiveClassDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     {path:'',component:ContractphysicianComponent},
     {path:'practitioner/:ptype',component:PractitionerComponent},
     {path:'contractphysician', component:ContractphysicianComponent},
     {path:'noncontractphysician', component:NoncontractphysicianComponent},
     {path:'contractmidlevel', component:ContractmidlevelComponent},
     {path:'noncontractmidlevel', component:NoncontractmidlevelComponent},
     {path:'contractnonphysician', component:ContractnonphysicianComponent},
     {path:'noncontractnonphysician', component:NoncontractnonphysicianComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
