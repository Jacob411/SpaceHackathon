import React from 'react';
import { Canvas, } from '@react-three/fiber';
import HomePlanet from './HomePlanet';

const Header = () => {
    return (
        <>
            <h1 className='title-text'>Space Hackathon</h1>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <pointLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 1.5} />
                <pointLight position={[-10, -10, -10]} decay={0.2} intensity={Math.PI / 4} />
                <HomePlanet />
            </Canvas>
            <div >
                <button className="button login">Sign in with Spotify</button>
                <button className="button playlist-url">Use Playlist URL</button>
            </div >
        </>
    );
};

export default Header;