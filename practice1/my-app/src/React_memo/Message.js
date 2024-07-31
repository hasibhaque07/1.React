import React, {memo, useMemo} from 'react'

// const Message = memo(() => {
//   return (
//     <div>
//         <p>Message send 0</p>
//        {console.log('message rendering')}
//     </div>
//   )
// })

// export default Message



const Message = ({count, onHandleIncreament}) => {
    
    const calculatedNum = useMemo(() => {
        let num = 0;
        for(let i = 0; i < 5000000000; i++){
            num++;
        }
        return num;
    }, [])
    
    return (
      <div>
          <h1>Number: {calculatedNum}</h1>
          <p>Message send {count}</p>
          <button onClick = {onHandleIncreament}>count increament</button>
         {console.log('message rendering')}
      </div>
    )
  }
  
  export default memo(Message)
