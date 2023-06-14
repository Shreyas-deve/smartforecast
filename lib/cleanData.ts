const cleanData = (data: Root, city: string) => {
  const {
    current_weather,
    timezone,
    hourly,
    hourly_units,
    timezone_abbreviation,
    daily,
  } = data;

  const { temperature, windspeed, time } = current_weather;

  const { temperature_2m, rain, uv_index } = hourly;

  const { weathercode } = daily;

  return {
    current_weather: {
      temperature,
      windspeed,
      time,
    },
    hourly: {
      temperature_2m: temperature_2m.slice(0, 24),
      rain: rain.slice(0, 24),
      uv_index: uv_index.slice(0.24),
    },
    daily: {
      weathercode,
    },
    timezone,
    timezone_abbreviation,
    city,
  };
};

export default cleanData;
