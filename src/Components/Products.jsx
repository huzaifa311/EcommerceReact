import React from 'react';
// import styles from '../Body/BodyImg.module.css';
import AllProducts from './AllProducts';
import mobImg from '../Components/ProductImages.jsx/mobImg.png';
import vehicle from '../Components/ProductImages.jsx/vehicles.png';
import property from '../Components/ProductImages.jsx/property.png';
import Business from '../Components/ProductImages.jsx/Business.png';
import Camera from '../Components/ProductImages.jsx/Camera.png';
import Jobs from '../Components/ProductImages.jsx/Jobs.png';
import Rent from '../Components/ProductImages.jsx/Rent.png';
import Services from '../Components/ProductImages.jsx/Services.png';
import Bikes from '../Components/ProductImages.jsx/Bikes.png';
import furniture from '../Components/ProductImages.jsx/furniture.png';
import animals from '../Components/ProductImages.jsx/animals.png';
import books from '../Components/ProductImages.jsx/books.png';
import fashion from '../Components/ProductImages.jsx/fashion.png';
import kids from '../Components/ProductImages.jsx/kids.png';

const BodyImg = ({ src , text }) => {
  return (
    <div className='left-[4%] right-[4%] p-[3%] mt-16 mb-[2%]'>
      <h1 className='text-4xl font-bold'>All Categories</h1>
      <div className='flex flex-row flex-wrap  justify-around'>
        <AllProducts  src={mobImg} text='Mobiles' />
        <AllProducts src={vehicle} text='vehicles'/>
        <AllProducts src={property} text='Property for Sale'/>
        <AllProducts src={Business} text='Business, Industrial & Agriculture' />
        <AllProducts src={Camera} text='Electronics & Home Appliances' />
        <AllProducts src={Jobs} text='Jobs'/>
        <AllProducts src={Rent} text='Property for Rent'/>
        <AllProducts src={Services} text='Services' />
        <AllProducts src={Bikes} text = 'Bikes'/>
        <AllProducts src={furniture} text = 'Furniture & Home Decor'/>
        <AllProducts src={animals} text = 'Animals'/>
        <AllProducts src={books} text = 'Books, Sports & Hobbies'/>
        <AllProducts src={fashion} text = 'Fashion & Beauty'/>
        <AllProducts src={kids} text = 'Kids'/>
      </div>
      {/* <div className={styles.products}>
      </div> */}
    </div>
  )
}

export default BodyImg
