import React from 'react'

let info = [
    {
        name : "a",
        age  : 12,
        phone:[{home: "0"}, {office : "1"}]
    },
    {
        name : "b",
        age  : 12,
        phone:[{home: "2"}, {office : "3"}]
    },
    {
        name : "c",
        age  : 12,
        phone:[{home: "4"}, {office : "5"}]
    }
]
function Users(){
    return(
        <div>
            {
                info.map((data, index) => (
                 <div key = {index}>
                    <h1>Name: {data.name}</h1>
                    <h2>Age: {data.age}</h2>
                    {
                    data.phone.map((num, index) =>(
                        <div key = {index}>
                            <h2>Home : {num.home}</h2>
                            <h2>Office : {num.office}</h2>
                        </div>))
                    }
                </div>))
            }
        </div>
    );
}

export default Users;