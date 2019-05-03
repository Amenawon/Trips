import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let trips = [
      {
        tripId: 'TP0001',
        customerId: 'CUST0001',
        route: 1000, price: 1,
        truckDriver: 1,
        truckType: 'Insurance policy number PO1',
        status: 1,
        statusName: 'Active'
      },
      {
        tripId: 'TP0002',
        customerId: 'CUST0002',
        route: 1000, price: 1,
        truckDriver: 1,
        truckType: 'Insurance policy number PO1',
        status: 1,
        statusName: 'Active'
      },      {
        tripId: 'TP0003',
        customerId: 'CUST0003',
        route: 1000, price: 1,
        truckDriver: 1,
        truckType: 'Insurance policy number PO1',
        status: 1,
        statusName: 'Active'
      },      {
        tripId: 'TP0003',
        customerId: 'CUST0004',
        route: 1000, price: 1,
        truckDriver: 1,
        truckType: 'Insurance policy number PO1',
        status: 1,
        statusName: 'Active'
      },      {
        tripId: 'TP0004',
        customerId: 'CUST0005',
        route: 1000, price: 1,
        truckDriver: 1,
        truckType: 'Insurance policy number PO1',
        status: 1,
        statusName: 'Active'
      },      {
        tripId: 'TP0005',
        customerId: 'CUST0006',
        route: 1000, price: 1,
        truckDriver: 1,
        truckType: 'Insurance policy number PO1',
        status: 1,
        statusName: 'Active'
      },      {
        tripId: 'TP0006',
        customerId: 'CUST0007',
        route: 1000, price: 1,
        truckDriver: 1,
        truckType: 'Insurance policy number PO1',
        status: 1,
        statusName: 'Active'
      },
    ];

    return { trips };

  }
}
