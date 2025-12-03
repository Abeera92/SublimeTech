import React from 'react'
import ContactHero from '../../Component/ContactHero'
import ContactForm from '../../Component/ContactForm'
import FAQSection from '../../Component/FAQS'
import FeaturedProjects from '../../Component/FeaturedProjects'
import Pricing from '../../Component/Pricing'


export default function Contact() {
  return (
    <>

      <ContactHero />
      <ContactForm/>
      <FAQSection/>
      <FeaturedProjects/>
      <Pricing/>
    </>
  )
}
