import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { EmployeeComponent } from './employee/employee.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventBinding1Component } from './event-binding1/event-binding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { InbuildComponent } from './inbuild/inbuild.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventBinding1Component,
    Eventbinding2Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    InbuildComponent,
    CustomPipeComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
