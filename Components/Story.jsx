import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const TouchDel = styled.TouchableHighlight`
    paddind: 5px;
`;
const StoryBlock = styled.View`
    background-color: coral;
    flex-direction: row;
    width: 200px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
`;

const Story = ({item, index, story, setStory, onSearch}) => {

    const [storyItem, setStoryItem] = React.useState('');

  const onDelete = (i) => {
    setStory(story.filter((item, index) => index !== i))
  }
  const onSearchStory = () => {
    onSearch(item);
    onDelete(index);
  }

  return (
    <StoryBlock>
            
            <TouchableOpacity onPress={() => onSearchStory()}>
                <Text>{item}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(index)}>
              <Image source={require('../assets/cansel.png')} />
            </TouchableOpacity>
    </StoryBlock>
  )
}

export default Story;