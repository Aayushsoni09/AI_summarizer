import {useNavigate} from 'react-router-dom'
import './directoryItem.scss'
export default function DirectoryItem({category}) {
  const {title,imageUrl,route} = category;  
  const navigate = useNavigate()
  const navigateHandler = ()=>{navigate(route)}
  return (

    <div className="directory-item-container" onClick={navigateHandler}>
          <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
          <div className="body">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
  )
}
