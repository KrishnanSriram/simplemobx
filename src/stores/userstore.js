import { observable, action, computed } from "mobx";

class UserStore {
  @observable users = [];

  @action addUser = (user) => {
    console.log('A new user is added');
    console.log(user);
    this.users.push(user);
  }

  @computed get userCount() {
    return this.users.length;
  }
}

const store = new UserStore();
export default store;