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
  
    searchShow = async (id) => {
      const res = await this.getResource(`/search/shows?q=${id}`);
      return res.map(this.parceShows);
    };

    castShow = async (id) => {
      const res = await this.getResource(`/shows/${id}/cast`);
      return res;
    };
  
    getShow = async (id) => {
      const res = this.getResource(`/shows/${id}`);
      return res;
    };


  

    parceShows = (show) => {
     let {show: {image, id, name, type, premiered, summary, officialSite}} = show;
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
        summary: summary,
        officialSite: officialSite
      }
    }
  }