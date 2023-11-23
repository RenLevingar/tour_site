import List from './componets/List'
import { useState, useEffect } from 'react'

function App(){
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [tours, setTours] = useState([])
  const [original, setOriginal] = useState([])

  useEffect(() => {
      fetch('https://course-api.com/react-tours-project').then((response) => {
          if(response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            setIsLoading(true);
            setIsError(true);
            throw new Error(response.statusText)
          }
      }).then(tours=>{
        setTours(tours);
        setOriginal(tours);
        setIsLoading(false);
      }).catch(err=>console.log(err))
    }, [])

    if(isLoading){
      return(
        <div className='loader'>
          <h1 className='loaderText'>Loading...</h1>
        </div>
      )
    }

    if(isError){
      return(
        <div>
          <h1>Error...</h1>
        </div>
      )
    }
  const notIntrested = (id) => {
    let newPeople = tours.filter((person) => person.id !== id)
    setTours(newPeople)
  }

  return (
    <main>
      <section className='container'>
        <h1 className='title'>Tour Locations</h1>
        <List locations={tours} remove={notIntrested}/>
        <div className='buttons'>
          {/* <button className="btn" onClick={()=> setTours([])}>Clear</button> */}
          <button className="btn" onClick={()=> setTours(original)}>Refresh</button>
        </div>
      </section>
    </main>
  )
}

export default App;