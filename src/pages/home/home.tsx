import React, { useEffect, useState } from 'react';
import List from "../../components/list/list";
import "./home.css"

export type ListDataType = {
 id?: number;
 title?: string;
 name?: string;
 description?: string;
 link?: string;
}

const Home = () => {

  const [arrayLength, setArrayLength] = useState<number>(100)
  const [pattern, setPattern] = useState<string>('1')
  const [dataArray, setDataArray] = useState<ListDataType[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  useEffect(() => {
    createArray()
  },[arrayLength, pattern]);

  const createArray = (): void => {
    let tmpData: ListDataType[] = []
    let tmpArray = Array.from(Array(arrayLength).keys());
    tmpArray.forEach((item) => {
      tmpData.push(
        {
          ...pattern === '1' && {
            id:  item + 1,
            title: `Title ${item +1}`
          },
          ...pattern === '2' && {
            name: `Name ${item +1}`,
            description: `Description ${item +1}`,
          },
          ...pattern === '2' && Math.floor(Math.random() * 100) % 2 === 0 && {link: 'google.com'}
        }
      )
    })
    setDataArray(tmpData)
  }

  const checkSelectedItems = (i:number): void => {
    let tmpArray = [...selectedItems]
    tmpArray.includes(i)
      ? tmpArray.splice(tmpArray.indexOf(i), 1)
      : tmpArray.push(i)
    setSelectedItems(tmpArray.sort((a,b) => a - b))
  }

  const handleLengthInput = (e: number): void => {
    setArrayLength(e < 1 ? 1 : e)
    setSelectedItems([])
  }

  const handlePatternInput = (e: string): void => {
    setPattern(e)
    setSelectedItems([])
  }

  return (
    <section>
      <header>
        <div className="logo">
          <span className="logo-main">
            Array
          </span>
          <span className="logo-secondary">
            selector
          </span>
        </div>
        <h1 className="mb-5 pt-10">
          Selected items: { selectedItems.length === 0
            ? ' none'
            : ` ${ selectedItems.toString().split(',').join(', ') }` }
        </h1>
        <div className="flex">
          <label className="block w-50 pointer">
              Data array length ( 1-500 ):
            <input
              className="ml-5"
              type="number"
              min="1"
              max="500"
              value={arrayLength}
              onChange={ (e) => handleLengthInput(parseInt(e.target.value)) }

            />
          </label>
          <div className="block w-50">
            <label className="pointer">
              Data array 1
              <input
                className="ml-5"
                type="radio"
                name={pattern}
                checked={pattern === '1'}
                value={'1'}
                onChange={ (e) => handlePatternInput(e.target.value)  }
              />
            </label>
            <label className="ml-10 pointer" >
              Data array 2
              <input
                className="ml-5"
                type="radio"
                name={pattern}
                checked={pattern === '2'}
                value={'2'}
                onChange={ (e) => handlePatternInput(e.target.value) }
              />
            </label>
          </div>
        </div>

      </header>
      <div className="table-container w-50 mx-auto mt-10">
        <List
          dataArray={dataArray}
          selectedItems={selectedItems}
          checkSelectedItems={(e) => checkSelectedItems(e)}
        />
      </div>
    </section>
  )
}

export default Home
