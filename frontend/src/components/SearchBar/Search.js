import React, { useState } from 'react'
import './search.css'

function Search({ placeholder, data }) {
  const newData = Object.values(data)
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState([])


  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord)
    const newFilter = newData.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter);
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('');
  }
  // value={wordEntered}
  //onClick={clearInput} 
  // }

  return (
    <>
      <div className='search'>
        <div className='searchInputs'>
          <input type='text' value={wordEntered} placeholder='Search' onChange={handleFilter}></input>
          {filteredData.length === 0 && wordEntered.length === 0 &&
            <button id='searchbar-icon'><i class="fa-solid fa-magnifying-glass"></i></button>
          }
          {filteredData.length > 0 &&
            <button onClick={clearInput} id='searchbar-icon'><i class="fa-solid fa-xmark"></i></button>
          }
          {wordEntered.length > 0 && filteredData.length === 0 &&
            <button onClick={clearInput} id='searchbar-icon'><i class="fa-solid fa-xmark"></i></button>
          }
          
        </div>
        {wordEntered.length > 0 && filteredData.length === 0 &&
          <div className='dataResult'>
            <a className='dataItem' target='blank'>
              <p> No Results </p>
            </a>
          </div>
        }

        {filteredData.length !== 0 &&
          <div className='dataResult'>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className='dataItem' href={`/business/${value.id}`} target='blank'>
                  <p> {value.title}</p>
                </a>
              )
            })}
          </div>
        }

      </div>
      
    </>
  )

}

export default Search