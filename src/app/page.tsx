import { CaseStudies } from './sections/case_studies/CaseStudies'
import { Hero } from './sections/hero/Hero'
import { WhatWeDo } from './sections/what_we_do/WhatWeDo'
import { Industries } from './sections/industries/Industries';
import { Contact } from './sections/contact/contact';

/**
 * The Home component represents the main page of the website.
 * @returns {JSX.Element} The Home component JSX.
 */
export default async function Home() {
  return (
    <div className='is-flex is-flex-direction-column'>
      <Hero />
      <WhatWeDo />
      <CaseStudies />
      <Industries />
      <Contact/>
    </div>
  )
}