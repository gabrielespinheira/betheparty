import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeadphones, FiPower, FiTrash2 } from 'react-icons/fi'

import { Container } from './styles'

export default function Profile() {
  return (
    <Container>
      <header>
        <FiHeadphones size={64} color="#438ff2" />

        <span>Bem vinda, APAD</span>

        <Link to="/new" className="btn">
          Cadastrar novo caso
        </Link>

        <button>
          <FiPower size={18} color="#438ff2" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso tete</p>

          <strong>DESCRIÇÃO:</strong>
          <p>teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso tete</p>

          <strong>DESCRIÇÃO:</strong>
          <p>teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso tete</p>

          <strong>DESCRIÇÃO:</strong>
          <p>teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} />
          </button>
        </li>
      </ul>
    </Container>
  )
}
