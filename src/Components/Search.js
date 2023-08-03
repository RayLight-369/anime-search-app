import "../Utilities/Css/Search.css"
import { useState } from "react"

export default function Search({ handleSearchRequest }) {
  let [searchValue, setSearchValue] = useState("");

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  }

  const handleButtonClick = () => {

    if (searchValue.trim().length > 0) {
      handleSearchRequest(searchValue); 
    }

  }

  return (
    <div id="search-section">
      <input type="text" placeholder="Search" value={ searchValue } onChange={ handleInputChange } onKeyDown={handleKeyPress} />
      <input type="button" value={ "Search" } onClick={ handleButtonClick } />
    </div>
  )
}