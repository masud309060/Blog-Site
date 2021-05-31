import React from "react";
import { Button } from "react-bootstrap";
import "./ModalForm.css";

const ModalForm = ({ showModal, setShowModal }) => {
	return (
		<div className="modal_bg">
			<div className="modal_content">
				<strong className="close" onClick={!showModal}>+</strong>
				<form className="modal_form" action="">
					<input type="text" placeholder="Title"/>
					<textarea name="body" rows="5" placeholder="Body"></textarea>
                    <Button className="ml-auto">Submit</Button>
				</form>
			</div>
		</div>
	);
};

export default ModalForm;
