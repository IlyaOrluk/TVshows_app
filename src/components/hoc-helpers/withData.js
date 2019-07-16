import React, { Component } from 'react';

import Spinner from '../Spinner';

const withData = (View, getData, dataContent) => {
    return class extends Component {
  
      state = {
        data: null
      };
    
      componentDidMount() {
        getData(dataContent)
          .then((data) => {
            this.setState({
              data
            });
          });
      }
    
      // componentDidUpdate(prevProps){
      //   if(this.props.searchContent !== prevProps.searchContent){
      //     if(this.props.searchContent.length > 0) {
      //       const { getData, searchContent } = this.props;
    
      //     getData(searchContent)
      //     .then((data) => {
      //       this.setState({
      //         data
      //       });
      //     });
      //     }
      //   }
      // }
    
      render() {
      const { data } = this.state;
  
      if (!data) {
        return <Spinner />;
      }
  
        return <View {...this.props} data={this.state.data}/>;
      }
    }
  }

  export default withData;