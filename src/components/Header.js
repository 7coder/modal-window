import React from 'react';
import { connect } from 'react-redux';

import ModalWindow from './ModalWindow';

class Header extends React.Component{

   onShowModal(type){
     this.props.onShowModal(type);
   }

   onHideFunc(){
    this.props.onHideModal();
    this.props.onClearData();
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

          { this.props.modal.visibility ? <ModalWindow ajaxInfo={this.props.ajaxInfo} user={this.props.user} onHide={ this.onHideFunc.bind(this)} type={ this.props.modal.type } visibility={this.props.modal.visibility} onChangeGender={this.props.onChangeGender} onSendData= {this.props.onSendData}/> : null }

        </div>
      </div>
     );
   }

};

const mapStateToProps = (state) => {
    return {
        modal: state.modalReducer,
        user: state.userReducer,
        ajaxInfo: state.ajaxReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowModal: (modalType) => {
            dispatch({
                type: 'SHOW_MODAL_WINDOW',
                modalType: modalType
            })
        },
        onHideModal: () => {
          dispatch({
                type: 'HIDE_MODAL_WINDOW',
                modalType: null
            })
        },
        onChangeGender: (value) => {
          dispatch({
              type: 'USER_CHANGE_GENDER',
              value: value
          })
        },
        onSendData: (data) => {
            fetch('/xyz', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then( (response) => response.json())
            .then( (result) => {
                dispatch({
                  type: 'AJAX_REQUEST_SUCCESS',
                  obj: result
                })
             })
             .catch( (error) => {
               dispatch({
                 type: 'AJAX_REQUEST_ERROR',
                 error: error
               })
             })
          },
          onClearData: () => {
            dispatch({
              type: 'CLEAR_DATA'
            })
          }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
