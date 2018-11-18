import React from 'react';
import styled from 'styled-components';
import LazyHero from 'react-lazy-hero';
import gif from '../images/conference.gif';

class HeroImage extends React.Component  {
  render() {
    return (
        <div id="jamie">
            <LazyHero
              imageSrc={gif}
              parallaxOffset={100}
              minHeight="80vh"
              color="#FF6801"
              opacity={0}
              transitionDuration={900}
              transitionTimingFunction="ease-in-out"
            >
              {this.props.children}
            </LazyHero>
        </div>
    );
  }
}

export default HeroImage;
