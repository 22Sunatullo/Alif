import React from "react";

export const TbodyIn = ({ articles, loading }) => {
  if (loading) {
    return <h3>loadind...</h3>;
  }
  return (
    <tbody>
      {articles.map((value, i) => {
        return (
          <tr class="border-b dark:border-neutral-500">
            <td class="whitespace-nowrap px-6 py-4 font-medium">
              {value.name}
            </td>
            <td class="whitespace-nowrap px-6 py-4">{value.company}</td>
            <td class="whitespace-nowrap px-6 py-4">{value.email}</td>
            <td class="whitespace-nowrap px-6 py-4">{value.address}</td>
            <td class="whitespace-nowrap px-6 py-4">{value.age}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
