import React, { useState, useEffect } from 'react'
import { Image, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'

import {
  Container,
  Content,
  Header,
  Quantity,
  Title,
  Description,
  List,
  Item,
  Property,
  Value,
  Details,
  DetailsText,
} from './styles'

export default function Party() {
  const [parties, setParties] = useState([])
  const [total, setTotal] = useState(0)
  const navigation = useNavigation()

  async function loadParties() {
    const response = await api.get('parties')

    setParties(response.data.data)
    setTotal(response.data.total)
  }

  useEffect(() => {
    loadParties()
  }, [])

  function navigateToDetail(party) {
    navigation.navigate('Detail', { party })
  }

  return (
    <Container>
      <Content>
        <Header>
          <Feather name="headphones" size={70} color="#438ff2" />

          <Quantity>{total} Festas</Quantity>
        </Header>

        <Title>Bem-vindo!</Title>
        <Description>Qual sua próxima festa?</Description>

        <List
          data={parties}
          keyExtractor={party => String(party)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: party }) => (
            <Item>
              <Property>Empresa:</Property>
              <Value>{(party.company && party.company.name) || ''}</Value>

              <Property>Festa:</Property>
              <Value>{party.title}</Value>

              <Property>Descrição:</Property>
              <Value>{party.description}</Value>

              <Property>Valor:</Property>
              <Value>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(party.value)}
              </Value>

              <Details onPress={() => navigateToDetail(party)}>
                <DetailsText>Saiba mais</DetailsText>
                <Feather name="arrow-right" size={20} color="#438ff2" />
              </Details>
            </Item>
          )}
        />
      </Content>
    </Container>
  )
}
