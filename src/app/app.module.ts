import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { LcPersonComponent } from './demos/life-cycle/lc-person/lc-person.component';
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { CdPersonComponent } from './demos/change-detection/cd-person/cd-person.component';
import { PersonDetailComponent } from './demos/change-detection/cd-person/person-detail/person-detail.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
import { VeEmulatedComponent } from './demos/view-encapsulation/ve-emulated/ve-emulated.component';
import { VeNativeComponent } from './demos/view-encapsulation/ve-native/ve-native.component';
import { VeNoneComponent } from './demos/view-encapsulation/ve-none/ve-none.component';
import { FormsComponent } from './demos/forms/forms.component';
import { ReactiveComponent } from './demos/forms/reactive/reactive.component';
import { ReactiveFbComponent } from './demos/forms/reactive-fb/reactive-fb.component';
import { TemplateDrivenComponent } from './demos/forms/template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectiveComponent } from './demos/directive/directive.component';
import { NgDirectiveComponent } from './demos/directive/ng-directive/ng-directive.component';
import { CustomDirectiveComponent } from './demos/directive/custom-directive/custom-directive.component';
import { ListitemComponent } from './demos/directive/ng-directive/listitem/listitem.component';
import { MyhiddenDirective } from './demos/directive/custom-directive/myhidden.directive';
import { MyifDirective } from './demos/directive/custom-directive/myif.directive';
import { PipeComponent } from './demos/pipe/pipe.component';
import { CurrencyExchangePipe } from './demos/pipe/currency-exchange.pipe';
import { MyfilterPipe } from './demos/pipe/myfilter.pipe';
import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { CcAnotherChildComponent } from './demos/component-communication/cc-another-child/cc-another-child.component';
import { CcChildComponent } from './demos/component-communication/cc-child/cc-child.component';
import { CcParentComponent } from './demos/component-communication/cc-parent/cc-parent.component';
import { ObservableComponent } from './demos/observable/observable.component';
import { FormObservableComponent } from './demos/observable/form-observable/form-observable.component';
import { LoginComponent } from './demos/auth/login/login.component';
import {AppGuard} from './app.guard';
import {HttpModule} from '@angular/http';
import { LogoutComponent } from './demos/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    LcPersonComponent,
    ChangeDetectionComponent,
    CdPersonComponent,
    PersonDetailComponent,
    ViewEncapsulationComponent,
    VeEmulatedComponent,
    VeNativeComponent,
    VeNoneComponent,
    FormsComponent,
    ReactiveComponent,
    ReactiveFbComponent,
    TemplateDrivenComponent,
    DirectiveComponent,
    NgDirectiveComponent,
    CustomDirectiveComponent,
    ListitemComponent,
    MyhiddenDirective,
    MyifDirective,
    PipeComponent,
    CurrencyExchangePipe,
    MyfilterPipe,
    ComponentCommunicationComponent,
    CcAnotherChildComponent,
    CcChildComponent,
    CcParentComponent,
    ObservableComponent,
    FormObservableComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
