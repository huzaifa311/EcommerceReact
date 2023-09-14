import React from 'react'
// import styles from '../Body/BodyImg.module.css'

const AllProducts = (props) => {
    let text = props.text;
    return (
        <>
            <div className='pr-[2%] pb-[2%] pt-[2%]'>
                <div className='flex flex-row flex-wrap'>
                    <img src={props.src} alt="Mobiles" className=' w-[110px] h-auto' />
                </div>
                <div className='w-[110px] justify-center text-center'>
                    <span className='font-bold'> {text} </span>
                </div>
            </div>
        </>
    )
}

export default AllProducts
