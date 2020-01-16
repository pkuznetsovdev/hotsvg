import React, {FC} from 'react';
import {connect} from "react-redux";

/*  Styles  */
import styles from "./modal.module.scss";


const Modal: React.FC = (props) => {

    return (
        <div className={styles.modalWrapper}>
            {props.children}
        </div>
    );
};

export default Modal;