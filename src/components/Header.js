import React from 'react';
import { connect } from 'react-redux';

import ModalWindow from './ModalWindow';

class Header extends React.Component{

   onShowModal(type){
     this.props.onShowModal(type);
   }

   onHideFunc(){
    this.props.onHideModal();
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

          { this.props.modal.visibility ? <ModalWindow onHide={ this.onHideFunc.bind(this) } type={ this.props.modal.type } /> : null }

        </div>
      </div>
     );
   }

};

const mapStateToProps = (state) => {
    return {
        modal: state.modalReducer,
        user: state.userReducer
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
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
