import { ICharacter } from "./character.model"
import { IEpisode } from "./episode.model"
import { ILocation } from "./locations.model"

export type ListClass = 'character' | 'location' | 'episode'
export type ClassType = ICharacter | ILocation | IEpisode

export interface IList {
  info: IInfo,
  results: ClassType[]
}

interface IInfo {
  count: number,
  next?: string,
  pages: number,
  prev?: string
}

export interface IQueries {
  name?: string,
  page?: string,
}