import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hiak-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton hotel';

  numberOfRooms=10;

  hideRooms=false;

  rooms : Room={
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = []

  constructor() { }

  ngOnInit(): void {
    this.roomList=[
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Condition, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: '',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.6
    },
    {
      roomNumber: 2,
      roomType: 'Delux Room',
      amenities: 'Air Condition, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: '',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.4
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Condition, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: '',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.9
    }
  ]
  }

  toggle() {
   this.hideRooms = !this.hideRooms;
  }

}
