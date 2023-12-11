import { CanDeactivateFn } from '@angular/router';
import {Observable} from "rxjs/internal/Observable";


export interface CanDeactivateComponent {
  canDeactivate : () => Observable<boolean> | boolean
}


export const exitGuard: CanDeactivateFn<CanDeactivateComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate();
};
