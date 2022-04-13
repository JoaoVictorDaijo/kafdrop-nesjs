export class LimpezaCreatedEvent {
  constructor(
    public readonly idUsuario: string,
    public readonly idOrdem: string,
    public readonly umNumero: number,
    public readonly dado: object,
  ) {}
}
