import { useState, useEffect, useContext } from 'react'
import { supabase } from 'lib/Store'
import {  ExtendedHeading, Hero } from "~/components/index"
import { useRouter } from 'next/router'
import UserContext from 'lib/UserContext'
import { jwtDecode } from 'jwt-decode'



const Home = () => {  


  return (
    <>
    <ExtendedHeading />
    <main>
      <Hero />
    </main>
  </>
  )
}

export default Home
