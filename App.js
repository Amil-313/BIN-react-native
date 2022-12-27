import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import Info from './Components/Info';
import Story from './Components/Story';

const InputText = styled.TextInput`
  height: 40px;
  border-color: gray; 
  border-width: 1px;
  width: 40%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 10px;
  border-right-width: 0;
  font-weight: 500;
`;
const SearchBtn = styled.TouchableOpacity`
  padding: 10px 20px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: dodgerblue;
  color: red;
  font-weight: 500;
`;
const Contain = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;
const SearchText = styled.Text`
  font-weight: 700;
  color: white;
`;
const ScrollScreen = styled.ScrollView`
  margin-top: 27px;
  padding-bottom: 200px;
`;
const SearchBlock = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;
const StoryBlock = styled.View`
  padding: 20px
  background-color: rgb(255, 255, 128);
  border-radius: 20px;
  height: auto;
`;


export default function App() {

  const [search, setSearch] = React.useState('');
  const [result, setResult] = React.useState({});
  const [info, setInfo] = React.useState(false);
  const [story, setStory] = React.useState([]);
  
  const onSearch = async(item) => {
    try {
    const { data } = await axios.get(`https://lookup.binlist.net/${item}`);
    setResult(data);
    setStory(prev => [item, ...prev])
    setSearch('');
    setInfo(true);
    } catch (error) {
      Alert.alert('Error', 'Сard with this number does not exist')
    }
  }

  const onSearchValue = () => {
    if(search.length < 8 || search.length > 8) {
      Alert.alert('Error', 'The length of the digits must be 8.')
    } else {
      onSearch(search);
    }
  }


  return (
    <ScrollScreen>
      <Contain>
      
        <SearchBlock>
          <InputText
          keyboardType='numeric'
          placeholder='Enter a request'
          defaultValue={search}
          onChangeText={(newText) => setSearch(newText)}
          />

          <SearchBtn onPress={onSearchValue}>
            <SearchText>Search</SearchText>
          </SearchBtn>

        </SearchBlock>
        
        {info && <Info item={result} setInfo={setInfo} />}

        <StatusBar style="auto" />

        {story.length > 0 &&
        <StoryBlock>
          <Text>Story:</Text>
          {story.map((item, index) => 
            <Story 
            story={story} 
            key={index} 
            setStory={setStory} 
            item={item} 
            index={index} 
            onSearch={onSearch}
            />)}
        </StoryBlock>}

      </Contain>
    </ScrollScreen>
  );
}