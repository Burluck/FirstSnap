import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  buttonString!: string;

  constructor(private faceSnapService: FaceSnapService){

  }
  ngOnInit(){
    this.buttonString = 'hello';
  }

  onSnap(){
    if(this.buttonString=='hello'){
      this.buttonString = 'bye';
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    }
    else{
      this.buttonString = 'hello';
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
  }
}
