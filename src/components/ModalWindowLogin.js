import React from 'react';


export default class ModalWindowLogin extends React.Component{


  _onSubmit(e){

    e.preventDefault();

     let data = {
       username: this.refs.username.value,
       password: this.refs.password.value
     };

     console.log('Отправлено :', data);

    this.props.onSubmitHandler(data);

  };

  render(){
    return(

      <form onSubmit={ this._onSubmit.bind(this) } >

         <div className="form-group">
            <label>Логин</label>
            <input type="text" ref="username" className="form-control" id="username" />
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <input type="password" ref="password" className="form-control" id="password" />
          </div>

          <div className="margin-bottom-20">
           Забыли пароль? <a href="#">Восстановить пароль</a>
          </div>

          <div className="margin-bottom-20">
            <button className="center-block btn btn-success" type="submit">Войти</button>
          </div>

      </form>

    );
  }
};
