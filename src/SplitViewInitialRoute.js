import {PureComponent} from 'react';

export let setIsSplit = () => {};

class SplitViewInitialRoute extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSplit: false,
    };
    setIsSplit = this.setIsSplit;
  }

  setIsSplit = isSplit => {
    this.setState({isSplit});
  };

  render() {
    const {isSplit} = this.state;
    const {children} = this.props;
    if (isSplit) {
      return null;
    }
    return children;
  }
}

export default SplitViewInitialRoute;
