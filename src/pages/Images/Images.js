import { useEffect, useState } from 'react';
import { ImagesWrapp, Title } from './Images.styled';
import { fetchImagesPixabay } from 'helpers/Api';

const drawImages = images => {
  return images.map(({ id, largeImageURL, pageURL }) => (
    <li key={id}>
      <img
        src={largeImageURL}
        alt={pageURL}
        width="300"
        height="200"
        loading="lazy"
      ></img>
    </li>
  ));
};

export const Images = ({ title }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const pixabayImages = await fetchImagesPixabay();
        setImages(pixabayImages.hits);
        console.log(pixabayImages.hits);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);
  return (
    <>
      {title && <Title>{title}</Title>}
      <ImagesWrapp>{drawImages(images)}</ImagesWrapp>
    </>
  );
};
