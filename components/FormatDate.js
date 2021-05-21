import moment from 'moment';

export default function FormatDate(dateToFormat){
    
    return moment(dateToFormat).format().slice(0,10)
  
};