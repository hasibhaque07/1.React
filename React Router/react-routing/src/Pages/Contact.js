import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Dolor nonumy accusam et ipsum no elitr. Duo sanctus et ipsum duo gubergren ea gubergren. Et voluptua eirmod sea tempor kasd invidunt est. Aliquyam elitr duo et lorem gubergren sit. Voluptua tempor et accusam nonumy sea stet. Dolore et sanctus no at stet amet lorem. Sit eos nonumy labore dolor sed no aliquyam eirmod. Sed labore elitr eirmod no nonumy sed, sadipscing takimata et stet sanctus et. Dolor elitr gubergren dolore sit sadipscing sit kasd voluptua, sea gubergren dolor justo diam dolor rebum ipsum. Accusam et sit no amet. Voluptua et eos takimata et ut sed sea. Et sed nonumy.</p>
            <button onClick={() => navigate('/') }>Go to Home Page</button>
        </div>
    )
}

export default Contact
