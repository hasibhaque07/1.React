// import React from 'react'
// import { Droppable } from 'react-beautiful-dnd'
// import Item from './Item'
// import './style.css'

// const ItemLIst = ({list1, list2}) => {
//   return (
//     <div className='container'>
//             <Droppable droppableId='myList1'>
//                 {(provided) => (
//                     <div className='list1-container' ref={provided.innerRef} {...provided.droppableProps}>
//                         <h1>List1</h1>
//                         {list1.map((item, index) => <Item key={item.id} item={item} index={index}/>)} 
//                         {provided.placeholder}
//                     </div>
//                 )}
//             </Droppable>
//             <Droppable droppableId='myList2'>
//                 {(provided) => (
//                     <div className='list2-container' ref={provided.innerRef} {...provided.droppableProps}>
//                         <h1>List2</h1>
//                     {list2.map((item, index) => <Item key={item.id} item={item} index={index}/>)} 
//                     {provided.placeholder}
//                 </div>
//                 )}
//             </Droppable>
            
//         </div>
//   )
// }

// export default ItemLIst
