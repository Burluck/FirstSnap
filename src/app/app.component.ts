import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  flash!:FaceSnap;

  ngOnInit() {
    this.faceSnaps = [
    new FaceSnap(
      'Shrek',
      'le seul et l unique',
      'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shrek_Swamp_Meme.jpg',
      new Date,
      0, 
      'swamp'
    ),

    new FaceSnap(
      'Flash McQueen',
      'le fast',
      'https://i.pinimg.com/originals/c8/6c/86/c86c8624c53c0024a88f8a8d5ac99888.jpg',
      new Date,
      213
    )];
  }
}
