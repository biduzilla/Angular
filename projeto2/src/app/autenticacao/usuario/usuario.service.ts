import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});
  constructor(private tokenSerice: TokenService) {
    if (this.tokenSerice.possuiToken()) {
      this.decodificaJWT();
    }
  }

  decodificaJWT() {
    const token = this.tokenSerice.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenSerice.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenSerice.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.tokenSerice.possuiToken();
  }
}
