import { useEffect, useRef } from 'react';
import TitlePng from '../assets/title.png';
import HeroVideo from '../assets/videos/hero.mp4';

const Hero = () => {

    const videoRef = useRef();

    useEffect(()=> {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, [])

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src={TitlePng} alt="MackBook Title" />
            </div>

            <video ref={videoRef} src={HeroVideo} autoPlay muted playsInline></video>

            <button>Buy</button>
        </section>
    )
}

export default Hero
