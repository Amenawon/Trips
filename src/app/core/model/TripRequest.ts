import { Driver } from './Driver';

export class TripsRequest{
tripId: string;
customerId: number;
routeCode: string;
amount: number;
driver: Driver;
status: string;
createdDate: Date;
}