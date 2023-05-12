import React from 'react';
import { XCircleIcon } from "@heroicons/react/24/solid"; 

interface ModelProps{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  styling?: string;
}

const Modal = ({ isOpen, onClose, children, styling }: ModelProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className={`bg-white rounded-lg z-10 ${styling}`}>
      <XCircleIcon className='w-8 text-[#ad4040] cursor-pointer float-right relative left-2 bottom-2'  onClick={onClose}  />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;