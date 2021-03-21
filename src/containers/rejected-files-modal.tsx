import React, {Component} from 'react';
import {connect} from "react-redux";

/*  Utils   */
import {State, RejectedFile} from "../interfaces";
import {rejectedFilesSelector} from "../selectors";
import Modal from "../components/modal/modal";


type Props =  {
    rejectedFiles: RejectedFile[]
}

class RejectedFilesModal extends Component<Props> {
    render() {
        return null;
        if ( !this.props.rejectedFiles.length) {
            return null;
        }
        return (
            <Modal>
                <h1>kokoko</h1>
            </Modal>
        );
    }
}

const mapStateToProps = (state: State) => ({
    rejectedFiles: rejectedFilesSelector(state),
});

export default connect(mapStateToProps)(RejectedFilesModal);
