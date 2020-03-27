import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiHeadphones } from 'react-icons/fi'

import { Container } from './styles'
import logo from '../../assets/logo.svg'

export default function Add() {
  return (
    <Container>
      <div className="content">
        <section>
          <FiHeadphones size={96} color="#438ff2" />

          <h1>Cadastrar novo caso</h1>

          <Link to="/profile" className="rollback">
            <FiArrowLeft size={16} color="#438ff2" />
            Voltar
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descrição"></textarea>
          <input type="text" placeholder="Valor em reais" />

          <button type="submit" className="btn">
            Cadastre-se
          </button>
        </form>
      </div>
    </Container>
  )
}
