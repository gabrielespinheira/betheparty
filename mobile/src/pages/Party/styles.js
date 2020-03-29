import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  padding: 30px 24px 0;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Quantity = styled.Text`
  font-size: 15px;
  color: #737380;
  font-weight: bold;
`

export const Title = styled.Text`
  font-size: 30px;
  margin: 48px 0 16px;
  color: #13131a;
  font-weight: bold;
`

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`

export const List = styled.FlatList`
  margin-top: 32px;
`

export const Item = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`

export const Value = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 15px;
  color: #737380;
`

export const Details = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DetailsText = styled.Text`
  color: #438ff2;
  font-weight: bold;
  font-size: 15px;
`
