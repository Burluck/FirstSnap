export class FaceSnap {
    constructor(public title: string, 
                public description: string, 
                public img: string, 
                public createdDate: Date, 
                public snaps: number,
                public location?: string){        
    }
}
