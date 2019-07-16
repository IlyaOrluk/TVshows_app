import NoImage from '../img/no-image.gif';
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
      return res.map(this.parceShows);
    };

    castShow = async (id) => {
      const res = await this.getResource(`/shows/${id}/cast`);
      return res.map(this.parceCast);
    };
  
    getShow = async (id) => {
      const res = await this.getResource(`/shows/${id}`);
      return this.parceShow(res);
    };


    parceCast = (cast) => {
      let {character: { id, name, image } } = cast;
      if(image === null){
        image = NoImage;
     } else {
        image = image.medium;
     }
       return {
         img: image,
         id: id,
         name: name
       }
    }

    parceShows = (show) => {
     let {show: {image, id, name, type, premiered}} = show;
     if(image === null){
        image = NoImage;
     } else {
        image = image.medium;
     }
     
      return {
        img: image,
        id: id,
        name: name,
        type: type,
        premiered: premiered,
      }
    }

    parceShow = (show) => {
      let { image, id, name, type, premiered, summary, officialSite, genres, rating } = show; //from this project
      if(image === null){
         image = NoImage;
      } else {
         image = image.medium;
      }
      if(rating.average === null){
        rating = 'Unknown';
      } else {
        rating = rating.average;
      }
      if(summary !== null){
        summary = summary.replace(/<\/?[^>]+>/g,'');
      }
       return {
         img: image,
         id: id,
         name: name,
         type: type,
         premiered: premiered,
         summary: summary,
         rating: rating,
         genres: genres,
         officialSite: officialSite
       }
    }
   
  }