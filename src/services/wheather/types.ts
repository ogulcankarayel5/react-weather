export interface IWeatherResponse {
    current: IWeatherResponseCurrentResponse
    location: IWeatherLocationResponse;
    forecast: IForeCastResponse;
    air_quality?: IAirQualityResponse
}

interface IWeatherResponseCurrentResponse {
    air_quality: IAirQualityResponse
    cloud: string
    condition: { text: string, icon: string, code: number }
    feelslike_c: number
    feelslike_f: number
    gust_kph: number
    gust_mph: number
    humidity: number
    is_day: number,
    last_updated: string
    last_updated_epoch: number
    precip_in: number
    precip_mm: number
    pressure_in: number
    pressure_mb: number
    temp_c: number
    temp_f: number
    uv: number
    vis_km: number
    vis_miles: number
    wind_degree: number
    wind_dir: string
    wind_kph: number
    wind_mph: number
}

export interface IAirQualityResponse {
    co: number
    gb_defra_index:number
    no2: number
    o3: number
    pm2_5: number
    pm10: number
    so2: number
    us_epa_index: number
}
interface IWeatherLocationResponse {
    country: string
    lat: number
    localtime: string
    localtime_epoch: number
    lon: number
    name: string
    region: string
    tz_id: string
}

interface IForeCastResponse {
    forecastday: Array<IForeCastDayResponse>
}

export interface IForeCastDayResponse {
    astro: IAstroResponse
    date: string,
    date_epoch: number,
    day: IDayResponse
    hour: Array<IHourResponse>
}

interface IAstroResponse {
    moon_illumination: string
    moon_phase: string
    moonrise: string
    moonset: string
    sunrise: string
    sunset: string
}

interface IDayResponse {
    avghumidity: number
    avgtemp_c: number
    avgtemp_f: number
    avgvis_km: number
    avgvis_miles: number
    condition: { text: string, icon: string, code: number }
    daily_chance_of_rain: "0"
    daily_chance_of_snow: "0"
    daily_will_it_rain: number
    daily_will_it_snow: number
    maxtemp_c: number
    maxtemp_f: number
    maxwind_kph: number
    maxwind_mph: number
    mintemp_c: number
    mintemp_f: number
    totalprecip_in: number
    totalprecip_mm: number
    uv: number
}

interface IHourResponse {
    chance_of_rain: string,
    chance_of_snow: string
    cloud: 3
    condition: { text: string, icon: string, code: number }
    dewpoint_c: number
    dewpoint_f: number
    feelslike_c: number
    feelslike_f: number
    gust_kph: number
    gust_mph: number
    heatindex_c: number
    heatindex_f: number
    humidity: number
    is_day: number
    precip_in: number
    precip_mm: number
    pressure_in: number
    pressure_mb: number
    temp_c: number
    temp_f: number
    time: string
    time_epoch: number
    uv: number
    vis_km: number
    vis_miles: number
    will_it_rain: number
    will_it_snow: number
    wind_degree: number
    wind_dir: string
    wind_kph: number
    wind_mph: number
    windchill_c: number
    windchill_f: number
}
