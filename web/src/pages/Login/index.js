import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn, FiHeadphones } from 'react-icons/fi'

import { Container } from './styles'

import illustrate from '../../assets/illustrate.svg'

export default function Login() {
  return (
    <Container>
      <section className="form">
        <FiHeadphones size={96} color="#438ff2" />

        <form>
          <h1>Faça seu Login</h1>

          <input type="text" placeholder="ID" />

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
