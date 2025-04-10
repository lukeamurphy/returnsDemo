// components/Modal.js
import React from "react";

const Modal = ({ title, content, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-black">&times;</button>
      </div>
      <div>{content}</div>
    </div>
  </div>
);

export default Modal;