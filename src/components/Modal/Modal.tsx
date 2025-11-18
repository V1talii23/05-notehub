import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import NoteForm from '../NoteForm/NoteForm';

interface ModalProps {
  toggle: boolean;
  closeModal: () => void;
}

function Modal({ toggle, closeModal }: ModalProps) {
  return createPortal(
    toggle && (
      <div className={css.backdrop} role="dialog" aria-modal="true">
        <div className={css.modal}>
          <NoteForm closeModal={closeModal} />
        </div>
      </div>
    ),
    document.getElementById('modal')!
  );
}

export default Modal;
