export class LimpezaCreatedEvent {
  constructor(
    public readonly idUsuario: string,
    public readonly idOrdem: string,
    public readonly umNumero: number,
    public readonly dado: object,
  ) {}

  // Se eu passo uma Classe no parametro de limpezaClient.emit o Nest chama um toString(). Isso faz com que a gente perca as props da Classe.
  // Então eu sobrescrevo o método toString dessa classe para que ele seja um stringify retornando as props dessa classe.
  toString() {
    return JSON.stringify({
      idOrdem: this.idOrdem,
      idUsuario: this.idUsuario,
      umNumero: this.umNumero,
      dado: this.dado,
    });
  }
}
