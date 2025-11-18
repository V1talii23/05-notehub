import css from './Modal.module.css';
import { createPortal } from 'react-dom';

interface ModalProps {
  toggle: boolean;
  children: React.ReactNode;
}

function Modal({ toggle, children }: ModalProps) {
  return createPortal(
    toggle && (
      <div className={css.backdrop} role="dialog" aria-modal="true">
        <div className={css.modal}>{children}</div>
      </div>
    ),
    document.getElementById('modal')!
  );
}

export default Modal;
