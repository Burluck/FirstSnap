import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonString!: string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute ){

  }
  ngOnInit(){
    this.buttonString = 'hello';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
