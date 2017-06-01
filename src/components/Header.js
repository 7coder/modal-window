import React from 'react';

import ModalWindow from './ModalWindow';

export default class Header extends React.Component{

   onShowModal(type){
     this.props.showModal(type);
   }

   onHideFunc(){
    this.props.hideModal();
   }

   render(){
     
     return(
       <div className="navbar navbar-default">
        <div className="container-fluid">

          {/*--- Лого ---*/}
          <div className="navbar-header navbar-left">
            <a className="link logo" href="#">
              <span className="glyphicon glyphicon-equalizer" aria-hidden="true"></span>
              BestCompany</a>
          </div>

          {/*--- Навигация ---*/}
          <ul className="nav navbar-nav navbar-right">
            <li><a className="a" onClick={ this.onShowModal.bind(this, 'reg')}>Регистрация</a></li>
            <li><a className="a" onClick={ this.onShowModal.bind(this, 'login')} >Войти</a></li>
          </ul>

          { this.props.modal.modal.visibility ? <ModalWindow onHide={ this.onHideFunc.bind(this) } type={ this.props.modal.modal.type } /> : null }

        </div>
      </div>
     );
   }

};
