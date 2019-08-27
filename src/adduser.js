import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject('userStore')
@observer
class AddUserPage extends Component {
  onChangeUser = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onAddUser = (e) => {
    e.preventDefault();
    console.log('Submit button tapped!');
    const {username} = this.state;
    const {email} = this.state;
    this.props.userStore.addUser({username, email});
  }

  render() {
    return (
      <div className="col s12">
        <h6>Add a new User</h6>
        <form className="col s12" onSubmit={this.onAddUser}>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Username" id="user_name" type="text" className="validate" onChange={this.onChangeUser} />
              <label htmlFor="user_name">User Name</label>
            </div>
            <div className="input-field col s12">
              <input placeholder="Email ID" id="email_id" type="text" className="validate" onChange={this.onChangeEmail} />
              <label htmlFor="email_id">EMail ID</label>
            </div>
            <div className="input-field col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default AddUserPage;