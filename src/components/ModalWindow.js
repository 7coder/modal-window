import React from 'react';

import ModalWindowRegistration from './ModalWindowRegistration';
import ModalWindowLogin from './ModalWindowLogin';

export default class ModalWindow extends React.Component{

  onHideHandler(){
    this.props.onHide();
  };

  // onSubmitData(data){
  //   fetch('/xyz', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then( (response) =>  response.json())
  //   .then( (result) => console.log('Получен ответ от сервера:\n','Статус:', result.status, '\nОбъект:', result.text))
  //   .catch( (error) => console.log(error))
  // };

  render(){
  
    let headEl;

    if ( this.props.type === "reg" ){
      headEl = <div><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Регистрация</div>;
    } else {
      headEl = <div><span className="glyphicon glyphicon-lock" aria-hidden="true"></span> Вход</div>;
    };

    let error;
    let errorMessage = this.props.ajaxInfo.error.message;
    if ( this.props.ajaxInfo.error){
      error = <p><b>Ошибка:</b> { errorMessage } </p>
    }

    let showInfo;
    let text = this.props.ajaxInfo.dataObj.text;
    if ( this.props.ajaxInfo.showInfo  === true && this.props.visibility ){

      showInfo = <div className="server-response">
                    <p><b>Получен ответ от сервера:</b> {this.props.ajaxInfo.dataObj.status}</p>
                    <p style={{width: 320, wordBreak: 'break-all'}}><b>Данные:</b> { JSON.stringify(text) }</p>
                    {error}
                 </div>
    } else {
      showInfo = null
    }

    return(
      <div className="modal-window-bg">


      <div className="modal-window">
        <h4 className="modal-window-head">

         <div className="close-button" onClick = { this.onHideHandler.bind(this) }>&times;</div>

         {/***** Заголовок модального окна *****/}
         { headEl }

        </h4>
        <div className="modal-window-container">

        { this.props.type === "reg" ? <ModalWindowRegistration onSendData={this.props.onSendData} onChangeGender={this.props.onChangeGender} user={this.props.user}  /> : <ModalWindowLogin  onSendData={this.props.onSendData} /> }

        {/***** Информация ответа с сервера *****/}
        {showInfo}

        </div>
      </div>
     </div>
    );
  }
};
