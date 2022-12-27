import React from 'react';
import { Text, Image, TouchableHighlight, Linking } from 'react-native';
import styled from 'styled-components/native';

const InfoTitle = styled.Text`
  font-size: 12px;
  font-weight: 300;
`;
const InfoText = styled.Text`
  font-size: 16px;
`;
const InfoLine = styled.View`
  margin: 3px auto;
  align-items: center;
`;
const InfoLineItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;
const InfoBlok = styled.View`
  background-color: lightblue;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  margin: 5px auto;
`;
const CloseBlok = styled.TouchableHighlight`
  position: absolute;
  right: 0;
  background-color: red;
  border-radius: 20px;
  padding: 5px;
`;
const InfoMain = styled.View`
  padding: 10px 10px;
  width: 100%;
  align-items: center;
`;
const InfoTextURL = styled.Text`
  color: blue;
  font-size: 16px;
`;

const Info = ({item, setInfo}) => {

  return (
    <InfoBlok>
        <CloseBlok onPress={() => setInfo(false)} >
          <Image source={require('../assets/cansel.png')} />
        </CloseBlok>
      
      <InfoMain>

        <InfoLine>
          <InfoTitle>CARD NUMBER</InfoTitle>
          <InfoLineItem>
            <Text>
              <InfoTitle>LENGTH: </InfoTitle>
              <InfoText>{item.number.length || '-'}</InfoText>
            </Text>
            <Text>
              <InfoTitle>LUHN: </InfoTitle>
              <InfoText>{item.number.luhn ? <Text>yes</Text> : <Text>no</Text>}</InfoText>
            </Text>
          </InfoLineItem>
        </InfoLine>
        
        <InfoMain>
          <InfoTitle>SCHEME / NETWORK:</InfoTitle> 
          <InfoText>{item.scheme || '-'}</InfoText>
        </InfoMain>

        <InfoMain>
          <InfoTitle>TYPE:</InfoTitle> 
          <InfoText>{item.type || '-'}</InfoText>
        </InfoMain>

        <InfoMain>
          <InfoTitle>BRAND:</InfoTitle> 
          <InfoText>{item.brand || '-'}</InfoText>
        </InfoMain>

        <InfoMain>
          <InfoTitle>PREPAID:</InfoTitle> 
          <InfoText>{item.prepaid ? <Text>yes</Text> : <Text>no</Text>}</InfoText>
        </InfoMain>

        <InfoMain>
          <InfoTitle>COUNTRY:</InfoTitle> 
          <InfoText>{item.country.alpha2 || '-'} {item.country.name || '-'}{item.country.emoji || '-'}</InfoText>
          <Text>
            <InfoTitle>country code: </InfoTitle>
            <InfoText>{item.country.numeric || '-'}</InfoText>
          </Text>
        </InfoMain>

        <InfoMain>
          <InfoTitle>CURRENCY:</InfoTitle> 
          <InfoText>{item.country.currency || '-'}</InfoText>
          <Text>
            <InfoTitle>(latitude: </InfoTitle>
            <InfoText>{item.country.latitude || '-'}</InfoText>
            <InfoTitle>, longitude: </InfoTitle>
            <InfoText>{item.country.longitude || '-'}</InfoText>
            <InfoTitle>)</InfoTitle>
            </Text>
        </InfoMain>

        <InfoMain>
          <InfoTitle>BANK:</InfoTitle>
          <InfoText> {item.bank.name || '-'}, {item.bank.city || '-'}</InfoText>
          <TouchableHighlight onPress={() => Linking.openURL(`https://${item.bank.url}`)}><InfoTextURL>{item.bank.url || '-'}</InfoTextURL></TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL(`tel:${item.bank.phone}`)}><InfoTextURL>{item.bank.phone || '-'}</InfoTextURL></TouchableHighlight>
        </InfoMain>

      </InfoMain>
      
    </InfoBlok>
  )
}

export default Info;
