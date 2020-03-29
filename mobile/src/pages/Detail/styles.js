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

export const Item = styled.View`
  margin-top: 32px;
  padding: 24px 24px 0;
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

export const Contact = styled.View`
  margin-top: 20px;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  background: #438ff2;
  border-radius: 8px;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
`
