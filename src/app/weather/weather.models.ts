export interface WeatherItem {
  city: string;
  temperature: number;
  sky: WeatherSky;
}

export enum WeatherSky {
  SUNNY = 'Солнечно',
  CLOUDY = 'Облочно',
  RAINS = 'Дожди',
}
