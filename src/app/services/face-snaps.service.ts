import{ Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    
    faceSnaps:FaceSnap[] = [
    new FaceSnap(
        1,
        'Shrek',
        'le seul et l unique',
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shrek_Swamp_Meme.jpg',
        new Date,
        0, 
        'swamp'
    ),

    new FaceSnap(
        2,
        'Flash McQueen',
        'le fast',
        'https://i.pinimg.com/originals/c8/6c/86/c86c8624c53c0024a88f8a8d5ac99888.jpg',
        new Date,
        213
    )];
      
    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId: number): FaceSnap{
        const fs = this.faceSnaps.find(fs => fs.id === faceSnapId);
        if(!fs) throw new Error('FaceSnap not found');
        else return fs;
    }
    snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'): void{
        const fs = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? fs.snaps++ : fs.snaps--;
    }
}