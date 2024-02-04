import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  usuarioData!: UsuarioEntity;
  usuarioFormGroup!: FormGroup;
  nomeControl!: FormControl;

  constructor(private localStorageService: LocalStorageService, private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuarioFormGroup = this.formBuilder.group(
      {
        id: 0,
        nome: ['', Validators.required],
        email: ['', Validators.required],
        senha: '',
        telefone: ['', Validators.required],
        endereco: ['', Validators.required],
        empresaId: 0,
        status: ['', Validators.required],
        funcao: ['', Validators.required],
      }
    );
  }  

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData');
    
    console.log(this.usuarioData);

    this.usuarioService.obterUsuario(this.usuarioData.id).subscribe(usuarioEntityResponse => {
      this.usuarioFormGroup.patchValue(usuarioEntityResponse);
    });
  }

  // usuarioMock: UsuarioEntity = {
  //   id: 1,
  //   nome: 'Administrador',
  //   email: 'admin',
  //   senha: 'admin',
  //   telefone: '123456789999',
  //   endereco: 'Rua A, 123',
  //   empresaId: 1,
  //   status: 'ativo',
  //   funcao: 'admin'
  // }

  submit() {
    if (this.usuarioFormGroup.valid) {
      console.log(this.usuarioFormGroup.controls["nome, email"].value);

      this.usuarioService.atualizarUsuario(this.usuarioFormGroup.controls['id, nome, email, senha, telefone, endereco, empresaId, status, funcao'].value).subscribe(responseMessage => console.log(responseMessage));
    } else {
      alert('Necessário preencher todos os campos!')
    }
  }
}
