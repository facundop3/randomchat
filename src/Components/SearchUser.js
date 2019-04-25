import React from 'react'
import SweetInput from './SweetInput'

const SearchUser = props =>{

  const {handleChange, inputValue, bgColor} = props

  return  <SweetInput
            hotAction
            bgColor={bgColor}
            hotValue={inputValue}
            handleChange={handleChange}
            placeholder="Search user"
            faIcon="search"
            iconColor="#66757f"
          />

}

export default SearchUser