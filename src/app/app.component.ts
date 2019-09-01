import { Component, OnInit } from '@angular/core';
import { Order } from './dto/dto';
import { Store } from '@ngrx/store';
import { State, addOrder, deleteOrder, undo, hasUndo } from './reducers';

import { generate } from 'shortid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-multiple-undo';
  selected: Order[] = [];
  orders: Order[] = [];
  undoable: boolean;

  constructor(private store: Store<State>) {
    store.select('ordersState').subscribe(ordersState => {
      this.orders = ordersState.orders;
    });
    store.select(hasUndo).subscribe(undoable => this.undoable = undoable);
  }

  ngOnInit() {
  }

  onAdd() {
    const order: Order = {id: generate(), customerName: `Customer ${generate()}`, product: generate(), rate: 2, total: 100 };
    this.store.dispatch(addOrder(order));
  }

  onDelete() {
    this.store.dispatch(deleteOrder({ ids: this.selected.map(s => s.id) }));
    this.selected = [];
  }

  onUndo() {
    this.store.dispatch(undo());
  }
}
