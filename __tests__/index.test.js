import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NasaCard from '../components/NasaCard';

const pictureTest = {
  copyright: "Utkarsh Mishra",
  date: "2021-04-14",
  explanation: "This supernova shock wave plows through interstellar space at over 500,000 kilometers per hour. Near the middle and moving up in this sharply detailed color composite, thin, bright, braided filaments are actually long ripples in a cosmic sheet of glowing gas seen almost edge-on. Cataloged as NGC 2736, its elongated appearance suggests its popular name, the Pencil Nebula. The Pencil Nebula is about 5 light-years long and 800 light-years away, but represents only a small part of the Vela supernova remnant. The Vela remnant itself is around 100 light-years in diameter, the expanding debris cloud of a star that was seen to explode about 11,000 years ago. Initially, the shock wave was moving at millions of kilometers per hour but has slowed considerably, sweeping up surrounding interstellar material. In the featured narrow-band, wide field image, red and blue colors track, primarily, the characteristic glows of ionized hydrogen and oxygen atoms, respectively.   Portal Universe: Random APOD Generator",
  hdurl: "https://apod.nasa.gov/apod/image/2104/Pencil_TurgeonMishra_3930.jpg",
  media_type: "image",
  service_version: "v1",
  title: "The Pencil Nebula Supernova Shock Wave",
  url: "https://apod.nasa.gov/apod/image/2104/Pencil_TurgeonMishra_960.jpg"
};

it('should render NasaCard', () => {
  
  const { getByText } = render(
    
    <NasaCard
        copyright={pictureTest.copyright}
        explanation={pictureTest.explanation}
        title={pictureTest.title}
        url={pictureTest.url}
    />
  
  );
  
  expect(getByText('NASA`s picture of the day')).toBeInTheDocument();

});