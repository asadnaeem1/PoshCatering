import React from 'react'
import NavBar from './NavBar';
import UICarousel from './UICarousel';
import TextParagraph from './TextParagraph';
import Jumbotron from './Jumbotron';
import {navBar, carouselItems, aboutUsContent} from '../../constants';

export default function index() {
    // <UICarousel items ={carouselItems}/>
    return (
        <div>
            <NavBar content={navBar}/>
            <Jumbotron/>
            <TextParagraph content={aboutUsContent}/>
        </div>
    )
}
