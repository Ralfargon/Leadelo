import React from 'react'
import Item from '../Item/Item'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components';

import { Lead } from '../../controllers/leads';

const StyledColumn = styled.div`
  display: "flex";
  flex-direction: "column";
  border: 1px solid gray;
  padding: "24px 0";
  margin-top: 8;
  padding: 10px 10px 10px 10px;
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;

  h2: {
    margin: 0;
    padding: 0 16px;
  }
  
`;

const StyledList = styled.div`
  display: "flex";
  flex-direction: "column";
  flex-grow: 1;
  background-color: #ddd;
  border-radius: 8;
  padding: 16;
  margin-top: 8;

`;

interface ColumnProps {
  col: {
    id: string
    title: string
    list: Lead[]
  }
}

const Column: React.FC<ColumnProps> = ({ col: { list, id, title } }) => {
  return (

    <Droppable droppableId={id}>
      {(provided) => (
        <StyledColumn>
          <h2>{title}</h2>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((lead, index) => (
              <Item key={lead.nome} text={lead.nome} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>

  )
}

export default Column