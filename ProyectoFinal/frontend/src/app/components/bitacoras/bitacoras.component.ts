import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import Bitacoras from 'src/app/models/bitacoras';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bitacoras',
  templateUrl: './bitacoras.component.html',
  styleUrls: ['./bitacoras.component.css']
})
export class BitacorasComponent implements OnInit {
  // bufet : Bufet[] = [];
  bitacoras : Bitacoras[] = [];

  dataSource;

  displayedColumnsBitacoras: string[] = ['codigo', 'usuario', 'fecha_hora', 'descripcion'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getBitacoras()
    .subscribe((bitacoras: Bitacoras[]) =>{ this.dataSource = bitacoras });
  }

}
