
import React, { useContext } from 'react'
import { Search } from '@material-ui/icons'
import { DataContext } from '../../../Context/AppContext'
import { useHistory } from 'react-router-dom'

const KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_SEARCH;

const NavbarSearch = () => {

  const { searchTerm, setSearchTerm, setVideoData } = useContext(DataContext);

  const history = useHistory()

  function processQueryParams (params) {
    let result = "?";
    for (let i = 0; i < params.length; i++) {
        let param = params[i],
            connector = i === 0 ? '' : '&';
        result += `${connector}${param.field}=${param.value}`;
    }
    return result;
  };

  const handleSearchInput = ( event ) => {
    if ( event.key === 'Enter' ) {
      event.preventDefault();
      let { value } = event.target;
      setSearchTerm(value);

      let url = new URL(YOUTUBE_URL),
          params = [
            { field: "q", value: value },
            { field: "part", value: "id" },
            { field: "part", value: "snippet" },
            { field: "maxResults", value: 25 },
            { field: "type", value: "video" },
            { field: "key", value: KEY },
          ];
      url.search = processQueryParams(params);

      fetch(url, {
        method: 'GET'
      }).then(function (response) {
        // The API call was successful!
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      }).then(function (dataResponse) {
        // This is the JSON from our response
        let resData = [];
        
        if ( dataResponse.items.length > 0 ) {
          resData = dataResponse.items.filter( (video) => video.id.videoId );
        }
        setVideoData(resData);
        history.push(`/`);
      }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
      });
    }
  }

  return (
    <>
      <Search
          fontSize="small"
      />
      <input
          type="text"
          placeholder="Search..."
          defaultValue={searchTerm}
          onKeyPress={handleSearchInput}
      />
    </>
  )
}

export default NavbarSearch;
