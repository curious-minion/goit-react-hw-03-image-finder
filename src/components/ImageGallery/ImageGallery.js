import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { image_gallery } from './ImageGallery.module.css';

export default function ImageGallery({ images, onClick }) {
  const showModal = url => {
    onClick(url);
  };

  return (<ul className={image_gallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL  }) => (
      <ImageGalleryItem
        largeImageURL={largeImageURL}
        key={id}
        webformatURL={webformatURL}
        tags={tags}
      openModal ={()=> showModal(largeImageURL)}/>
      
    ))}
  </ul>
  )
};
  

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired
    }))
};




