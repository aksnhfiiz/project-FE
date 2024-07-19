import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 p-8">
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-80 p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl text-center font-bold text-orange-400 mb-4">Contact:</h1>
        <div className="flex flex-col md:flex-row items-center md:justify-around mt-10">

        <div className="flex items-center mb-6 md:mb-0">
            <FaInstagram className="text-white text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-white">Instagram</h2>
              <p className="text-white">@aksnhfiiz</p>
            </div>
          </div>

          <div className="flex items-center mb-6 md:mb-0 ml-9">
            <FaEnvelope className="text-white text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-white">Email</h2>
              <p className="text-white">akhsanhafizh1@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center mb-6 md:mb-0">
            <FaPhone className="text-white text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-white">Telepon</h2>
              <p className="text-white">+62821-1625-7766</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
