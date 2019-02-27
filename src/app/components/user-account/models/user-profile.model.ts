export class UserProfile {
    userName: string;
    email: string;
    tribe?: Tribe[];
    favoriteSpot?: FavoriteSpots[];
}

export class Tribe {
    creator: string;
    members: TribeMembers[];
    name: string;
}

export class TribeMembers {
    userName: string;
}

export class FavoriteSpots {
    name: string;
}
