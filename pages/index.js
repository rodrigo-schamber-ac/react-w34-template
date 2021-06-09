import React, {useEffect, useState} from 'react';
import ActivityIndicator from '../components/ActivityIndicator';
import FormatDate from '../components/FormatDate';
import NasaCard from '../components/NasaCard';
import NasaPicture from '../components/NasaPicture';
import GetPicture from '../gateway/GetPicture';
import DatePicker from 'react-datepicker';
import 'tailwindcss/tailwind.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function App() {

  const [picture, setPicture] = useState(new NasaPicture());
  const [startDate, setStartDate] = useState(new Date());

  var datePicker = (

    <DatePicker
      selected={startDate}
      onChange={(date) => {
                              
        handleDateChange(date);
                            
      }}
    />

  );

  function handleDateChange(date){
  
    loadPicture(date);
    setStartDate(date);
  
  };

  function loadPicture(date){
    
    GetPicture(FormatDate(date)).then((item) => {
      
      setPicture(item);
    
    });
  
  };
  
  useEffect(() => {
    
    loadPicture(startDate);
  
  }, []);
  
  return (
      <NasaCard
        copyright={picture.copyright}
        datePicker = {datePicker}
        explanation={picture.explanation}
        title={picture.title}
        url={picture.url}
      />
  );
};