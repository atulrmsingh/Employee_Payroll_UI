import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setIsAdding,setQuery}) => {
    return (
        <div>
             <table>
          <tbody>
            <tr>
              <th>
                <h5>Employee Details</h5>
              </th>

              <th>
                <input
                onChange={(e) => setQuery(e.target.value)}
                    
                  type="text"
                  className="search-hover"
                  name=""
                  placeholder="search here..."
                />
              </th>
              <th>
                <SearchIcon />
              </th>

              <th>
                <button
                  onClick={() => setIsAdding(true)}
                  className="square-button"
                >
                  + Add User
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
    )
}

export default SearchBar