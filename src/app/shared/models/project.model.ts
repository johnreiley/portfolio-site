export class Project {
  constructor(
    public url: string,
    public image: string,
    public imgAlt: string,
    public title: string,
    public description: string,
    public tags: string[]
  ) {}
}