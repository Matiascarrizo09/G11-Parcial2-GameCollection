export class JuegoModel {
  constructor(
    private id: number,
    private nombreJuego: string,
    private desarrolladora: string,
    private fechaLanzamiento: Date,
    private genero: string,
    private horasJugadas: number = 0,
    private ultimaSesion: Date = new Date(),
    private favorito: boolean = false, // `favorito` inicia desmarcado, si el usuario quiere marcar un juego como favorito, debe marcarlo en la interfaz.
  ) {}

  // getter para id-------------------------------
  public getId(): number {
    return this.id;
  }
  //----------------------------------------------

  // setters y getters: nombreJuego---------------
  public setNombreJuego(nombreJuego: string): void {
    this.nombreJuego = nombreJuego;
  }

  public getNombreJuego(): string {
    return this.nombreJuego;
  }
  // ---------------------------------------------

  // setters y getters: desarrolladora------------
  public setDesarrolladora(desarrolladora: string): void {
    this.desarrolladora = desarrolladora;
  }

  public getDesarrolladora(): string {
    return this.desarrolladora;
  }
  // ---------------------------------------------

  // setters y getters: fechaLanzamiento----------
  public setFechaLanzamiento(fechaLanzamiento: Date): void {
    this.fechaLanzamiento = fechaLanzamiento;
  }

  public getFechaLanzamiento(): Date {
    return this.fechaLanzamiento;
  }
  // ---------------------------------------------

  // setters y getters: genero--------------------
  public setGenero(genero: string): void {
    this.genero = genero;
  }

  public getGenero(): string {
    return this.genero;
  }
  // ---------------------------------------------

  // setters y getters: horasJugadas--------------

  public setHorasJugadas(horasJugadas: number): void {
    this.horasJugadas = horasJugadas;
  }

  public getHorasJugadas(): number {
    return this.horasJugadas;
  }

  // ---------------------------------------------

  // getter para última sesión--------------------
  public getUltimaSesion(): Date {
    return this.ultimaSesion;
  }
  // ---------------------------------------------

  // toggle y getter para favorito----------------
  public toggleFavorito(): void {
    // Al llamar esta función, aplicará el valor opuesto al atributo `favorito`. 0 es _desmarcado_ y 1 es _marcado_.
    this.favorito = !this.favorito;
  }

  public getFavorito(): boolean {
    return this.favorito;
  }
  // ---------------------------------------------
}
