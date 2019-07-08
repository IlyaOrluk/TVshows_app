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
      return res
    };

    castShow = async (id) => {
      const res = await this.getResource(`/shows/${id}/cast`);
      return res
    };
  
    getShow = async (id) => {
      const show = this.getResource(`/shows/${id}`);
      return show;
    };

    showList = async (id) => {
      const res = await this.getResource(`/shows?page=${id}`);
      return res
    };
  
  }