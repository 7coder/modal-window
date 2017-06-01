import React from 'react';

import Header from './Header';
import Content from './Content';


export default class App extends React.Component{
  render(){
    return(
      <div className="container">
         <Header />
         <Content />
       </div>
    );
  };
};
