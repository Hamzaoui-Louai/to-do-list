import { useState } from 'react'


const default_list = {
    "title":"default list",
    "id":"000000",
    "list":["initialize a project","learn react","make the project a success"]
}

function Lists() {

    return (
    <>
        <div className='sidebar_listname'>{default_list.title}</div>
    </>
    )
}

export default Lists