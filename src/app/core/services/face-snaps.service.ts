import { HttpClient } from '@angular/common/http';
import{ Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    
    constructor(private http: HttpClient) {}

    
      
    getAllFaceSnaps(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{
        /*const fs = this.faceSnaps.find(fs => fs.id === faceSnapId);
        if(!fs) throw new Error('FaceSnap not found');
        else return fs;*/
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'): Observable<FaceSnap>{
       // const fs = this.getFaceSnapById(faceSnapId);
       // snapType === 'snap' ? fs.snaps++ : fs.snaps--;

        return this.getFaceSnapById(faceSnapId).pipe(
            map(fs => ({
                ...fs,
                snaps: fs.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
        );
        
    }
    
    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap>{

        return this.getAllFaceSnaps().pipe(
            map(facesnaps => [...facesnaps].sort((a:FaceSnap, b:FaceSnap) => a.id - b.id)),
            map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
            map(previousFacesnap => ({
                ...formValue,
                snaps:0,
                createdDate: new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFacesnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap))
        )
    }
}