import React from "react";
import { useEffect, useState } from "react";
import EditMmodule from "../Components/EditMmodule";
import useRefreshToken from "../hooks/useRefreshToken";
import { request } from "../hooks/axios-utils";

export default function Details() {
  const [datas, setDatas] = useState(null);
  const [viewModal, setViewModal] = useState(false);
  const [user, setUser] = useState("");

  const token = window.localStorage.getItem("jwt");
  const refresh = useRefreshToken();
  const getData = () => {
    request({ url: "/table/all" }).then(async (result) => {
      console.log(result.status);
      if (result.status === 400) {
        await refresh();
      }
      if (result.status === 200) setDatas(result.data);
    });
  };

  useEffect(() => {
    getData();
  }, [viewModal, token]);
  const handleModal = (user) => {
    setUser(user);
    setViewModal(true);
  };

  return (
    <div className="relative overflow-x-hidden h-full">
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
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap ">
                        {data.roles?.map((role, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 cursor-pointer text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                          >
                            {role}
                          </span>
                        ))}
                      </td>
                      <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        <button
                          type="button"
                          className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-slate-600"
                          onClick={() => handleModal(data)}
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
      {viewModal && <EditMmodule setViewModal={setViewModal} user={user} />}
    </div>
  );
}
