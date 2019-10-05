import * as React from "react";

interface IState {}
interface IProps {
  userInfo: any;
}

export default class User extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {name, username, email, phone, address, website } = this.props.userInfo;
    return (<div className="user">
      <h2 className="user__name">{name}</h2>
      <address className="user__address">
        {address.street} {address.suite}
        {address.city}{address.zipcode}
      </address>
    </div>);
  }
}
