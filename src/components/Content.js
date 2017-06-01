import React from 'react';

import ColumnItem from './ColumnItem';

export default class Content extends React.Component{
   render(){

     let columnsArray = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
     "Tempora distinctio quidem vitae obcaecati vero doloremque eum asperiores!",
     "Tempora distinctio quidem vitae obcaecati vero doloremque eum asperiores!"];

     let colunmsArrayList = columnsArray.map( (el, index) =>
         <ColumnItem key={ index } text={ el } /> );

     return (

       <div className="row">
         <div className="col-md-12 margin-bottom-20">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Optio, rerum accusamus. Tempora distinctio quidem vitae
             obcaecati vero doloremque eum asperiores!
         </div><i className="clearfix"></i>


         {/*--- Колонки контента---*/}
         { colunmsArrayList }

       </div>
     );
   }
};
