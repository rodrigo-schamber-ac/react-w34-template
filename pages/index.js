import React, {useEffect, useState} from 'react';
import moment from 'moment';
import NasaCard from '../components/NasaCard';
import NasaPicture from '../components/NasaPicture';
import getPicture from '../gateway/getPicture';
import DatePicker from 'react-datepicker';
import 'tailwindcss/tailwind.css';
import "react-datepicker/dist/react-datepicker.css";


export default function App() {

  const [picture, setPicture] = useState(new NasaPicture());
  const [startDate, setStartDate] = useState(new Date());
  
  function formatDate(dateToFormat){
    
    return moment(dateToFormat).format().slice(0,10)
  
  };

  function handleDateChange(date){
  
    loadPicture(date);
    setStartDate(date);
  
  };

  function loadPicture(date){
    
    getPicture(formatDate(date)).then((item) => {
      
      setPicture(item);
    
    });
  
  };
  
  useEffect(() => {
    
    loadPicture(startDate);
  
  }, []);
  
  return (
    <>
      <NasaCard
        copyright={picture.copyright}
        handleDateChange={
                            
          () => handleDateChange(date)
              
        }
        explanation={picture.explanation}
        startDate={startDate}
        title={picture.title}
        url={picture.url}
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => {
                            
          handleDateChange(date);
                          
        }}
      />
    </>
  );
};



