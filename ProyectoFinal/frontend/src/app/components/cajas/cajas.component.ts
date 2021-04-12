import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Bufet from 'src/app/models/bufet';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.css']
})
export class CajasComponent implements OnInit {
  bufet : Bufet[] = [];
  selected;
  dataSource;

  @ViewChild('myCheckbox') myCheckbox;

  isChecked = false;
  optionsAdmin: string[] = ['Administrador del systema', 'Administrador de seguridad', 'Administrador del restaurante', 'Administrador de cuentas'];
  displayedColumnsConsecutivos: string[] = ['codigo', 'fecha_registro', 'descripcion', 'entrada_dinero', 'apertura_caja', 'cierre_caja', 'restaurante'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.taskService.getCajas()
    .subscribe((bufet: Bufet[]) =>{ this.dataSource = bufet });
  }

  testForm() {
    window.alert('Form works');
  }

  checkCheckBoxvalue(event){
    console.log(event.checked)
  }

  // ELAMO() {
  //   console.log(myCheckbox, 'Value of checkbox');
  // }

}
