export default class WKD {
  constructor();
  public lookup(options: { email: string }): Promise<Uint8Array>;
}
