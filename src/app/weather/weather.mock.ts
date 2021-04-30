import { Weather, WeatherSky } from './weather.model';

export const WEAHTER: Weather[] = [
  {
    city: 'Санкт-Петербург',
    temperature: 20,
    sky: WeatherSky.SUNNY,
  },
  {
    city: 'Москва',
    temperature: -10,
    sky: WeatherSky.CLOUDY,
  },
  {
    city: 'Псков',
    temperature: 5,
    sky: WeatherSky.RAINS,
  },
  {
    city: 'Великий Новгород',
    temperature: 15,
    sky: WeatherSky.SUNNY,
  },
];
