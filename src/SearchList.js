import React, {Component} from 'react';

// import ApiService from './services/ApiServices';


export default class SearchList extends Component {
    state = {
        findShows: null
    }

    // ApiService = new ApiService();

    // findShows = () => {
    //     this.ApiService
    //     .searchShow('tin')
    //     .then((show) =>{
    //         this.setState({
    //             findShows: show
    //         });
    //         console.log(show)
    //     });
    //   };
    //   this.findShows();

    render(){

        const{searchContent} = this.props;
        return(
            <div>{searchContent}</div>
        );
    }
}