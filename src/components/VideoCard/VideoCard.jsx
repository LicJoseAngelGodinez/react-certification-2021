import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../Context/AppContext';

const VideoCard = ({ imgUrl, title, description, id}) => {

  const history = useHistory();
  const { selectedTheme } = useContext(DataContext);

  const navigate = (id) => {
      history.push(`/${id}`);
  }

  return (
    <div className={`videocard__wrapper ${selectedTheme}`} onClick={() => navigate(id)}>
      <img src={imgUrl} alt="" />
      <label htmlFor="" className="videocard__title">{title}</label>
      {description !== "" ? <p className="videocard__desc">
        {description}
      </p>
      : ""}
    </div>
  )
}

export default VideoCard;
