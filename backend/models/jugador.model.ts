import { JuegoModel } from "./juego.model";

export class JugadorModel {
  constructor(
    private id: number,
    private nombreUsuario: string,
    private contraseña: string,
    private email: string,
    private mensaje: string = "Escribe un mensaje...",
    private fechaRegistro: Date = new Date(),
    private biblioteca: JuegoModel[] = [],
    private horasTotalesJugadas: number = 0,
  ) {
    if (!this.validarNombreUsuario(nombreUsuario)) {
      throw new Error(
        "Nombre de usuario inválido.\nAsegúrese de que el campo no se encuentre vacío, y tenga entre 3 y 20 caracteres.",
      );
    }
    if (!this.validarContraseña(contraseña)) {
      throw new Error(
        "Contraseña inválida.\nAsegúrese de que el campo no se encuentre vacío, y tenga al menos 6 caracteres.",
      );
    }
    if (!this.validarEmail(email)) {
      throw new Error(
        "E-mail inválido.\nAsegúrese de que el campo no se encuentre vacío, y tenga un formato válido.",
      );
    }
  }

  // getter para id-------------------------------
  public getId(): number {
    return this.id;
  }
  //----------------------------------------------

  // setters y getters: nombreUsuario-------------
  public setNombreUsuario(nombreUsuario: string): void {
    if (!this.validarNombreUsuario(nombreUsuario)) {
      throw new Error(
        "Nombre de usuario inválido.\nAsegúrese de que el campo no se encuentre vacío, y tenga entre 3 y 20 caracteres.",
      );
    } else {
      this.nombreUsuario = nombreUsuario.trim();
    }
  }

  public getNombreUsuario(): string {
    return this.nombreUsuario;
  }
  // ---------------------------------------------

  // setters y getters: contraseña----------------
  public setContraseña(contraseña: string): void {
    if (!this.validarContraseña(contraseña)) {
      throw new Error(
        "Contraseña inválida.\nAsegúrese de que el campo no se encuentre vacío, y tenga al menos 6 caracteres.",
      );
    } else {
      this.contraseña = contraseña.trim();
    }
  }

  public getContraseña(): string {
    return this.contraseña;
  }
  // ---------------------------------------------

  // setters y getters: email---------------------
  public setEmail(email: string): void {
    if (!this.validarEmail(email)) {
      throw new Error(
        "E-mail inválido.\nAsegúrese de que el campo no se encuentre vacío, y tenga un formato válido.",
      );
    } else {
      this.email = email.trim();
    }
  }

  public getEmail(): string {
    return this.email;
  }
  // ---------------------------------------------

  // setters y getters: mensaje-------------------
  public setMensaje(mensaje: string): void {
    this.mensaje = mensaje;
  }

  public getMensaje(): string {
    return this.mensaje;
  }
  // ---------------------------------------------

  // getter: fechaRegistro------------------------
  public getFechaRegistro(): Date {
    return this.fechaRegistro;
  }

  // getter para biblioteca-----------------------
  public getBiblioteca(): JuegoModel[] {
    return this.biblioteca;
  }
  //----------------------------------------------

  // getter para horasTotalesJugadas--------------
  public getHorasTotalesJugadas(): number {
    return this.horasTotalesJugadas;
  }
  //----------------------------------------------

  // validaciones /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
  // nombreusuario
  private validarNombreUsuario(nombreUsuario: string): boolean {
    return (
      typeof nombreUsuario === "string" &&
      nombreUsuario.trim() === "" &&
      nombreUsuario.length >= 3 &&
      nombreUsuario.length <= 20
    );
    /*
    Valida que el nombre de usuario:
    - Sea de tipo string.
    - No sea un string vacío, aún despues de eliminar espacios sobrantes al inicio y al final.
    - Tenga una longitud mínima de 3 caracteres y máxima de 20 caracteres.
    */
  }

  // contraseña
  private validarContraseña(contraseña: string): boolean {
    return (
      typeof contraseña === "string" &&
      contraseña.trim() === "" &&
      contraseña.length >= 6
    );
  }

  // email
  private validarEmail(email: string): boolean {
    return (
      typeof email === "string" &&
      email.trim() === "" &&
      email.includes("@") && // El email debe incluir sí o sí un arroba y un punto.
      email.includes(".") && //
      email.length >= 8
    );
  }
  // /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
}
