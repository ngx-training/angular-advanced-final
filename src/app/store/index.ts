import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../core/router/router.serializer';
import { RouterEffects } from '../core/router/router.effects';
import { performanceLogger } from '../core/router/performance-logger';
import { localStorageSync } from 'ngrx-store-localstorage';

// tslint:disable-next-line:no-empty-interface
export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>; // default from ngrx
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer // default from ngrx
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [performanceLogger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const effects: any[] = [RouterEffects];

function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['customer'] })(reducer);
}
