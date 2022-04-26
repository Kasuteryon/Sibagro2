import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../models/country';
import { Identify } from '../models/identify';
import { IdentifyType } from '../models/identify-type';
import { Regions } from '../models/region';
import { Roles } from '../models/roles';

const BASE = "https://sibagro-web-api.herokuapp.com/v1/";
const ROLES = "https://sibagro-web-api.herokuapp.com/v1/Permissions";

let key = localStorage.getItem('token')?.toString();

const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': `${key}`}),
}


@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient:HttpClient) { }

  // ROLES CATALOG
  addRole(role:Roles): Observable<Roles>{
    return this.httpClient.post<Roles>(`${ROLES}/NewRole`, role, headers);
  }

  getRoles(): Observable<Roles[]>{
    return this.httpClient.get<Roles[]>(`${ROLES}/RolesCatalog`, headers);
  }

  getOneRole(id:string): Observable<Roles>{
    return this.httpClient.get<Roles>(`${ROLES}/RolesCatalog/${id}`,headers);
  } 

  editRoles(role:Roles): Observable<Roles>{
    return this.httpClient.put<Roles>(`${ROLES}/${role.role_Id}`, role, headers);
  }

  // REGIONS CATALOG

  addRegion(region:Regions): Observable<Regions>{
    return this.httpClient.post<Regions>(`${BASE}Regions/newRegion`, region, headers);
  }

  getRegions(): Observable<Regions[]>{
    return this.httpClient.get<Regions[]>(`${BASE}Regions/getCatalog/`, headers);
  }

  // COUNTRY CATALOG

  addCountry(country:Countries): Observable<Countries>{
    return this.httpClient.post<Countries>(`${BASE}newCountry/`, country, headers);
  }

  getCountries(): Observable<Countries[]>{
    return this.httpClient.get<Countries[]>(`${BASE}Country/CompleteCatalog/`, headers);
  }

  // IDENTIFY TYPES CATALOG

  addIdentifyType(iden:IdentifyType): Observable<IdentifyType>{
    console.log(headers);
    return this.httpClient.post<IdentifyType>(`${BASE}Identifications/IdentificationsType/`, iden, headers);
  }

  getIdentifyTypes(): Observable<IdentifyType[]>{
    return this.httpClient.get<IdentifyType[]>(`${BASE}Identifications/IdentificationsType/`, headers)
  }

  // IDENTIFY CATALOG

  addIdentify(ide:Identify): Observable<Identify>{
    return this.httpClient.post<Identify>(`${BASE}Identifications/IdentificationsCatalog/`, ide);
  }

  getIdentify(): Observable<Identify[]>{
    return this.httpClient.get<Identify[]>(`${BASE}Identifications/IdentificationsCatalog/`);
  }

}
