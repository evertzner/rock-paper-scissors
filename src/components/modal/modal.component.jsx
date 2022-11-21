import React from "react";
import ReactDom from "react-dom";
import { ReactComponent as Close } from "../../assets/icon-close.svg";

import "./modal.styles.scss";

const Modal = ({ open, children, onClose }) => {
	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className="overlay" />
			<div className="modal">
				<div className="modal__title">RULES</div>
				<div onClick={onClose} className="modal__close">
					<Close />
				</div>
				<figure className="modal__content">{children}</figure>
			</div>
		</>,
		document.getElementById("portal")
	);
};

export default Modal;
