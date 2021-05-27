export interface IObject<V = any> {
	[key: string]: V;
}

export enum UsEpaIndex {
  Good = 1,
  Moderate = 2,
  UnhealthyForSensetive = 3,
  Unhealthy = 4,
  VeryUnhealthy = 5,
  Hazardous = 6

}