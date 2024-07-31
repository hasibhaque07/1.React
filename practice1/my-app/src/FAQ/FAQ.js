import React, { useState } from 'react'

import style from './FAQ.module.css'

const FAQ = ({id, title, desc}) => {

    const [toggle, setToggle] = useState(false);

    return (
        <article className={style.faq_container}>
            <div className={style.title_container}>
                <h4>{title}</h4>
                <button onClick={() => {setToggle(!toggle)}} className={style.toggle_btn}>{toggle ? '-' : '+'}</button>
            </div>
            {toggle && <p>{desc}</p>}
            
        </article>
    )
}

export default FAQ
