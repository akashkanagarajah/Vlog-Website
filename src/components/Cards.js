import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            //NOTE: When changes the image look within the PUBLIC FOLDER (NOT SRC)
              src='images/Rafting.png'
              text='Witness the beauty of nature up close and feel the rush of the rapids!'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Bahamas.png'
              text='Discover pristine beaches, crystal-clear waters'
              label='Travel'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Babe.png'
              text='Capturing intimate moments and creating timeless memories.'
              label='Date'
              path='/services'
            />
            <CardItem
              src='images/Fishing.png'
              text='Experience the thrill of the catch as we take you on an exciting fishing adventure.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Bruh.png'
              text='Dive into the serenity of the great outdoors with us as we explore hidden gems and scenic landscapes.'
              label='Nature'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;