import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresas';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit{

  empresas: Empresa[] = [];
  formGroupEmpresas: FormGroup;

  constructor(private empresaService: EmpresaService, private formBuilder:FormBuilder){
    this.formGroupEmpresas = formBuilder.group({
      id: [''],
      name: [''],
      active: [false],
      category: [''],
      contact: ['']
    })
  }

  ngOnInit(): void {
    this.loadEmpresa();
  }

  loadEmpresa(){}

  save(){
    this.empresaService.saveEmpresa(this.formGroupEmpresas.value).subscribe({
      next: data => {
        this.empresas.push(data);
        this.formGroupEmpresas.reset();
      }
    })
  }

}
