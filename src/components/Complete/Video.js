import React from 'react'
import video from '../../assets/connect.mp4'
import styled from 'styled-components'

// regular video that we store locally
export const RegVideo = () => {
  return (
    <RegVideoWrapper>
      <video controls autoPlay muted loop>
        {/* ^ video is being imported above ^ */}
        <source src={video} type="video/mp4" />
      </video>
    </RegVideoWrapper>
  )
}

// an iframe  where we will get the url and then display that iframe
export const Video = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  )
}

// most of the gotchas will be about CSS, because the rendering is going to be pretty straight-forward
const RegVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 30vh;
  position: relative;
  margin-bottom: 2rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const IframeVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;

  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

Video.defaultProps = {
  src: 'https://www.youtube.com/embed/-8ORfgUa8ow',
  title: 'the best html css tutorial ever !',
}
