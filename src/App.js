import React, { useState, useEffect } from 'react'

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://fine-pink-sea-lion-cape.cyclic.app/attractions')
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        setItems(result)
      })
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product_name}<br />
            {item.description} 
          </li>
        ))}
      </ul>
    </div>
  )
}


// npx createe-react-app travel-front