import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import NoteForm from '../NoteForm/NoteForm';

function Modal() {
  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <NoteForm />
      </div>
      document.getElementById('modal')
    </div>,
    document.getElementById('modal')!
  );
}

export default Modal;
