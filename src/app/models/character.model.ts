export interface ICharacter {
  id: number;
  name: string;
  status: string
  species: string
  type: string
  gender: string
  origin: ICharacter.origin
  location: ICharacter.location
  image: string
  episode: string[]
  url: string
  created: string
}

export declare namespace ICharacter {
  export interface origin {
    name: string
    url: string
  }

  export interface location {
    name: string
    url: string
  }
}


