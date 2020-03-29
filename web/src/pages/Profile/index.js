import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiHeadphones, FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'

import { Container } from './styles'

export default function Profile() {
  const [parties, setParties] = useState([])
  const history = useHistory()

  const name = localStorage.getItem('name')
  const code = localStorage.getItem('code')

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: code,
        },
      })
      .then(response => {
        response.data.reverse()
        setParties(response.data)
      })
  }, [code])

  async function handleDeleteParty(id) {
    try {
      await api.delete(`parties/${id}`, {
        headers: {
          Authorization: code,
        },
      })

      setParties(parties.filter(party => party.id !== id))
    } catch (err) {
      alert('Erro ao deletar a festa, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear()

    history.push('/')
  }

  return (
    <Container>
      <header>
        <FiHeadphones size={64} color="#438ff2" />

        <span>Olá, {name}</span>

        <Link to="/new" className="btn">
          Cadastrar nova festa
        </Link>

        <button onClick={handleLogout}>
          <FiPower size={18} color="#438ff2" />
        </button>
      </header>

      <h1>Festas Cadastradas</h1>

      <ul>
        {parties.map(party => (
          <li key={party.id}>
            <strong>FESTA:</strong>
            <p>{party.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{party.description}</p>

            <strong>INGRESSO:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(party.value)}
            </p>

            <button>
              <FiTrash2 size={20} onClick={() => handleDeleteParty(party.id)} />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  )
}
