import React from 'react';
import NavBar from './NavBar';
import TextParagraph from './TextParagraph';
import Jumbotron from './Jumbotron';
import {navBar, aboutUsContent, mainPageJumbotron} from '../../constants';

export default function index() {
    // <UICarousel items ={carouselItems}/>
    // {<NavBar content={navBar}/>}
    return (
        <div>
            <Jumbotron content={mainPageJumbotron}/>
            <TextParagraph content={aboutUsContent}/>
        </div>
    )
}
