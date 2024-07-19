import React from 'react';
import ProfileMain from '../assets/main bg.png';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 overflow-hidden">
      <div className="flex-1 flex flex-col transition-transform duration-300 translate-x-0 mt-1">
        <div className="flex-grow flex items-center justify-center p-9">
          <div className="flex items-center w-full max-w-5xl">
            <div className="text-start flex-1 ml-0 ">
              <h2 className="text-4xl font-bold text-white">Halo, Saya Mochamad Akhsan</h2>
              <p className="text-white mt-4 mr-5">
                Selamat datang di website portofolio milik saya
              </p>
              <a className="btn btn-outline mt-8 text-white" target='_blank' href="https://github.com/aksnhfiiz/Akhsan">GITHUB</a>
            </div>  
            <a href="/about"><img src={ProfileMain} alt="Profile" className="hover-zoom profile-size mr-10" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
