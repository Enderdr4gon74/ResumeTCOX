import { Icon } from "./Icon.js"

export class Skill {
  constructor(data) {
    this.Name = data.Name
    this.Description = data.Description
    this.Icons = data.Icons.map(i => new Icon(i))
  }
}