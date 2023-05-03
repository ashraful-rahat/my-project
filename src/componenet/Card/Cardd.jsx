import React, { useEffect, useState } from 'react';
import SingleData from '../singleData/SingleData';
import Button from '../button/Button';
import Modal from '../Modal/Modal';
const Cardd = () => {
    const [data, setData]= useState([]);

    const [showAll,setShowAll] = useState(false);
    const handlerShowAll=()=>{
        setShowAll(true);
    }

    useEffect(()=>{
        const loadData = async ()=>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            console.log(value.data.tools); 
            setData(value.data.tools);
        }
        loadData();
    },[])
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
        data.slice(0,showAll? 12 : 6).map((singleData) => {
             console.log(singleData)
            return <SingleData singleData= {singleData }/>

        })}
        
       
       
        </div>
        <p onClick={handlerShowAll}>
        <Button >See More</Button>
        </p>
        <Modal /> 
       </> 
        
    );
};

export default Cardd;