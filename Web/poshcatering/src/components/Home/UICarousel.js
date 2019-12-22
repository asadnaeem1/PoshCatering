import React from 'react';
import Carousel from 'react-material-ui-carousel';

export default function UICarousel({items}) {
    return (
        <Carousel>
            {
                items.map( item => (
                    <div style={{ height: '300px', overflow: 'hidden'}}>
                        <img src={item.image} style={{width: '100%'}}/>
                    </div>
                ))
            }
        </Carousel>
    )
}
