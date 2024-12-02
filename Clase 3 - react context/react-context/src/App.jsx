import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BackButton } from './components/BackButton/BackButton'
import { FormComponent } from './components/FormComponent/FormComponent'
import { UserProvider } from './context/UserContext';
import { Componente2 } from './components/Componente2/Componente2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <div style={{height:'3000px', padding:'15px', border:'1px solid brown'}}>
          <FormComponent/>
          <Componente2/>
        </div>
        <p>Elemento de parrafo</p>
        <BackButton/>
      </UserProvider>
      {/* <Component3/> */}
    </>
  )
}

export default App
