import * as React from "react";
import Header from './Header/Header';
import Users from './Users/Users';

export default class App extends React.Component {
  render() {
      return (<main role="role">
        <Header />
        <Users />
      </main>);
  }
}
