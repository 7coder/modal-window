import React from 'react';

import ModalWindowRegistration from './ModalWindowRegistration';
import ModalWindowLogin from './ModalWindowLogin';

export default class ModalWindow extends React.Component{

  onHideHandler(){
    this.props.onHide();
  };

  onSubmitData(data){
    fetch('/xyz', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( (response) =>  response.json())
    .then( (result) => console.log('Получен ответ от сервера:\n','Статус:', result.status, '\nОбъект:', result.text))
    .catch( (error) => console.log(error))
  };

  render(){

    let headEl;

    if ( this.props.type === "reg" ){
      headEl = <div><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Регистрация</div>;
    } else {
      headEl = <div><span className="glyphicon glyphicon-lock" aria-hidden="true"></span> Вход</div>;
    };

    return(
      <div className="modal-window-bg">
      <div className="modal-window">
        <h4 className="modal-window-head">

         <div className="close-button" onClick = { this.onHideHandler.bind(this) }>&times;</div>

         { headEl }

        </h4>
        <div className="modal-window-container">

        { this.props.type === "reg" ? <ModalWindowRegistration onSubmitHandler={ this.onSubmitData.bind(this) } /> : <ModalWindowLogin onSubmitHandler={ this.onSubmitData.bind(this) } /> }

        </div>
      </div>
     </div>
    );
  }
};
