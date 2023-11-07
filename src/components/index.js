import styled from "styled-components/native";

export const Tela = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
  background-color: #f84434;
`

export const Cronometo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
`

export const TelaTimer = styled.View`
  flex-direction: column;
  align-items: center;
`

export const Titulo = styled.Text`
  font-size: 40px;
  color: #ffffff;
`

export const TextoCronometro = styled.Text`
  font-size: 30px;
  color: #ffffff;
`

export const SecaoBotoes = styled.View`
  flex-direction: row;
  margin-top: 5px;
`

export const TextoBotao = styled.Text`
  font-size: 20px;
  color: #ffffff;
  margin-horizontal: 3px;
`

export const BotaoCronometro = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #000000;
  border-radius: 20px;
  border-width: 1px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-horizontal: 4px;
  color: #ffffff;
`

export const TituloSetter = styled.Text`
  font-size: 30px;
`

export const TextoMinutos = styled.Text`
  font-size: 20px;
`

export const BotaoTimer = styled.TouchableOpacity`
  background-color: #f84434;
  padding: 4px;
  border-radius: 20px;
`