export default class ApiService {

    _apiBase = 'http://api.tvmaze.com';
  
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };
  
    searchShow = async (search) => {
      const res = await this.getResource(`/search/shows?q=${search}`);
      return res
    };

    castShow = async (search) => {
      const res = await this.getResource(`/shows/${search}/cast`);
      return res
    };
  
    getShow = async (id) => {
      const show = this.getResource(`/shows/${id}`);
      return show;
    };
  
    // getAllPlanets = async () => {
    //   const res = await this.getResource(`/planets/`);
    //   return res.results
    //     .map(this._transformPlanet)
    //     .slice(0, 5);
    // };
  
    // getPlanet = async (id) => {
    //   const planet = await this.getResource(`/planets/${id}/`);
    //   return this._transformPlanet(planet);
    // };
  
    // getAllStarships = async () => {
    //   const res = await this.getResource(`/starships/`);
    //   return res.results
    //     .map(this._transformStarship)
    //     .slice(0, 5);
    // };
  
    // getStarship = async (id) => {
    //   const starship = await this.getResource(`/starships/${id}/`);
    //   return this._transformStarship(starship);
    // };
  
    // // getPersonImage = ({id}) => {
    // //   return `${this._imageBase}/characters/${id}.jpg`
    // // };
  
    // // getStarshipImage = ({id}) => {
    // //   return `${this._imageBase}/starships/${id}.jpg`
    // // };
  
    // // getPlanetImage = ({id}) => {
    // //   return `${this._imageBase}/planets/${id}.jpg`
    // // };
  
    // // _extractId = (item) => {
    // //   const idRegExp = /\/([0-9]*)\/$/;
    // //   return item.url.match(idRegExp)[1];
    // // };
  
    // _transformPlanet = (planet) => {
    //   return {
    //     id: this._extractId(planet),
    //     name: planet.name,
    //     population: planet.population,
    //     rotationPeriod: planet.rotation_period,
    //     diameter: planet.diameter
    //   };
    // };
  
    // _transformStarship = (starship) => {
    //   return {
    //     id: this._extractId(starship),
    //     name: starship.name,
    //     model: starship.model,
    //     manufacturer: starship.manufacturer,
    //     costInCredits: starship.cost_in_credits,
    //     length: starship.length,
    //     crew: starship.crew,
    //     passengers: starship.passengers,
    //     cargoCapacity: starship.cargo_capacity
    //   }
    // };
  
    // _transformPerson = (person) => {
    //   return {
    //     id: person.id,
    //     name: person.name,
    //     gender: person.gender,
    //     birthYear: person.birth_year,
    //     eyeColor: person.eye_color
    //   }
    // }
  }