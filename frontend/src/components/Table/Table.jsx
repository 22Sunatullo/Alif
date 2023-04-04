import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";


const src = "http://localhost:3000/crm";

export const Table = () => {
  const [articles, setArticles] = useState([]);
  const [countries, setcountries] = useState(false);
  const [correntPage, setCurrentPage] = useState(1);
  const [countePage] = useState(10);

  useEffect(() => {
    axios.get(src).then((value) => {
      setArticles(value.data);
    });
  });

  const lastContryPAge = correntPage * countePage;
  const firstCont = lastPage - countePage;
  const correntCont = articles.slice(firstCont, lastContryPAge)

  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light border black">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Имя и фамилия
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Компания
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Электронная почта
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Адрес проживание
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Возраст
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {articles.map((value) => {
                      return (
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {value.name}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {value.company}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {value.email}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {value.address}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {value.age}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <Pagination totalP ={articles.length} countePage ={countePage}/>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
