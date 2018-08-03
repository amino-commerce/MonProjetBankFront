import { Component, OnInit } from '@angular/core';
import { Compte } from '../domain/compte';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  data: Compte[];

  constructor(private _service: ComptesService) { } // Dependency injection

  ngOnInit() {
    this.data = null;
    this._service.getAllComptes().subscribe(
    res=> this.data = res
    );
  }
}
