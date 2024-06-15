import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Aside } from './components/Aside'
import { Apresentacao } from './components/Apresentacao'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'

function App() {
  const [modo, setModo] = useState('dark')

  const mudaModo = () => {
    if (modo == 'dark'){
      setModo('ligth')
    }
    else{
      setModo('dark')
    }
  }

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
      <About id="about" modo={modo}/>
      <Skills id="skills"/>
      <Contact id="contact"/>
      <button onClick={mudaModo}>
        Mudar modo
      </button>
      {
        modo == 'dark'?
        <p>Escuro</p>
        :
        <p>Claro</p>
      }
    </>
  )
}

export default App
