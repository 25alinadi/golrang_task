import { ReactElement } from "react";
import ReactDOM from "react-dom";
import { Modal as ModalAntD } from "antd";

type ModalProps = {
  title: string;
  open: any;
  onCancel: any;
  children: ReactElement;
};

const Modal = ({ children, title, open, onCancel }: ModalProps) => {
  const modalContainer: HTMLElement = document.getElementById("modal-container")!;

  return ReactDOM.createPortal(
    <>
      <ModalAntD title={title} open={open} footer="" onCancel={onCancel}>
        {children}
      </ModalAntD>
    </>,
    modalContainer
  );
};

export default Modal;
