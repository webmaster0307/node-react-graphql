import React from 'react';
import './Modal.css'

const modal = props => (
    <div className="modal">
        <header className="modal__header">
            <h1>{props.title}</h1>
        </header>
        <section className="modal__content">
            {props.children}
        </section>
        <selection className="modal__actions">
            {props.canCancel && <button className="btn" onClick={props.onCancel}>Cancel</button>}
            {props.canConfirm && <button className="btn" onClick={props.onConfirm}>Confirm </button>}
        </selection>
    </div>
);

export default modal;