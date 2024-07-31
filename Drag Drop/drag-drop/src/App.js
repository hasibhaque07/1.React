import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Item from './Item';

const App = () => {
  const [list1, setList1] = useState([{id:1, item: 'l1i1'},{id:2, item: 'l1i2'}]);
  const [list2, setList2] = useState([{id:3, item: 'l2i1'},{id:4, item: 'l2i2'}]);

  const onDragEnd = (result) => {
    const {source, destination} = result;
    //console.log(result);
    if(!destination){ //id destination null(outside of drag drop area) return
        return
    }

    let add,
    list1Copy = list1,
    list2Copy = list2;

    if(source.droppableId === 'myList1'){
        add = list1Copy[source.index];
        list1Copy.splice(source.index, 1);
    }
    else{
        add = list2Copy[source.index];
        list2Copy.splice(source.index, 1);
    }

    if(destination.droppableId === 'myList1'){
        list1Copy.splice(destination.index, 0, add)
    }
    else{
        list2Copy.splice(destination.index, 0, add);
    }

    setList1(list1Copy);
    setList2(list2Copy);
  }
  
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='container'>
                <Droppable droppableId='myList1'>
                    {(provided) => (
                        <div className='list1-container' ref={provided.innerRef} {...provided.droppableProps}>
                            <h1>List1</h1>
                            {list1.map((item, index) => <Item key={item.id} item={item} index={index}/>)} 
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId='myList2'>
                    {(provided) => (
                        <div className='list2-container' ref={provided.innerRef} {...provided.droppableProps}>
                            <h1>List2</h1>
                            {list2.map((item, index) => <Item key={item.id} item={item} index={index}/>)} 
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                
            </div>
            
            
        </DragDropContext>
    
    )
}

export default App
