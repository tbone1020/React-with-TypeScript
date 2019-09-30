import * as React from "react";
import User from './User';

export interface IState {
  userElementList: Object[];
}
export interface IProps {}

export default class Users extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userElementList: []
    }
  }

  async componentDidMount(): Promise<any> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const results = await response.json();
    const elementsList = this.createUserElements(results);
    this.addUsersElementToState(elementsList);
  }

  createUserElements(userList: any[]): any {
    const elementList = userList.map((user) => <User key={`${user.id}-${user.name}`} userInfo={user} />);
    console.log(elementList);
    return elementList;
  }

  addUsersElementToState(userList: Object[]): void {
    this.setState({
      userElementList: userList,
    })
  }

  render() {
      return (<article className="users">
        <div className="container">
        {this.state.userElementList}
        </div>
      </article>);
  }
}
