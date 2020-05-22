import React, { useState } from 'react'
import InputMask from 'react-input-mask'

import { location } from './services/api'

import map from './assets/img/map.png'
import github from './assets/img/github.png'
import { FiSearch, FiMapPin } from 'react-icons/fi'

import Global from './styles/Global'
import Form from './styles/Form'
import Result from './styles/Result'
import Loader from './styles/Loader'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import { useToasts } from 'react-toast-notifications'

function App() {
  const [cep, setCep] = useState('')
  const [local, setLocal] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const { addToast, removeAllToasts } = useToasts()

  async function fetchLocation(e) {
    e.preventDefault()
    removeAllToasts()
    setLocal(null)
    
    if (!cep || cep.length < 8 || cep.indexOf('_') !== -1) {
      addToast('CEP Inválido', {appearance: 'error', autoDismiss: true})
      return;
    }

    setLoading(true)

    setCep(cep.replace('-', ''))

    const l = await location(cep)

    if (! l.erro)
      setLocal(l)
    else
      addToast('CEP Inválido', {appearance: 'error', autoDismiss: true})

    setLoading(false)
  }

  return (
    <>
      <Global />
      <div className="App">
        <Zoom>
          <h1>Rastreador de CEP</h1>
        </Zoom>
        <Fade down>
          <Form onSubmit={fetchLocation}>
            <InputMask mask="99999-999" placeholder="CEP" onChange={e => setCep(e.target.value)}/>
            <button type="submit">
              {loading ? <Loader /> : <FiSearch color="#fff" size={30} />}
            </button>
          </Form>
        </Fade>
        {local && (
          <Result>
            <div className="item">
              <div className="iconBox">
                <FiMapPin size={20} color="#fff" />
              </div>
              <div className="text">
                <div className="title">Rua</div>
                <div className="value">{local.logradouro}</div>
              </div>
            </div>
            <div className="item">
              <div className="iconBox">
                <FiMapPin size={20} color="#fff" />
              </div>
              <div className="text">
                <div className="title">Bairro</div>
                <div className="value">{local.bairro}</div>
              </div>
            </div>
            <div className="item">
              <div className="iconBox">
                <FiMapPin size={20} color="#fff" />
              </div>
              <div className="text">
                <div className="title">Local</div>
                <div className="value">{local.localidade}, {local.uf}</div>
              </div>
            </div>
          </Result>
          )}
          <div className="mapWrapper">
            <img src={map} alt="Map" className="map"/>
          </div>
          <a 
            href="https://github.com/gfoliver/rastreador-de-cep" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github"
          >
            <img src={github} alt="Github"/>
          </a>
      </div>
    </>
  );
}

export default App;
