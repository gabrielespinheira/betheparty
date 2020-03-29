import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiHeadphones } from 'react-icons/fi'
import api from '../../services/api'

import { Container } from './styles'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = { name, email, whatsapp, city, uf }

    try {
      const response = await api.post('companies', data)

      alert(`ID de Acesso: ${response.data.code}`)

      history.push('/')
    } catch (err) {
      alert('Erro no cadastro, tente novamente!')
    }
  }

  return (
    <Container>
      <div className="content">
        <section>
          <FiHeadphones size={96} color="#438ff2" />

          <h1>Cadastro</h1>

          <Link to="/" className="rollback">
            <FiArrowLeft size={16} color="#438ff2" />
            Voltar
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da Empresa"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Cadastre-se
          </button>
        </form>
      </div>
    </Container>
  )
}
