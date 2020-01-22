import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LifeCycleComponent} from './demos/life-cycle/life-cycle.component';
import {ChangeDetectionComponent} from './demos/change-detection/change-detection.component';
import {ViewEncapsulationComponent} from './demos/view-encapsulation/view-encapsulation.component';
import {DirectiveComponent} from './demos/directive/directive.component';
import {FormsComponent} from './demos/forms/forms.component';
import {PipeComponent} from './demos/pipe/pipe.component';
import {ComponentCommunicationComponent} from './demos/component-communication/component-communication.component';
import {ObservableComponent} from './demos/observable/observable.component';
import {LoginComponent} from './demos/auth/login/login.component';
import {AppGuard} from './app.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AppGuard],
    children: [
      {
        path: 'lc',
        component: LifeCycleComponent
      },
      {
        path: 'cd',
        component: ChangeDetectionComponent
      },
      {
        path: 've',
        component: ViewEncapsulationComponent
      },
      {
        path: 'f',
        component: FormsComponent
      },
      {
        path: 'd',
        component: DirectiveComponent
      },
      {
        path: 'cc',
        component: ComponentCommunicationComponent
      },
      {
        path: 'p',
        component: PipeComponent
      },
      {
        path: 'o',
        component: ObservableComponent
      },
      {
        path: 'logout',
        component: ObservableComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
