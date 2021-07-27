import Column from '../../components/Column/Column';
import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components';

import leadsController, { Lead } from '../../controllers/leads';

const StyledColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    width: 100%;
    height: 80vh;
    gap: 5px;
    justify-content: center;
`;


export default function LeadTable() {
   


    function columnsFromLocalStorage() {
        const c: { [key: string]: { id: string; title: string; list: Lead[] } } = {
            potential: {
                id: "potential",
                title: "Cliente em Potencial",
                list: [],
            },
            confirmed: {
                id: "confirmed",
                title: "Dados Confirmados",
                list: []
            },
            scheduled: {
                id: "scheduled",
                title: "Reunião Agendada",
                list: []
            }
        }

        leadsController.getLeads().forEach((lead) => {
            c[lead.status].list.push(lead);
        });

        return c;
    }

    const [columns, setColumns] = useState(columnsFromLocalStorage())



    const onDragEnd = ({ source, destination }: DropResult) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) {
            return;
        }

        // Set start and end variables
        const start = columns[source.droppableId]
        const end = columns[destination.droppableId]

        // Different columns
        if (start !== end) {
            if (source.droppableId === "scheduled" || 
                (source.droppableId === "potential" && destination.droppableId !== "confirmed") || 
                (source.droppableId === "confirmed" && destination.droppableId !== "scheduled")) {
                return;
            }

            leadsController.updateLeadStatus(start.list[source.index].email, destination.droppableId);
            setColumns(columnsFromLocalStorage());
        }
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <StyledColumns style={{ display: "flex", flexDirection: "row" }}>
                    {Object.values(columns).map(col => (
                        <Column col={col} key={col.id} />
                    ))}
                </StyledColumns>
            </DragDropContext>
        </>
    );
}
