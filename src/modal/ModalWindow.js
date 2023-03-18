import React from 'react';
import Modal from 'react-modal';
import ModalApi from './ModalApi';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal');

export default function AppModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function afterOpenModal() {
    subtitle.style.color = '#fff';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset"
  }

  return (
    <div className='wrapper'>
      <button type="button" onClick={openModal} className="btn checkout_btn">Оформить заказ</button>
      <Modal
      overlayClassName="myOverlayClass"
        shouldCloseOnOverlayClick={false}
        className = "modal_centered"
        id="account_form"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalApi/>
        <button className="close_btn btn" onClick={closeModal}>Отмена</button>
      </Modal>
    </div>
  );
}