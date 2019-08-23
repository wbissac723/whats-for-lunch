export class Restaurant {
    name: string;
    isClosed: boolean;
    location: Address;
    category: string;
    hoursOfOperation: string;
    phoneNumber: string;
    rating: number;
    website?: string;
    imgURL?: string;
}

export class Address {
    line1: string;
    line2: string;
}
