import React from 'react';
import Foto from '../assets/profile photo.jpeg';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-5 text-white">
      <div className="container mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-orange-400">Tentang Saya</h1>
          <p className="text-xl leading-relaxed">
            Mochamad Akhsan Hafizh Alghifary, seorang developer yang penuh semangat dengan kecintaan pada pembuatan aplikasi web. Saya senang belajar teknologi baru dan menerapkannya untuk memecahkan masalah dunia nyata.
            Saya merupakan seorang murid SMKN 4 Bandung yang memiliki tekad tinggi untuk mencari tau hal-hal baru di kehidupan saya, karena rasa ingin tau yang tinggi membantu saya menciptakan kehidupan yang tidak pernah bosan.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <img src={Foto} alt="Tentang Saya" className="rounded-full w-48 h-48 border-4 border-blue-400 object-cover"/>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Informasi Tambahan</h2>
          <p className="text-lg leading-relaxed">
            Saya senang berkolaborasi dengan orang lain dan selalu mencari tantangan baru. Mari kita bekerja sama dan menciptakan sesuatu yang luar biasa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
