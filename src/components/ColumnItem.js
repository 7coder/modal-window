import React from 'react';

export default class ColumnItem extends React.Component{
  render(){
    return(
      <div className="col-md-4 margin-bottom-20">
         { this.props.text }
      </div>
    );
  }
};
