import React from 'react'
import Hero from '../../components/students/Hero'
import SearchBar from '../../components/students/SearchBar'
import Companies from '../../components/students/Companies'
import CoursesSection from '../../components/students/CoursesSection'
import Testimonial from '../../components/students/Testimonial'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/students/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SearchBar/>
      <Companies/>
      <CoursesSection/>
      <Testimonial/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home


