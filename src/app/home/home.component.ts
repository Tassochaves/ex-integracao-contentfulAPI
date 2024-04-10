import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfullApiService } from '../services/contentfull-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  nome: string ='';
  constructor(private contenfullApi: ContentfullApiService){
   
  }

  minhaPagina$: Observable<any> | undefined;

  ngOnInit(): void {
    this.minhaPagina$ =  this.contenfullApi.obterDados();
  }

}
