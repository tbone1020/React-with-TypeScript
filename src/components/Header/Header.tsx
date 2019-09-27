import * as React from "react";

interface IState {
  logo: string
}
interface IProps {}

export default class Header extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      logo: 'React with TypeScript'
    }
  }

  componentDidMount(): void {
    console.log('Component did mount');
  }
  
  render() {
    return (<header>
      <h1>{this.state.logo}</h1>
    </header>);
  }
}