import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiHeadphones } from 'react-icons/fi'

import { Container } from './styles'
import logo from '../../assets/logo.svg'

export default function Register() {
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

        <form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="WhatsApp" />

          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button type="submit" className="btn">
            Cadastre-se
          </button>
        </form>
      </div>
    </Container>
  )
}
