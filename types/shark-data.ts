interface SharkDataCoordinates {
  dateReference: string;
  latitude: number;
  longitude: number;
}

export interface SharkData {
  id: number;
  name: string;
  nickName: string;
  image: string;
  description: string;
  scientificName: string;
  size: string;
  coordinates: SharkDataCoordinates[];
  weight: string;
  age: string;
}
