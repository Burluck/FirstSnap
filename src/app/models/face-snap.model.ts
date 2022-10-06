export class FaceSnap {
    constructor(public id: number,
                public title: string, 
                public description: string, 
                public img: string, 
                public createdDate: Date, 
                public snaps: number,
                public location?: string){        
    }
}
