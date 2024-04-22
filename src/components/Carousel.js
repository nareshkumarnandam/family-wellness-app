import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({images}) => {
    const[curr, setCurr] = useState(0);
    const[autoplay, setAutoplay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoplay && setTimeout(() => {slideRight()}, 1500)
    })

    const slideLeft = () => {
        setCurr(curr === 0 ? images.length - 1 : curr - 1);
    }

    const slideRight = () => {
        if(curr === images.length - 1){
            setCurr(0);
        }else{
            setCurr(curr+1);
        }
    }

  return (
    <div className='carousel' onMouseEnter={() => {
        setAutoplay(false);
        clearTimeout(timeOut);
    }} onMouseLeave={() => {setAutoplay(true)}} >
        <div className='carousel_wrapper'>
            {images.map((image, index) => {
                return <div key={index} className={index == curr ? 'carousel_card carousel_card-active' : 'carousel_card'} >
                    <img className='card_image' src={image.image} alt={image.title} />
                    {/* <div className='card_overlay'></div> */}
                </div>
            })}
            <div className='carousel_arrow_left' onClick={slideLeft} >&lsaquo;</div>
            <div className='carousel_arrow_right' onClick={slideRight} >&rsaquo;</div>
            <div className='carousel_pagination'>
                {images.map((_, index) => {
                    return(
                        <div key={index} className={index === curr ? 'pagination_dot pagination_dot-active' : 'pagination_dot'} onClick={() => setCurr(index)}></div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Carousel