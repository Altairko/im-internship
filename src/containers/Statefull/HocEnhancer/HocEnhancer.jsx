import React from "react";

import withLoader from "../../../components/decorators/withLoader/withLoader";
import DataDump from "../../../components/stateless/DataDump/DataDump";

const WithLoaderDataDump = withLoader(DataDump);

class HocEnhancer extends React.PureComponent {
  state = {
    loading: false,
    data: {}
  };

  constructor(props) {
    super(props);

    this.onDataLoadClick = this.onDataLoadClick.bind(this);
  }

  onDataLoadClick() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
        data: {
          allUsers: [
            {
              id: "cjpdj8r65000l5010uihxi5h6",
              firstName: "Lorenza",
              lastName: "Breitenberg",
              email: "Sammy.Stamm80@hotmail.com",
              avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/michaelabehsera/128.jpg",
              __typename: "User"
            },
            {
              id: "cjpdj8r65000m5010zmfmbv4r",
              firstName: "Noel",
              lastName: "Nolan",
              email: "Nickolas_Barrows@hotmail.com",
              avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bboy1895/128.jpg",
              __typename: "User"
            }
          ]
        }
      });
    }, 4000);
  }

  render() {
    return (
      <div>
        <h3 key="header" className="left-space-big">
          HOC Enhancer
        </h3>
        <button key="data-load" className="left-space-big" onClick={this.onDataLoadClick}>
          Загрузить данные
        </button>
        <WithLoaderDataDump
          key="with-loader-data-dump"
          data={this.state.data}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default HocEnhancer;
