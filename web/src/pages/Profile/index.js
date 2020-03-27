import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeadphones, FiPower, FiTrash2 } from 'react-icons/fi'

import { Container } from './styles'

export default function Profile() {
  return (
    <Container>
      <header>
        <FiHeadphones size={64} color="#438ff2" />

        <span>Olá, #</span>

        <Link to="/new" className="btn">
          Cadastrar nova festa
        </Link>

        <button>
          <FiPower size={18} color="#438ff2" />
        </button>
      </header>

      <h1>Festas Cadastradas</h1>

      <ul>
        <li>
          <strong>FESTA:</strong>
          <p>Caso tete</p>

          <strong>DESCRIÇÃO:</strong>
          <p>teste</p>

          <strong>INGRESSO:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} />
          </button>
        </li>

        <li>
          <strong>FESTA:</strong>
          <p>Caso tete</p>

          <strong>DESCRIÇÃO:</strong>
          <p>teste</p>

          <strong>INGRESSO:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} />
          </button>
        </li>

        <li>
          <strong>FESTA:</strong>
          <p>Caso tete</p>

          <strong>DESCRIÇÃO:</strong>
          <p>teste</p>

          <strong>INGRESSO:</strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} />
          </button>
        </li>
      </ul>
    </Container>
  )
}
