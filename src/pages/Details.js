import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Details() {
  const [datas, setDatas] = useState(null);
  const token = window.localStorage.getItem('jwt')
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_LINK}/table/all`, {
        headers: {
          "token": `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDatas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  datas?.map((data) => {
    console.log(data);
  });

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b font-bold">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm  text-gray-900 px-6 py-4 text-left"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-gray-900 px-6 py-4 text-left"
                    >
                      E-mail
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-gray-900 px-6 py-4 text-left"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {datas?.map((data, index) => (
                    <tr className="border-b" key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.username}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.email}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.roles?.map((role) => (
                          <span>{`${role}/`}</span>
                        ))}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        <button
                          type="button"
                          class="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-slate-600"
                        >
                          Edit
                        </button>
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
  );
}
