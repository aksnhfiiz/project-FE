import React from 'react';

const Pengalaman: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-gray-900"
    >
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-80 p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl text-center font-bold text-orange-400 mb-4">Pengalaman Saya</h1>
        <div className="mb-6 mt-14">
          <h2 className="text-2xl font-bold text-orange-400 mb-2">Anggota OSIS</h2>
          <p className="text-white-600">
            Sebagai anggota Organisasi Siswa Intra Sekolah (OSIS), saya terlibat dalam berbagai kegiatan organisasi yang mengasah kemampuan kepemimpinan dan kerjasama tim.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-2">Ekskul Orbit</h2>
          <p className="text-white-600">
            Bergabung dalam ekskul Orbit telah memperluas pengetahuan dan keterampilan saya dalam pemrograman. Saya belajar mengembangkan aplikasi dan proyek berbasis teknologi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pengalaman;
