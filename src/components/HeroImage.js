import React from 'react';
import styled from 'styled-components';
import LazyHero from 'react-lazy-hero';
import gif from '../images/conference.gif';

class HeroImage extends React.Component  {
  render() {
    return (
        <div>
            <LazyHero
              imageSrc={gif}
              parallaxOffset={100}
              minHeight="60vh"
              color="#FF6801"
              opacity={0}
              transitionDuration={600}
              transitionTimingFunction="ease-in-out"
            >
              {this.props.children}
            </LazyHero>
        </div>
    );
  }
}

export default HeroImage;
