export interface RegisterNatural {
    Name:string;
    LastName:string;
    Gender:string;
    BirthDate: Date;
    Identification_Catalogid: string;
    Idenfication_Number: string;
    Email: string;

    Administrative_Division_Isocode:string;
    City:string;
    Location:string; // LAT Y LON
    Domicile:string;
    PostalCode:string;
}
