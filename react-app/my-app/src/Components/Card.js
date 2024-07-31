

function Card(props){
    return <div className='card'>
              <h1 className='card-h'>{props.title }</h1>
              <p className='card-p'>{props.desc}</p>
          </div>
}

export default Card;