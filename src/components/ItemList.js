import React from 'react'

const ItemList = ({Items}) => {


  return (
    <div>
      {
        Items.map((data)=>{
            const {defaultPrice,description,name ,id} = data.card.info;
            return (
               <div className='border-b-2 font text-left text-wrap ' key={id}>
                <h1 className='font-bold text-2xl text-gray-600'>{name}</h1>
                <h1> ₹ {defaultPrice/100}</h1>
                <h1>{description}</h1>
               </div> 

            )
        })
      }
     {/* <h1>{name}</h1>
     <h1>{price}</h1>
     <h1>{description}</h1> */}

    </div>
  )
}

export default ItemList
