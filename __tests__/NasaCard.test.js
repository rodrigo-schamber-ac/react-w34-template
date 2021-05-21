import React from 'react';
import { render } from '@testing-library/react';
import Faker from 'faker';
import NasaCard from '../components/NasaCard';
import NasaPicture from '../components/NasaPicture';
import '@testing-library/jest-dom/extend-expect';

describe('NasaCard Rendering Test', () => {
  const pictureTest = new NasaPicture(
    Faker.name.findName(),
    Faker.date.past(),
    Faker.lorem.text(10),
    Faker.image.imageUrl(),
    Faker.lorem.word(5),
    Faker.lorem.word(5),
    Faker.lorem.sentence(10),
    Faker.image.imageUrl()
  );
  
  it('should render NasaCard title.', () => {
      
      const { getByText } = render(
    
        <NasaCard
            copyright={pictureTest.copyright}
            explanation={pictureTest.explanation}
            title={pictureTest.title}
            url={pictureTest.url}
        />
      
      );
      expect(getByText(pictureTest.title)).toBeInTheDocument();
  });

});