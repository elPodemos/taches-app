import { Component } from '@angular/core';
import { Tache } from '../tache';
import { TacheService } from '../tache.service';

import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-list-taches',
  templateUrl: `list-taches.component.html`
})
export class ListTachesComponent {

  tacheList: Tache[] = [];
  tache!: Tache;

  constructor(
    private service:TacheService,
  ){}

  getAllTache(){
    this.tacheList = this.service.fetchAll();
    return this.tacheList;
  }

  getByIdTache(id:number){
    this.tache = this.service.fetchById(id);
    return this.tache;
  }

  removeTache(id:number){
    this.tache = this.getByIdTache(id);
    return this.service.delete(this.tache);
  }

  onSubmit(form: NgForm){
    return this.service.add(form.value);
  }

}
