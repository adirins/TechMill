import React, { FC } from 'react';
import { ListDataType } from "../../pages/home/home";
import "./list.css"

type Props = {
  dataArray: ListDataType[]
  selectedItems: number[]
  checkSelectedItems: (arg0: number) => void
}

const List:FC<Props> = ({dataArray, selectedItems, checkSelectedItems}) => {

  return (
    <table>
      <thead className="table-header">
      <tr>
        <th style={{width: "150px"}}/>
        <th>Info</th>
      </tr>
      </thead>
      <tbody>
      { dataArray.map((item: ListDataType, i:number) => {
        return (
          <tr
            key={i}
            className="table-row"
          >
            <td>
              <input
                className="pointer"
                type="checkbox"
                checked={selectedItems.includes(i)}
                onChange={() => {
                  checkSelectedItems(i)
                }}
              />
            </td>
            <td>
              {Object.entries(item).map(([key, value]: [string, string | number], index: number) => {
                return (
                  <div
                    key={index}
                  >
                    { key !== 'id' &&`${value}` }
                  </div>
                )
              })}
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default List
