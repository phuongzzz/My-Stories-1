export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public avatar: string,
    public stories: any[],
  ) { }
}
