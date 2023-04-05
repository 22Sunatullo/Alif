import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";
import { TbodyIn } from "./TbodyIn";

const src = "http://localhost:3000/crm";

export const Table = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage] = useState(20);

  useEffect(() => {
    const getData = async () => {
      setLoadind(true);
      const res = axios.get(src).then((value) => {
        setArticles(value.data);
        setLoadind(false);
      });
    };
    getData();
  }, []);

  const lastArticlesIndex =currentPage * firstPage;
  const firstArticlesIndex = lastArticlesIndex - firstPage;
  const correntArticles = articles.slice(firstArticlesIndex, lastArticlesIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
               <TbodyIn articles={correntArticles} loading={loading} />
               <Pagination firstPage ={firstPage} totalP={articles.length} paginate = {paginate}/>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
