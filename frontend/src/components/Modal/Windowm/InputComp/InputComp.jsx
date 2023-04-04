import axios from "axios";
import React, { useState } from "react";

export const InputComp = () => {
  const url = 'http://localhost:3000/crm';
  const [data, setData] = useState([{
    name: "",
    company: "",
    email: "",
    age: "",
    phone: "",
  }]);

  const submit = (e) =>{
    e.preventDefault();
    axios.post(url, {
        name: data.name,
        company: data.company,
        email: data.email,
        address: data.address,
        age: data.age
    })
  }

  const inputSend = (e) =>{
    const newData ={...data}
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div>
      <form onSubmit={(e)=> submit(e)}>
        <input
          onChange={(e)=> inputSend(e)}
          type="name"
          id="name"
          value={data.name}
          class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name"
          required
        />
         <input
          onChange={(e)=> inputSend(e)}
          type="company"
          id="company"
          value={data.company}
          class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="company"
          required
        />
        <input
          onChange={(e)=> inputSend(e)}
          type="email"
          id="email"
          value={data.email}
          class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="email"
          required
        />
         <input
          onChange={(e)=> inputSend(e)}
          type="phone"
          id="phone"
          value={data.address}
          class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="address"
          required
        />
        <input
          onChange={(e)=> inputSend(e)}
          type="age"
          id="age"
          value={data.age}
          class="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="age"
          required
        />
        
        <button>Send</button>
      </form>
    </div>
  );
};
