import { Icon } from "../";
import ModalStyled from "./styles";
import ReactDOM from "react-dom";

function Modal({ title, content, hideCloseIcon = false, show, setShow }) {
  return ReactDOM.createPortal(
    <>
      {show && (
        <ModalStyled>
          <section>
            <div className="header">
              <h2>{title}</h2>
              {!hideCloseIcon && (
                <Icon
                  className="modal-icon"
                  icon="close"
                  onClick={() => setShow(false)}
                />
              )}
            </div>
            <div className="content">{content}</div>
          </section>
        </ModalStyled>
      )}
    </>, document.getElementById("modal")
  );
}

export default Modal;
