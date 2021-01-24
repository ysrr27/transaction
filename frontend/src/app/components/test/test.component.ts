import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  listar:any;
  showUpdateForm:any = false;
  profileForm:FormGroup = this.fb.group({
    VA_DESCRIPTION: [''],
    VA_AMOUNT: [''],
  });
  profileFormUpdate:FormGroup = this.fb.group({
    VA_DESCRIPTION: [''],
    VA_AMOUNT: [''],
  });

  constructor(private testService: TestService, public fb: FormBuilder) { }
  ngOnInit(): void {
    this.testService.listarTodos().subscribe(
      (data:any) => {
        this.listar = data;
      }
    );
  }

  
  actualizar(id:any){
    this.showUpdateForm = true;
    this.testService.getDataid(id).subscribe(
      (res:any) => {
        this.profileFormUpdate = this.fb.group({
          VA_DESCRIPTION: [res.VA_DESCRIPTION],
          VA_AMOUNT: [res.VA_AMOUNT],
          NU_ID: [res.NU_ID],
        });
      } 
    );
  }

  eliminar(indice:any, id:any){
    this.testService.eliminar(id).subscribe(
      (res:any) => {
        this.listar.splice(indice, 1);
      }
    );
  }

  
  onSubmit(){
    this.testService.crear(this.profileForm.value).subscribe(
      (data:any) => {
        this.testService.listarTodos().subscribe(
          (data:any) => {
            this.listar = data;
          }
        );
      }
    );
  }

  onSubmitUpdate(){
    this.showUpdateForm = false;
    console.log(this.profileFormUpdate.value);
    this.testService.actualizar(this.profileFormUpdate.value).subscribe(
      (res:any) => {
        this.testService.listarTodos().subscribe(
          (data:any) => {
            this.listar = data;
          }
        );
      }
    );
  }

}
