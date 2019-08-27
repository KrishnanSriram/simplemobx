import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import AddUserPage from './adduser';

@inject('userStore')
@observer
class App extends Component {

  render() {
    const {userStore} = this.props;

    return (
      <div className="container">
        <h2>A simple MobX solution!</h2>
        <h6>You have {userStore.userCount} users left!</h6>
        <hr />
        <AddUserPage />
      </div>
    )
  }
}

export default App;