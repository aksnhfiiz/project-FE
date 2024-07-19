import React from 'react';
import { FaHtml5, FaCss3, FaJava, FaNodeJs, FaVuejs, FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skill: React.FC = () => {
  const softSkills = [
    { name: 'Public Speaking', description: 'Kemampuan berbicara di depan umum dengan percaya diri dan jelas.' },
    { name: 'Team Work', description: 'Kemampuan bekerja sama dalam tim untuk mencapai tujuan bersama.' },
    { name: 'Problem Solving', description: 'Kemampuan untuk menganalisis dan memecahkan masalah secara efektif.' },
    { name: 'Time Management', description: 'Kemampuan untuk mengatur pekerjaan agar waktu lebih efektif.' },
  ];

  const programmingSkills = [
    { name: <FaHtml5 />, description: 'Bahasa markup untuk membuat halaman web.' },
    { name: <FaCss3 />, description: 'Bahasa lembar gaya untuk merancang halaman web.' },
    { name: <IoLogoJavascript />, description: 'Bahasa pemrograman untuk pengembangan web.' },
    { name: <FaJava />, description: 'Bahasa pemrograman umum yang sering digunakan.' },
    { name: <FaNodeJs />, description: 'Runtime JavaScript untuk pemrograman server-side.' },
    { name: <SiMysql />, description: 'Sistem manajemen basis data relasional.' },
    { name: <FaVuejs />, description: 'Framework JavaScript untuk membangun antarmuka pengguna.' },
    { name: <FaBootstrap />, description: 'Framework CSS untuk desain web responsif.' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Keahlian Saya</h1>
      
      <div className="max-w-5xl w-full">

      <h2 className="text-2xl font-semibold mb-4 text-white">Soft Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-14 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="card w-full bg-white shadow-3xl rounded-3xl p-6 hover:shadow-xl hover-zoom transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-gray-600 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      
        <h2 className="text-2xl font-semibold mb-4 text-white">Bahasa Pemrograman</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programmingSkills.map((skill, index) => (
            <div key={index} className="card w-full bg-white shadow-3xl rounded-3xl p-6 hover:shadow-xl hover-zoom transition-shadow duration-300">
              <h3 className="text-3xl font-semibold text-gray-800">{skill.name}</h3>
              <p className="text-gray-600 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
