import React from 'react';
import { connect } from 'react-redux';
import TestModal from './testModal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const modalLookup = {
  TestModal,
  RegisterModal,
  LoginModal
};

/**
 * Modal manager is connected to the store, is mapping the state and if there is a modal
 * then it will call const ModalManager function, in that function you see whats going on!
 * we add this component to App.js file, because modals are like app features and can called
 * from every where, so we need it there in layout app file
 */
const mapStateToProps = (state, ownProps) => {
  return {
    currentModal: state.modals
  };
};
const ModalManager = ({ currentModal }) => {
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default connect(mapStateToProps)(ModalManager);
