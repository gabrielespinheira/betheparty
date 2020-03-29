import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn, FiHeadphones } from 'react-icons/fi'
import api from '../../services/api'

import { Container } from './styles'

import illustrate from '../../assets/illustrate.svg'

export default function Login() {
  const [code, setCode] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (localStorage.getItem('code') !== null) {
      history.push('/profile')
    }
  }, [])

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('sessions', { code })

      localStorage.setItem('code', code)
      localStorage.setItem('name', response.data.name)

      history.push('/profile')
    } catch (err) {
      alert('Falha ao fazer login, tente novamente!')
    }
  }

  return (
    <Container>
      <section className="form">
        <FiHeadphones size={96} color="#438ff2" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            type="text"
            placeholder="ID"
            value={code}
            onChange={e => setCode(e.target.value)}
          />

          <button type="submit" className="btn">
            Entrar
          </button>

          <Link to="/register" className="rollback">
            <FiLogIn size={16} color="#438ff2" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={illustrate} className="illustrate" alt="Heroes" />
    </Container>
  )
}
