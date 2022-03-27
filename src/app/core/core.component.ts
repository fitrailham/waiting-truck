import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:00:25', weight: 'PT. ABC', symbol: 'H'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:30:25', weight: 'PT. ABC', symbol: 'abc'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:45:25', weight: 'PT. ABC', symbol: 'Li'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:44:25', weight: 'PT. ABC', symbol: 'Be'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:44:25', weight: 'PT. ABC', symbol: 'B'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:44:25', weight: 'PT. ABC', symbol: 'C'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:44:25', weight: 'PT. ABC', symbol: 'N'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:44:25', weight: 'PT. ABC', symbol: 'O'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:44:25', weight: 'PT. ABC', symbol: 'F'},
  {position: '06-03-2021 13:44:25', name: '23-12-2021 13:44:25', weight: 'PT. ABC', symbol: 'abc'},
];

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
