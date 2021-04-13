export class Weather {
  
  constructor(city, countryCode) {
    this.apiKey = 'cf81014e1544fdbd72300c32e390a8da';
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = response.json();
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}