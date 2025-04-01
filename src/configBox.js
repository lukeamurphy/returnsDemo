import React, { useState } from "react";

const PopupModal = ({ title, content, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center px-4 py-3 border-b bg-blue-50 rounded-t-xl">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">
          ✖
        </button>
      </div>
      <div className="p-4">{content}</div>
    </div>
  </div>
);

export default function ConfigBox({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full text-left text-xl font-semibold px-4 py-3 border-b rounded-t-xl bg-blue-50 hover:bg-blue-100"
        >
          {title}
        </button>
      </div>

      {isOpen && (
        <PopupModal title={title} content={content} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}