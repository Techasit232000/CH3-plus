import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'
import { programs, videos } from './data/content'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Section title="Popular Programs" items={programs} />
        <Section title="Latest Videos" items={videos} />
      </main>
      <Footer />
    </div>
  )
}
