import { Injectable } from '@angular/core';
import { TACHES } from './mock-taches-list';
import { Tache } from "./tache";


@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor() { }

  fetchAll(){
    return TACHES;
  }

  fetchById(i:number){
    return TACHES[i-1];
  }

  add(tache:Tache){
    TACHES.push(tache);
  }

  delete(tache:Tache){
    TACHES.splice(TACHES.indexOf(tache),1);
  }

}
