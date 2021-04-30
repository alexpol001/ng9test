export interface Weather {
  city: string;
  temperature: number;
  sky: WeatherSky;
}

export enum WeatherSky {
  SUNNY = 'Солнечно',
  CLOUDY = 'Облочно',
  RAINS = 'Дожди',
}
