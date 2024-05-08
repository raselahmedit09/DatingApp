import { Photo } from ".";

export interface MemberDetail {
    id: number;
    city: string;
    photoUrl: string;
    age: number;
    created: Date;
    introduction: string;
    lookingFor: string;
    interests: string;
    gender: string;
    knownAs: string;
    userId: string;
    lastActive: Date;
    country: string;

    memberPhotos: Photo[];
}