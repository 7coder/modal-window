import React from 'react';

export default class ModalWindowRegistration extends React.Component{


  _onChange(e){
    let gender = e.target.value;
    this.props.onChangeGender(gender)
  };

  _onSubmit(e){

    e.preventDefault();

     let data = {
       firstname: this.refs.firstname.value,
       lastname: this.refs.lastname.value,
       username: this.refs.username.value,
       age: this.refs.age.value,
       gender: this.props.user.gender
     };

    //console.log('Отправлено :', data);

    //this.props.onSubmitHandler(data);
    this.props.onSendData(data);

  };


  render(){
    
    return(

      <form onSubmit={ this._onSubmit.bind(this) } >

         <div className="form-group">
            <label>Имя</label>
            <input type="text" ref="firstname" className="form-control" id="firstname" />
          </div>

          <div className="form-group">
            <label>Фамилия</label>
            <input type="text" ref="lastname" className="form-control" id="lastname" />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" ref="username" className="form-control" id="username"/>
          </div>

          <div className="form-group">
            <label>Возраст</label>
            <input type="text" ref="age" className="form-control" id="age"/>
          </div>

          <div className="form-group">
            <label>Пол</label>
            <select value={this.props.user.gender} onChange={ this._onChange.bind(this) } className="form-control">
              <option value="none">не указывать</option>
              <option value="male">M</option>
              <option value="female">Ж</option>
            </select>
          </div>

          <div className="margin-bottom-20">
            <button className="center-block btn btn-success" type="submit">Зарегистрироваться</button>
          </div>

      </form>

    );
  }
};
