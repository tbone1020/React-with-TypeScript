import * as React from "react";
import Navigation from '../../shared/components/Navigation/Navigation';

export interface IState {
  logo: string;
}
export interface IProps {}

export default class Header extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      logo: "React-TypeScript"
    }
  }

  render() {
      return (<header>
        <div className="container">
          <h1 className='header__logo'>{this.state.logo}</h1>
          <Navigation />
        </div>
      </header>);
  }
}
