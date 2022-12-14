/* eslint-disable @next/next/no-img-element */

import moment from "moment/moment";
import { useEffect, useState } from "react";

import Introduction from "../components/Introduction";
import Layout from "../components/Layout";

export default function Home() {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(100);
  const [arrayData, setArratData] = useState([]);
  const [arrayResponse, setArrayResponse] = useState([]);
  const [resCrm, setResCrm] = useState([]);

  const modulusData = () => {
    var array = [];

    for (let index = low; index <= high; index++) {
      if (low > high) {
        array.push({ data: "Invalid Value", value: index });
        return setArratData(array);
      }

      var data = index + ", ";

      if (index % 3 == 0) {
        data = "Apa, ";
      }

      if (index % 5 == 0) {
        data = "Bole, ";
      }

      if (index % 5 == 0 && index % 3 == 0) {
        data = "ApaBole, ";
      }
      array.push({ data, value: index });
    }

    setArratData(array);
  };

  const weatheApi = async () => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=-6.1753942&lon=106.827183&appid=8806895becfc39eb7e03fd5807cf73a2"
    );

    const data = await res.json();

    setArrayResponse(data.list);
  };

  const getCrmApi = async () => {
    const res = await fetch("/api/getData");

    const { data } = await res.json();

    setResCrm(data);
  };

  useEffect(() => {
    modulusData();
    weatheApi();
    getCrmApi();
  }, []);

  return (
    <Layout title='Home'>
      <div className='bg-gradient-to-b from-gray-800 to-gray-700'>
        <Introduction isShowing={true} />

        <div className='mt-20 pb-20 text-center'>
          <h1 className='text-center font-bold text-white text-4xl'>Test 1</h1>
          <h4 className='text-center text-white'>
            1. Setiap angka yang bisa dibagi dengan 3, jangan print angka nya,
            tapi print "Apa". <br /> 2. Kalau bisa dibagi dengan 5, print
            "Bole", <br /> 3. Kalau bisa dibagi oleh 3 dan 5, print "ApaBole".{" "}
            <br /> 4. Menggunakan model pagination dengan limit 10 Berikut
            contoh hasil program "ApaBole" untuk angka 1 sampai 30 (* Yang kita
            harapkan dari kandidat adalah, 1 - 100):
          </h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              modulusData();
            }}>
            <div className='text-center mt-5 '>
              <div className='text-center justify-end'>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium text-white text-bold'>
                  Angka Ke 1
                </label>
                <div className='relative mt-1 rounded-md shadow-sm'>
                  <input
                    type='text'
                    name='price'
                    id='price'
                    className='  rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    placeholder='0.00'
                    value={low}
                    onChange={(e) => {
                      setLow(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className='justify-start'>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium text-white text-bold'>
                  Angka ke 2
                </label>
                <div className='relative mt-1 rounded-md shadow-sm'>
                  <input
                    type='text'
                    name='price'
                    id='price'
                    className='  rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    placeholder='0.00'
                    value={high}
                    onChange={(e) => {
                      setHigh(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <button className='px-2 py-1 bg-blue-500 rounded mt-2 text-white font-semibold mb-5'>
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div>
            <h1 className='text-blue-500 font-bold text-2xl mb-5'>Hasil</h1>
            <h1 className='text-white'>
              {arrayData.map((val, index) => {
                if (val.value % 10 == 0) {
                  return (
                    <>
                      {val.data} <br key={index} />
                    </>
                  );
                } else {
                  return val.data;
                }
              })}
            </h1>
          </div>
        </div>
        <div className='mt-20 pb-20 text-center'>
          <h1 className='text-center font-bold text-white text-4xl mb-5'>
            Test 2
          </h1>
          <h4 className='text-center text-white'>
            1. Silahkan gunakan API yang disediakan http://openweathermap.org{" "}
            <br /> 2. Tolong tampilkan output berupa ramalan cuaca kota Jakarta
            per 3 jam dengan maksimal baris 5. <br /> 3. Soal ini tidak
            membutuhkan akun berbayar
          </h4>
          <div className='text-center mt-10'>
            <div className='max-w-2xl mx-auto'>
              <div className='flex flex-col'>
                <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                  <div className='inline-block min-w-full align-middle'>
                    <div className='overflow-hidden '>
                      <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700'>
                        <thead className='bg-gray-100 dark:bg-gray-700'>
                          <tr>
                            <th
                              scope='col'
                              className='py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400'>
                              Time
                            </th>
                            <th
                              scope='col'
                              className='py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400'>
                              Temp
                            </th>
                            <th
                              scope='col'
                              className='py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400'>
                              Weather
                            </th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                          {arrayResponse.map((val, index) => {
                            if (index < 5)
                              return (
                                <tr
                                  key={index}
                                  className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                                  <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    {moment
                                      .unix(val.dt)
                                      .format("ddd, DD MM YYYY - hh:mm")}
                                  </td>
                                  <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white'>
                                    {val.main.temp}
                                  </td>
                                  <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    {val.weather[0].main}
                                  </td>
                                </tr>
                              );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 pb-20 text-center'>
          <h1 className='text-center font-bold text-white text-4xl mb-5'>
            Test 3
          </h1>
          <h4 className='text-center text-white'>
            Terdapat 2 table crm_tasks dan crm_labels, tampilkan semua data
            tasks dengan informasi detail dari data label, gunakan sekali query
            untuk mengambil semua data dan kemudian silahkan manipulasi data
            tersebut agar tampil seperti dibawah ini :
          </h4>
          <div className='text-center mt-10'>
            <h1 className='text-blue-500 font-bold text-2xl mb-5'>Hasil</h1>
            {/* <h1 className='text-white font-bold text-2xl mb-5'>{resCrm}</h1> */}
            <div className='max-w-2xl mx-auto'>
              <div className='flex flex-col'>
                <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                  <div className='inline-block min-w-full align-middle'>
                    <div className='overflow-hidden '>
                      <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700'>
                        <thead className='bg-gray-100 dark:bg-gray-700'>
                          <tr>
                            <th
                              scope='col'
                              className='py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400'>
                              Title
                            </th>
                            <th
                              scope='col'
                              className='py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400'>
                              Description
                            </th>
                            <th
                              scope='col'
                              className='py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400'>
                              Labels
                            </th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                          {resCrm.map((val, index) => (
                            <tr
                              key={index}
                              className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                {val.title}
                              </td>
                              <td className='py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white'>
                                {val.description}
                              </td>
                              <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                {val.labels.map((data) => data.title + ", ")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
