import React from 'react'
import { TouchableOpacity, Share } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  Content,
  Header,
  Item,
  Property,
  Value,
  Contact,
  Title,
  Actions,
  Action,
  ActionText,
} from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const party = route.params.party
  const message = `${party.title} no ${party.company.city}! Vamos?`

  function navigateBack() {
    navigation.goBack()
  }

  async function onShare() {
    try {
      await Share.share({ message })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <Feather name="headphones" size={70} color="#438ff2" />

          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#438ff2" />
          </TouchableOpacity>
        </Header>

        <Item>
          <Property>Empresa:</Property>
          <Value>{(party.company && party.company.name) || ''}</Value>

          <Property>Festa:</Property>
          <Value>{party.title}</Value>

          <Property>Local:</Property>
          <Value>
            {party.company.city} / {party.company.uf}
          </Value>

          <Property>Descrição:</Property>
          <Value>{party.description}</Value>

          <Property>Valor:</Property>
          <Value>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(party.value)}
          </Value>
        </Item>

        <Contact>
          <Title>Compartilhe</Title>
          <Title>Chame seus amigos!</Title>

          <Actions>
            <Action onPress={onShare}>
              <Feather name="share" size={25} color="#fff" />
              <ActionText>Compartilhar</ActionText>
            </Action>
          </Actions>
        </Contact>
      </Content>
    </Container>
  )
}
