import React, { useEffect, useState } from "react";
import { IModal } from "../../interfaces/interfaces";
import "./index.scss";

export default function RModal(props: IModal) {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <div className={`modal ${modalOpen ? 'totalCenter' : ''}`}>
            <button className="modal-closeBtn" onClick={closeModal}>X</button>
            <span className="modal--text">{props.name}</span>
        </div>
    )
}