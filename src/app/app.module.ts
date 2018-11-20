import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Root
import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Feature Modules
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';

// Shared Services
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { httpInterceptorProviders } from './core/http-interceptors';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, effects } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { CustomSerializer } from './core/router/router.serializer';

// import localeDe from '@angular/common/locales/de';
// import { registerLocaleData } from '@angular/common';

// // the second parameter 'de' is optional
// registerLocaleData(localeDe, 'de');

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ProductsModule,
    CustomersModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot(effects),
    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        })
      : []
  ],
  declarations: [AppComponent],
  providers: [
    httpInterceptorProviders,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
    // { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
