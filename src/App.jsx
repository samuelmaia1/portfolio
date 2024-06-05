import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Aside } from './components/Aside'
import { Apresentacao } from './components/Apresentacao'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
      <Header/>
      <Aside/>
      <Apresentacao/>
      {/* <div className='container-content'>
        
        <main>
          
          <Apresentacao/>
        </main>
      </div> */}
      <About id="about"/>
      <Skills id="skills"/>
      <Contact id="contact"/>
    </>
  )
}

export default App
