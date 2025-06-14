import React from 'react'
import Hero from '../../components/students/Hero'
import SearchBar from '../../components/students/SearchBar'
import Companies from '../../components/students/Companies'
import CoursesSection from '../../components/students/CoursesSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SearchBar/>
      <Companies/>
      <CoursesSection/>
    </div>
  )
}

export default Home


