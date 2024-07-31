import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Items from './components/Items';
import NewItem from './components/NewItem';



const reducer = (state, action) => {
    if(action.type === 'EMPTY'){
        return{
            ...state,
            isModalOpen: true,
            modalText: 'Item is empty',
            
        }
    }
    if(action.type === 'ADD'){
        const modifiedNewItem = {id: uuidv4(), item: action.payload};
        return{
            ...state,
            itemList: [...state.itemList, modifiedNewItem],
            isModalOpen: true,
            modalText: 'Item is added'
        }
        
    }
    if(action.type === 'REMOVE'){
        const filteredItemList = state.itemList.filter((item) => item.id !== action.payload);
        return{
            ...state,
            itemList: filteredItemList,
            isModalOpen: true,
            modalText: 'Item is removed'
        }   
    }
    if(action.type === 'TIMER'){
        return{
            ...state,
            isModalOpen: false
        }
    }
}

const App = () => {

    // const [itemList, setItemList] = useState([]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [modalText, setModalText] = useState('');

    const [itemState, dispatch] = useReducer(reducer, {
        itemList: [],
        isModalOpen: false,
        modalText: ''   
    })

    // const timeOut = () =>{
    //     setTimeout(() => {
    //         setIsModalOpen(false);
    //     },1000)
    // }


    const timeOut = () =>{
        setTimeout(() => {
            dispatch({type: 'TIMER'})
            //itemState.isModalOpen = false;
        },1000)
    }

    const handleNewItem = (newItem) => {
        
        // if(newItem === ''){
        //     setIsModalOpen(true);
        //     setModalText('Item is empty'); 
        //     timeOut();   
        // }
        // else{
        //     setItemList((prevItems) => {
        //         const modifiedNewItem = {id: uuidv4(), item: newItem};
        //         return [...prevItems, modifiedNewItem]
        //     })
        //     setIsModalOpen(true);
        //     setModalText('Item is added');
        //     timeOut();
        // }

        //useReducer
        if(newItem === ''){
            dispatch({type : 'EMPTY'});
            timeOut();
        }
        else{
            dispatch({type : 'ADD', payload: newItem});
            timeOut();
        }
        
    }

    const handleDeleteItem = (id) =>{
        
        // const filteredItemList = itemList.filter((item) => item.id !== id);
        // setItemList(filteredItemList);
        // setIsModalOpen(true);
        // setModalText('Item is removed');
        // timeOut();


        //useReducer
        dispatch({type: 'REMOVE', payload: id});
        timeOut();
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <NewItem handleNewItem = {handleNewItem}/>
            
            <Items items = {itemState.itemList} deleteItem = {handleDeleteItem}/>
            {itemState.isModalOpen && <p>{itemState.modalText}</p>}
        </div>
    )
}

export default App
