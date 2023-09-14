import React, { useEffect, useState } from 'react'
import { EcommerceCard } from './Card'

const Cardprops = ({ img, proName, price, title, key }) => {
    let [data, setData] = useState([]);

    let callProApi = () => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        callProApi()
    }, [])

    return (
        <>
        <h1 className='text-4xl font-bold pl-[4%] animate__bounce'>Products </h1>
        <div className='p-[2%] flex flex-row flex-wrap justify-between animate__bounce'>
            {data.map((products, index) => {
                console.log(products);
                return (
                    <div className='animate__bounce'>
                        <EcommerceCard key={products.id} img={products.image} proName={products.title} price={`Rs/${products.price}`} title={products.description} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Cardprops
