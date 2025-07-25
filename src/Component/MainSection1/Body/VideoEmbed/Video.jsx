    import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './Video.css';



    function Video() {
    return (
        <>
            <h2 className='video-title'>Moments of Culture, Memories for a Lifetime</h2>
            <div className='video-container'>
            <Container className='video-container-fluid'>
                    <iframe width="900" height="400" src="https://www.youtube.com/embed/H3JAU99aXac?si=HNW9VrYgWpufLctN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Container>
            </div>
        </>
    )
    }

    export default Video
