import './carroussel.css'
import CarrousselElement from './carrousselElement/carrousselElement'
import Carousel from '@itseasy21/react-elastic-carousel'
import React from 'react'

function carrousssel() {
  return (
      <Carousel itemsToShow={8.5} itemsToScroll={13}>
        <CarrousselElement text="Tous" classe={"active"}/>
        <CarrousselElement text="Musique ambient"/>
        <CarrousselElement text="Univers"/>
        <CarrousselElement text="Mix"/>
        <CarrousselElement text="Histoire"/>
        <CarrousselElement text="Hôtels"/>
        <CarrousselElement text="Playboi Carti"/>
        <CarrousselElement text="En direct"/>
        <CarrousselElement text="Rap"/>
        <CarrousselElement text="Rap français"/>
        <CarrousselElement text="Animes"/>
        <CarrousselElement text="Comédies"/>
        <CarrousselElement text="Jeux d'action et d'aventure"/>
        <CarrousselElement text="Nouveautés"/>
        <CarrousselElement text="Vidéos mises en ligne récemm..."/>
        <CarrousselElement/>
      </Carousel>  
  )
}

export default carrousssel