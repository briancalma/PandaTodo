import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ArchivedItemsPage } from '../archived-items/archived-items';
import { TodoLogsPage } from '../todo-logs/todo-logs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ArchivedItemsPage;
  tab3Root = TodoLogsPage;

  constructor() {

  }
}
