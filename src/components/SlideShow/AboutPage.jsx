import React from "react";
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import {
    Card,
    Container,
    Typography,
} from '@material-ui/core';
import { ThemeProvider, } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slide.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import About from "../About-me/About";


const BootstrapLogo = 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg';
const cssFrameworksLogo = 'https://spin.atomicobject.com/wp-content/uploads/logos.png';
const JsframeworksLogo = 'https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/js-frameworks.png';
const cssLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png';
const JsLogo = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
const frontEndLogo = 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png';
const Jslogo = 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
const htmlLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png'



const color = "#20262E";
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});
const useStyles = makeStyles((theme) => ({
    cardContainercol: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1500px',

        borderRadius: theme.spacing(2),
        padding: theme.spacing(2),
        color: '#CCCCCC',

    },

    containerSwiper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1500px',
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2),
        color: '#CCCCCC',


    },

}));
const AboutPage = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container>




                <div className={classes.cardContainercol}>
                    <div className={classes.cardContainer} style={{ position: 'relative' }} >


                        <div className={classes.containerSwiper} style={{ borderRadius: '50px', position: 'relative' }} >






                            <Canvas camera={{ fov: 50, position: [5, 5, 5] }} style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                bottom: 25,
                                left: 0,


                            }} >
                                <OrbitControls enableZoom={false} />
                                <ambientLight ambientLight intensity={1} />
                                <directionalLight position={[3, 2, 1]} />
                                <Sphere args={[1, 100, 200]} scale={2} >
                                    <MeshDistortMaterial
                                        color={color}
                                        attach="material"
                                        distort={0.5}
                                        speed={2}
                                    />
                                </Sphere>
                            </Canvas>
                            <About />



                        </div>
                    </div>
                </div>
            </Container>
        </ThemeProvider>

    )
}

export default AboutPage;