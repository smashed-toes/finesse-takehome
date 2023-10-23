import React from "react";
import { useTable, Column } from "react-table";

interface RowData {
  Location: string;
  "Standard Shipping": string;
  "Express Shipping": string;
}

export default function ShippingInfo() {
  const data: RowData[] = [
    {
      Location: "US",
      "Standard Shipping": "5-9 business days",
      "Express Shipping": "2-5 business days*",
    },
    {
      Location: "UK",
      "Standard Shipping": "5-8 business days",
      "Express Shipping": "2-5 business days*",
    },
    {
      Location: "AU",
      "Standard Shipping": "5-8 business days",
      "Express Shipping": "Not Available",
    },
    {
      Location: "DE",
      "Standard Shipping": "5-8 business days",
      "Express Shipping": "Not Available",
    },
  ];

  // Define columns with headers
  const columns: Column<RowData>[] = React.useMemo(
    () => [
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Standard Shipping",
        accessor: "Standard Shipping",
      },
      {
        Header: "Express Shipping",
        accessor: "Express Shipping",
      },
    ],
    []
  );

  // Create a table instance using react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="flex flex-col w-full items-start justify-center">
      <div className="font-bold text-xl my-2">Shipping info</div>
      <table className="w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="border-y-2 border-black"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="p-2 border-x-2 border-black"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border border-black p-2"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="text-start">*Subject to availability</p>
      <p className="text-start">
        Express shipping is currently not available for P.O. Box addresses.
      </p>
      <p className="my-2 font-bold">Free Return & Exchange Shipping</p>
      <p className="text-start">
        Returns and exchanges are easy and are accepted within 45 days of order
        delivery 🙂 We also offer free shipping for returns and exchanges!
      </p>
    </div>
  );
}
