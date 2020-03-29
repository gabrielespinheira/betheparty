import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiHeadphones } from 'react-icons/fi'
import api from '../../services/api'

import { Container } from './styles'

export default function Add() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const code = localStorage.getItem('code')
  const history = useHistory()

  async function handleNewParty(e) {
    e.preventDefault()

    const data = { title, description, value }

    try {
      await api.post('parties', data, {
        headers: {
          Authorization: code,
        },
      })

      history.push('/profile')
    } catch (err) {
      alert('Erro ao cadastrar festa, tente novamente!')
    }
  }

  return (
    <Container>
      <div className="content">
        <section>
          <FiHeadphones size={96} color="#438ff2" />

          <h1>Cadastrar nova festa</h1>

          <Link to="/profile" className="rollback">
            <FiArrowLeft size={16} color="#438ff2" />
            Voltar
          </Link>
        </section>

        <form onSubmit={handleNewParty}>
          <input
            type="text"
            placeholder="Nome da festa"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          >
            {description}
          </textarea>
          <input
            type="text"
            placeholder="Valor do ingresso"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="btn">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  )
}
