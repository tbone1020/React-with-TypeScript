import * as React from "react";

export interface IState {}
export interface IProps {}

export default class Header extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
      return (<ul className="navigation">
        <li><a href="portfolio/">Our Work</a> </li>
        <li><a href="about/">About Us</a></li>
        <li><a href="contact">Contact Us</a></li>
      </ul>);
  }
}
