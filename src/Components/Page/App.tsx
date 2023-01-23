import { useState } from 'react'
import './App.sass'
import NavBar from '../Organisms/NavBar'
import BenefitsBar from '../Organisms/BenefitsBar'
import ProductsSection from '../Organisms/ProductsSection'


function App() {
  return (
    <>
      <div className='navBar'>
        <NavBar></NavBar>
      </div>

        <BenefitsBar></BenefitsBar>

        <ProductsSection></ProductsSection>

    </>

  )
}

export default App
