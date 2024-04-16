"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function MyApiCall() {
  const [Datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setDatas(response.data);
        console.log(Datas);
      })
      .catch(function (error) {           
        console.log(error);
      });
  });
  console.log(Datas);

  return (
    <>
      <main className="apidatas">
        <div className="apititle">
          <h1 className="apihead">API Data</h1>
          <table className="tabledata">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email Id</th>
                <th>City</th>
                <th>Zip Code</th>
                <th>Suite</th>
              </tr>
            </thead>

            <tbody>
              {Datas.map((a) => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td> {a.name}</td>
                  <td>{a.username}</td>
                  <td>{a.email}</td>
                  <td>{a.address.city}</td>
                  <td>{a.address.zipcode}</td>
                  <td>{a.address.suite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
