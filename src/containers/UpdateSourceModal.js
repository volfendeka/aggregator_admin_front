import React, {Component} from "react";
import {Button, Modal} from "shards-react";
import SourceForm from "./SourceForm";



class UpdateSourceModal extends Component {

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };



  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.showModal}>
          Launch Sample Modal
        </button>

        <Modal open={this.state.show}>
          <div className="modal-dialog modal-dialog-centered" role="document">

          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit source</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <SourceForm/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Nope</button>
              <button type="button" className="btn btn-primary">Yep</button>
            </div>
          </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default UpdateSourceModal;
