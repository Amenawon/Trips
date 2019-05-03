import { Component, OnInit } from '@angular/core';
import { TripsService } from '../core/service/trips/trips.service';
import { TripsRequest } from '../core/model/TripRequest';
import { Driver } from '../core/model/Driver';
const auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOjcwMywidXNlclR5cGUiOiJhZG1pbiIsImVtYWlsIjoidG9zaW5Aa29ibzM2MC5jb20iLCJtb2JpbGUiOiIrMjM0ODAzNzI2ODI2MSIsImZpcnN0TmFtZSI6IlNoeXBlcyIsInJvbGUiOiJDT01NUyIsImFkbWluSWQiOjE1LCJ1bmlxdWVIYXNoIjoiNWNjMzVhMTZkMThmMSIsImlzcyI6IktvYm8zNjAiLCJpYXQiOjE1NTYzMDY0NTQsImV4cCI6MjE2MTEwNjQ1NH0.9aN6SM21vEipf44qIIoJ9H-oe90TOvkf6411FIL2HX4';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  tripsList: TripsRequest[];
  driver: Driver;
  public filterValue: string;
  pageSize: number;
  current_page: number = 1;
  totalPages: number;
  limit = 30;
  isLoaderActive: boolean;
  searchKey = '';

  constructor(private tripsService: TripsService) { }

  ngOnInit() {
    this.loadTripRequests(this.current_page, this.limit);

  }
  loadTripRequests(pageNumber?: number, limit?: number) {
    this.isLoaderActive = true;
    this.tripsService.get(pageNumber, limit).subscribe((response: any) => {
      console.log(response.data);
      this.isLoaderActive = false;
      this.tripsList = response.data.trips;
      this.totalPages = response.data.totalPages;
      response.data.currentPage = this.current_page;
      this.current_page = Number(response.data.currentPage);
    });
  }
  prevPage() {
    if (this.current_page > 1) {
      this.current_page--;
      this.changePage(this.current_page);
      this.loadTripRequests(this.current_page);
    }
  }

  nextPage() {
    if (this.current_page < this.totalPages) {
      this.current_page++;
      this.changePage(this.current_page);
      this.loadTripRequests(this.current_page);
    }
  }

  changePage(page) {
    let btn_next = document.getElementById("btn_next");
    let btn_prev = document.getElementById("btn_prev");

    // Validate page
    if (page < 1) page = 1;
    if (page > this.totalPages) page = this.totalPages;


    if (page === 1) {
      btn_prev.style.visibility = "hidden";
    } else {
      btn_prev.style.visibility = "visible";
    }

    if (page === this.totalPages) {
      btn_next.style.visibility = "hidden";
    } else {
      btn_next.style.visibility = "visible";
    }
  }
  search(value) {
    this.isLoaderActive = true;
    this.tripsService.search(value).subscribe((response) => {
      this.isLoaderActive = false;
      this.tripsList = response.data.trips;
    });
  }
}
