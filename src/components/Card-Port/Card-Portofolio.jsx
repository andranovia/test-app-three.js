import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';
import Web1 from '../../img/programmer-app.png';




const useStyles = makeStyles((theme) => ({
  chartContainer: {
    borderRadius: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.15)'

  },
  cardclasses2: {
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
  },
  card2new: {
    borderRadius: theme.spacing(2),
    backgroundColor: '#fff',

  },
  media: {
    width: '50%',
    objectFit: 'cover',
  },
  content: {
    flex: 1,

    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: '16px',
    marginBottom: theme.spacing(2),
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
    borderTop: '1px solid #eee',
  },




}));

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const CardComponent = ({ title, description, imageUrl, githubLink, liveLink }) => {
  
  const classes = useStyles();

  const [isCardVisible, setIsCardVisible] = useState(false);


  useEffect(() => {

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const cardElementsright = document.querySelectorAll('.animated-card-right');
    let isCard2Visible = false;

    cardElementsright.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < windowHeight && rect.bottom >= 0;
      if (isVisible) {
        isCard2Visible = true;
      }

    });
    setIsCardVisible(isCard2Visible);

  };

  const cardAnimationRight = useSpring({
    opacity: isCardVisible ? 1 : 0,
    transform: isCardVisible ? 'translateX(0)' : 'translateX(100%)',
    config: { duration: 500 }, 
  });

  return (
   
      <div className={classes.chartcontainer} style={{ display: 'flex', alignItems: 'center' }}>
        <div className={classes.cardclasses2}>
          <animated.div className={`animated-card-right ${classes.card2new}`} style={cardAnimationRight}>
            <Card className={classes.card2new} style={{ display: 'flex', backgroundColor: '#fff', maxWidth: '500px', padding: '40px', margin: theme.spacing(1) }}>
              <CardMedia className={classes.media} image={Web1} title="Image" style={{ padding: '80px' }} />
              <CardContent className={classes.content}>
                <Typography className={classes.title}>Material-UI</Typography>
                <Typography className={classes.description} style={{}}>
                  Material-UI juga menyediakan pendekatan styling yang lebih<br /> terintegrasi dengan menggunakan CSS-in-JS (CSS dalam JavaScript).
                </Typography>
                <div className={classes.actions}>
                  <Button color="primary">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </animated.div>
        </div>
      </div>
  
  );
};

export default CardComponent;
