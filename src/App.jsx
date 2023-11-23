import List from './componets/List'
import { useState, useEffect } from 'react'

function App(){
  const [tours, setTours] = useState([])
  const [original, setOriginal] = useState([])

  useEffect(() => {
      fetch('https://course-api.com/react-tours-project').then((response) => {
          if(response.status >= 200 && response.status <= 299) {
            return response.json();
          }
      }).then(tours=>{
        setTours(tours);
        setOriginal(tours);
        console.log(tours)
      }).catch(err=>console.log(err))
    }, [])
    console.log(tours)

  // const [people, setPeople] = useState(tours);
  const notIntrested = (id) => {
    let newPeople = tours.filter((person) => person.id !== id)
    setTours(newPeople)
  }

  return (
    <main>
      <section className='container'>
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