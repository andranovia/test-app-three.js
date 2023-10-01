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
import './Slide.css';



const BootstrapLogo = 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg';
const cssFrameworksLogo = 'https://spin.atomicobject.com/wp-content/uploads/logos.png';
const JsframeworksLogo = 'https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/js-frameworks.png';
const cssLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png';
const JsLogo = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
const frontEndLogo = 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Front-end-logo-color%402x.png';
const Jslogo = 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'
const htmlLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png'




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
        width: '1100px',

        borderRadius: theme.spacing(2),
        padding: theme.spacing(2),
        color: '#CCCCCC',

    },

    containerSwiper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1100px',
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2),
        color: '#CCCCCC',
        



    },

}));
const Slider = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container>


                <div className={classes.cardContainercol}>
                    <div className={classes.cardContainer} style={{ position: 'relative' }} >


                        <div className={classes.containerSwiper} style={{ borderRadius: '50px', position: 'relative' }} >

                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                loop={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1.5,
                                }}
                                pagination={{ el: '.swiper-pagination', clickable: true }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                    clickable: true,
                                }}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                className="swiper_container"
                                style={{ paddingTop: '150px', paddingBottom: '50px' }}
                            >
                            

                                <SwiperSlide>
                                    <Card elevation={3} >

                                        <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


                                            <img src={frontEndLogo} alt="JavaScript Logo" style={{ width: '80px', height: '80px' }} />

                                            <Typography variant="h5" style={{ color: '#333' }}>
                                                What did Front-End learn ?
                                            </Typography>
                                            <Typography variant="body1" style={{ color: '#777', textAlign: 'center', fontSize: '14px' }}>
                                                Front-end developers typically learn a range of skills and technologies related to web development. Some of the key areas of learning for front-end developers include: <br /> <b>SWIPE</b>
                                            </Typography>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card elevation={3} style={{ height: '300px' }}>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD89C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                <img src={htmlLogo} alt="HTML Logo" style={{ width: '120px', height: '120px' }} />
                                            </div>
                                        </div>

                                        <div style={{ height: '200px', backgroundColor: '#FFD89C', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} >
                                            <div style={{ padding: '16px' }}>
                                                <Typography variant="h5" style={{ color: '#080202' }}>
                                                    About HTML
                                                </Typography>
                                                <Typography variant="body1" style={{ color: '#080202', textAlign: 'center', fontSize: '14px' }}>
                                                    HTML is the standard markup language for creating web pages and web applications.
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card elevation={3} style={{ height: '300px' }}>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD89C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                <img src={cssLogo} alt="HTML Logo" style={{ width: '120px', height: '120px' }} />
                                            </div>
                                        </div>

                                        <div style={{ height: '200px', backgroundColor: '#FFD89C', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} >
                                            <div style={{ padding: '16px' }}>
                                                <Typography variant="h5" style={{ color: '#080202' }}>
                                                    About CSS
                                                </Typography>
                                                <Typography variant="body1" style={{ color: '#080202', textAlign: 'center', fontSize: '14px' }}>
                                                    CSS is a stylesheet language used for describing the presentation of a document written in HTML.
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card elevation={3} style={{ height: '300px' }}>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD89C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                <img src={cssFrameworksLogo} alt="HTML Logo" style={{ width: '120px', height: '120px' }} />
                                            </div>
                                        </div>

                                        <div style={{ height: '200px', backgroundColor: '#FFD89C', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} >
                                            <div style={{ padding: '16px' }}>
                                                <Typography variant="h5" style={{ color: '#080202' }}>
                                                    CSS Frameworks
                                                </Typography>
                                                <Typography variant="body1" style={{ color: '#080202', textAlign: 'center', fontSize: '14px' }}>
                                                    CSS frameworks provide pre-designed and pre-built CSS styles and components to help with web development.
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card elevation={3} style={{ height: '300px' }}>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD89C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                <img src={BootstrapLogo} alt="HTML Logo" style={{ width: '120px', height: '120px' }} />
                                            </div>
                                        </div>

                                        <div style={{ height: '200px', backgroundColor: '#FFD89C', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} >
                                            <div style={{ padding: '16px' }}>
                                                <Typography variant="h5" style={{ color: '#080202' }}>
                                                    Like Bootstrap!
                                                </Typography>
                                                <Typography variant="body1" style={{ color: '#080202', textAlign: 'center', fontSize: '14px' }}>
                                                    Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card elevation={3} style={{ height: '300px' }}>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD89C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                <img src={JsLogo} alt="HTML Logo" style={{ width: '120px', height: '120px' }} />
                                            </div>
                                        </div>

                                        <div style={{ height: '200px', backgroundColor: '#FFD89C', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} >
                                            <div style={{ padding: '16px' }}>
                                                <Typography variant="h5" style={{ color: '#080202' }}>
                                                    About JavaScript
                                                </Typography>
                                                <Typography variant="body1" style={{ color: '#080202', textAlign: 'center', fontSize: '14px' }}>
                                                    vaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card elevation={3} style={{ height: '300px' }}>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD89C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                <img src={JsframeworksLogo} alt="HTML Logo" style={{ width: '120px', height: '120px' }} />
                                            </div>
                                        </div>

                                        <div style={{ height: '200px', backgroundColor: '#FFD89C', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} >
                                            <div style={{ padding: '16px' }}>
                                                <Typography variant="h5" style={{ color: '#080202' }}>
                                                    JavaScript Frameworks
                                                </Typography>
                                                <Typography variant="body1" style={{ color: '#080202', textAlign: 'center', fontSize: '14px' }}>
                                                    JavaScript frameworks are libraries that provide pre-written JavaScript code to help with web development.
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card elevation={3} style={{ height: '300px' }}>
                                        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div
                                                style={{
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD89C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                <img src={Jslogo} alt="HTML Logo" style={{ width: '120px', height: '120px' }} />
                                            </div>
                                        </div>

                                        <div style={{ height: '200px', backgroundColor: '#FFD89C', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} >
                                            <div style={{ padding: '16px' }}>
                                                <Typography variant="h5" style={{ color: '#080202' }}>
                                                    LIke React!
                                                </Typography>
                                                <Typography variant="body1" style={{ color: '#080202', textAlign: 'center', fontSize: '14px' }}>
                                                    React is a JavaScript library for building user interfaces and single-page applications.
                                                </Typography>
                                            </div>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>


            </Container >
        </ThemeProvider >

    )
}

export default Slider;