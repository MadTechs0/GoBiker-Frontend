// map-search.component.ts
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, defer, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent implements OnInit{
  @Output() locationSelected = new EventEmitter<any>();
  @Input() placeholder = 'Search location';
  
  searchQuery = new FormControl('');
  searchResults: any[] = [];
  constructor(private http: HttpClient) {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.http.get<any[]>(`https://nominatim.openstreetmap.org/search?format=json&q=${value}`).subscribe(results => {
        this.searchResults = results;
      });
    })
  }

  ngOnInit(){

  }


  selectLocation(result: any) {
    this.locationSelected.emit({
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
      address: result.display_name
    });
    this.searchResults = [];
  }
}