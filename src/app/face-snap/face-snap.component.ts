import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  buttonString!: string;

  ngOnInit(){
    this.buttonString = 'hello';
  }

  onSnap(){
    if(this.buttonString=='hello'){
      this.buttonString = 'bye';
      this.faceSnap.snaps++;
    }
    else{
      this.buttonString = 'hello';
      this.faceSnap.snaps--;
    }
  }
}
