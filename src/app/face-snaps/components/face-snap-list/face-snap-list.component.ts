import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapService: FaceSnapService){

  }
  ngOnInit() {
    //this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }

}
