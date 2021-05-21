import Faker from 'faker';
import FormatDate from '../components/FormatDate';
import '@testing-library/jest-dom/extend-expect';

describe('FormatDate unit tests', () => {
  
    const sampleDate = "Fri May 21 2021 16:30:30 GMT-0300 (Brasilia Standard Time)";
    const sampleDateFormatted = "2021-05-21";
  
    it('should return the formatted date.', () => {
      
      expect(FormatDate(sampleDate)).toEqual(sampleDateFormatted);
  
    });

});