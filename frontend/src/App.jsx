import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [datas, setDatas] = useState([])

  const fetchProducts = async() =>{
const res = await fetch("http://localhost:5000/api/products")
const data = await res.json()
setDatas(data)
  }
useEffect(() => {
fetchProducts()
}, [])
 
  return (
    <>
    {datas?.map((item) =>(
      <div key={item._id}>
        <h1>{item.name}</h1>
        <p>{item.quantity}</p>
      </div>
    ))}
    </>
  )
}

export default App
