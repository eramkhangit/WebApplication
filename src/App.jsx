import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import OurStudentSection from './Components/OurStudentSection'
import ProductSection from './Components/ProductSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Header/>
      <OurStudentSection/>
      <ProductSection/>
    </>
  )
}

export default App
