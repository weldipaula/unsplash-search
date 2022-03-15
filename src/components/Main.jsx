import { useState, useEffect } from "react"
import axios from 'axios'
import '../styles/main.scss'

export function Main () {
  const key = 'cGwNrV7VFY0H8dzHSPArh5HBWK9UCN_acFydNNYPsWA'

  const [photo, setPhoto] = useState('')
  const [book, setBook] = useState([])

  useEffect(()=>{
    const api = 'https://api.unsplash.com/search/photos?page=1&query="random"&client_id=cGwNrV7VFY0H8dzHSPArh5HBWK9UCN_acFydNNYPsWA'
    axios.get(api).then(response=> {setBook(response.data.results)})
  },[])
  
  function handleInputPhoto() {
    setPhoto(event.target.value)
  }

  function handleKeyPress () {
    if(event === 13) {alert('oi')}
  }

  function query () {
    const queryUrl =`https://api.unsplash.com/search/photos?page=1&query="${photo}"&client_id=${key}`
    axios.get(queryUrl).then(response=> {setBook(response.data.results)})
    console.log(book);
  }

  return (
    <>
      <div className="inputBar">
        <div className="circle">
          <h3>UNSPLASH</h3>
        </div>
        <div className="bar">
          <input
            type="text"
            onChange={handleInputPhoto}
            placeholder='Digite sua busca'
          />
          <button 
            onClick={query} 
            >Buscar
          </button>
        </div>
      </div>
      <div className="cards">
        {book.map(photo => (
          <img src={photo.urls.small} alt="" />
        ))}
      </div>
    </>

 )
}