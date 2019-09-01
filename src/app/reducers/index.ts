import { Action, ActionReducerMap, createAction, createReducer, MetaReducer, on, props, ActionReducer, createSelector } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { Order } from '../dto/dto';

// STATE
export interface State {
  ordersState: OrderState;
  undoStack: OrderState[];
}
export interface OrderState {
  orders: Order[];
}

export const INIT_ORDER_STATE: OrderState = {
  orders: []
};

export const INIT_STATE: State = {
  ordersState: INIT_ORDER_STATE,
  undoStack: []
};

// REDUCERS
export const reducers: ActionReducerMap<State> = {
  ordersState: ordersReducer,
  undoStack: (state, action) => state
};

export const addOrder = createAction(`[Order] Add`, props<Order>());
export const deleteOrder = createAction(`[Order] Delete`, props<{ ids: string[] }>());
export const undo = createAction(`[Order] Undo`);


export const orderReducer1 = createReducer(INIT_ORDER_STATE,
  // add order
  on(addOrder, (state, order) => {
    const list = [...state.orders];
    list.push(order);
    return { ...state, orders: list };
  }),
  // delete order
  on(deleteOrder, (state, { ids }) => {
    const list = state.orders.filter(o => ids.indexOf(o.id) === -1);
    return { ...state, orders: list };
  })
);

export function ordersReducer(state: OrderState, action: Action) {
  return orderReducer1(state, action);
}

export function undoMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: State = INIT_STATE, action) => {
    if (action.type === '@ngrx/store/init') {
      return state;
    }
    if (action.type === undo.type) {
      const stack = [...state.undoStack];
      const replaceWith = stack.pop();
      return { ...state, ordersState: replaceWith, undoStack: stack };
    }
    const undoStack = [...state.undoStack];
    undoStack.push(state.ordersState);
    state = { ...state, undoStack };
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production ? [undoMetaReducer] : [];

// SELECTORS
export const hasUndo = createSelector((state: State) => state.undoStack, undoStack => undoStack && undoStack.length > 0);

