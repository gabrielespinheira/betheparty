import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import { Container } from './styles'

import logo from '../../assets/logo.svg'
import illustrate from '../../assets/illustrate.svg'

export default function Login() {
  return (
    <Container>
      <section className="form">
        <img src={logo} alt="BeTheHero" />

        <form>
          <h1>Faça seu Login</h1>

          <input type="text" placeholder="ID" />

          <button type="submit" className="btn">
            Entrar
          </button>

          <a href="/register">
            <FiLogIn size={16} color="#438ff2" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={illustrate} className="illustrate" alt="Heroes" />
    </Container>
  )
}
