import { useState } from 'react'
import './App.css'
// import { EcommerceCard } from './Components/Card'
import { FooterWithSitemap } from './Components/Footer'
import Header from './Components/Header'
import MyCarousel from './Components/Sider'
import BodyImg from './Components/Products'
import Cardprops from './Components/Cardprops'


const App = () => {

  return (
    <div>
      <Header />
      <MyCarousel /> 
      <BodyImg />
      <Cardprops />
      <FooterWithSitemap />
    </div>
  )
}
export default App
