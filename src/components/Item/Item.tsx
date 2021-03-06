import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';


interface ItemProps {
  text: string
  index: number
}


const StyledItem = styled.div`
  background-color: #eee;
  border-radius: 4;
  padding: 4px 8px;
  transition: background-color .8s ease-out;
  margin-top: 8;
  
`;

const Item: React.FC<ItemProps> = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <StyledItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </StyledItem>
      )}
    </Draggable>
  )
}

export default Item