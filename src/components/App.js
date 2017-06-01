import React from 'react';

import Header from './Header';
import Content from './Content';
import { connect } from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <div className="container">
         <Header modal={this.props.modal} showModal={(modalType) => this.props.onShowModal(modalType)} hideModal={this.props.onHideModal.bind(this)} />
         <Content />
       </div>
    );
  };
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
