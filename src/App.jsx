import { useState } from 'react'
import { characters } from './db'
import SearchBox from './components/Searchbox'


//main components
import Header from './components/Header'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'


const App = () => {
  const [count, setCount] = useState(0) 

  return (
    <div>
      <Header />
      <SearchBox />
      <CharacterList characters={characters}/>
      <Footer />
    </div>
  )
}

export default App
