import React from 'react';
import TK from '../assets/tkalmuhajirin.jpg';
import SD from '../assets/sdnpelita.jpg';
import SMP from '../assets/smpn28.jpg';
import SMK from '../assets/smkn4.jpg';

const Pendidikan: React.FC = () => {
  return (
    <div className='flex flex-col h-min-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 p-8'>
      <h1 className="text-4xl text-center font-bold mb-6 mt-4 text-orange-400">Pendidikan</h1>
    <div className="w-full mx-auto mt-5 text-white font-medium px-4 mb-4">
      <div className="collapse collapse-arrow border border-base-300 mb-4 w-full bg-gray-800">
        <input type="radio" name="my-accordion-4" defaultChecked className="mr-2 mt-2" />
        <div className="collapse-title text-xl font-medium">Taman Kanak-Kanak (2011-2013)</div>
        <div className="collapse-content flex items-center p-4">
          <img
            src={TK}
            alt="TK Al-Muhajirin"
            className="hover-zoom rounded-box object-cover w-36 h-36 mr-4"
          />
          <p>
            TK Al-Muhajirin adalah taman kanak-kanak yang terletak di Jalan Suryalaya Baru. Saya menempuh pendidikan di sini dari tahun 2011 hingga 2013.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border border-base-300 mb-4 w-full bg-gray-700">
        <input type="radio" name="my-accordion-4" className="mr-2 mt-2" />
        <div className="collapse-title text-xl font-medium">Sekolah Dasar (2013-2019)</div>
        <div className="collapse-content flex items-center p-4">
          <img
            src={SD}
            alt="SDN 257 Pelita"
            className="hover-zoom rounded-box object-cover w-36 h-36 mr-4"
          />
          <p>
            SDN 257 Pelita adalah sekolah dasar yang terletak di Jalan Rajamantri Kidul. Saya menempuh pendidikan di sini dari tahun 2013 hingga 2019.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border border-base-300 mb-4 w-full bg-gray-800">
        <input type="radio" name="my-accordion-4" className="mr-2 mt-2" />
        <div className="collapse-title text-xl font-medium">Sekolah Menengah Pertama (2019-2022)</div>
        <div className="collapse-content flex items-center p-4">
        <img
            src={SMP}
            alt="SMPN 28 Bandung"
            className="hover-zoom rounded-box object-cover w-36 h-36 mr-4"
          />
          <p>
            Sekolah Menengah Pertama yang saya tempuh dari tahun 2019 hingga 2022 adalah SMPN 28 Bandung. Di sini saya belajar banyak hal dan mengembangkan keterampilan akademik maupun non-akademik.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border border-base-300 mb-4 w-full bg-gray-700">
        <input type="radio" name="my-accordion-4" className="mr-2 mt-2" />
        <div className="collapse-title text-xl font-medium">Sekolah Menengah Kejuruan (2022-2025)</div>
        <div className="collapse-content flex items-center p-4">
        <img
            src={SMK}
            alt="SMKN 4 Bandung"
            className="hover-zoom rounded-box object-cover w-36 h-36 mr-4"
          />
          <p>
            Sekolah Menengah Kejuruan yang saya tempuh dari tahun 2022 hingga 2025 adalah SMKN 4 Bandung. Di sekolah ini saya mempersiapkan diri dan melatih skill saya di bidang IT agar saya dapat melanjutkan pendidikan atau bisa langsung bekerja.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pendidikan;
