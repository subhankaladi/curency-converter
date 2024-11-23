import React from 'react'
import Header from './component/header/page'
import Stock from './trade/page'
import Footer from './component/footer/page'

const page = () => {
  return (
    <div>


      <Header/>
      <Stock/>
      <Footer/>
    </div>
  )
}

export default page