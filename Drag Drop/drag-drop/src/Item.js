import React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import './style.css';

const Item = ({ item, index }) => {
    //console.log(item.id);
    return (
      <Draggable draggableId={item.id.toString()} index={index}>
        {(provided) => (
          <div
            className="list-item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p>{item.item}</p>
          </div>
        )}
      </Draggable>
    );
  };
  
export default Item

