import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import {startFeedRunner, stopFeedRunner} from "../../../../actions/feed";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return{

  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onStartFeedRunner: () => dispatch(startFeedRunner()),
    onStopFeedRunner: () => dispatch(stopFeedRunner()),
  }
};

class FeedRunnerActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {onStartFeedRunner, onStopFeedRunner} = this.props;

    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/feed_icon_gray.png")}
            alt="User Avatar"
          />{" "}
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem onClick={onStartFeedRunner}>
            <i className="material-icons text-success">&#x25b6;</i> Start runner
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={onStopFeedRunner}>
            <i className="material-icons text-danger">&#9600;</i> Stop runner
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedRunnerActions);
