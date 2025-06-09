import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})
export class CreateRideComponent implements OnInit {
  rideForm!: FormGroup;
  selectedLocation:any;
  startLocation?: { lat: number, lng: number, address: string };
  endLocation?: { lat: number, lng: number, address: string };
  constructor(private fb: FormBuilder){}
  ngOnInit() {
    this.rideForm = this.fb.group({
      intercity: [false, Validators.required],
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      date: [new Date(), Validators.required],
      helmet: [false, Validators.required],
      gloves: [false, Validators.required],
      jacket: [false, Validators.required],
      fullBody: [false, Validators.required],
      notes: ['']
    })
  }

  setStartLocation(location: any) {
    this.startLocation = location;
  }

  setEndLocation(location: any) {
    this.endLocation = location;
  }
  
}
