import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import homeImage from '../../img/bghome.jpg'






const useStyles = makeStyles((theme) => ({
   
  
    background: {
      backgroundImage: `url(${homeImage})`,
      backgroundSize: 'cover',
      display: 'flex',
      marginTop: '-20px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px',
      color: '#FFFFFF',
    },
    heading: {
        textAlign: 'center',
    
        color: '03001C',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        '& h1, h2': {
          fontSize: '1.5rem',
    
          fontWeight: 800,
          marginBottom: theme.spacing(2),
          letterSpacing: '0.1rem',
          textTransform: 'uppercase',
          [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
            marginBottom: theme.spacing(1),
          },
    
        },
        '& p': {
          fontSize: '1rem',
          fontWeight: 400,
        },
        '& h3': {
          fontSize: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          color: '#ffffff',
          background: 'linear-gradient(135deg, #67bcd9 0%, #3387dc 100%)',
          padding: '10px 10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(0.96)',
    
          },
        },
        [theme.breakpoints.down('sm')]: {
          paddingRight: '200',
          marginTop: '400px',
    
          textAlign: 'center',
          '& h1, h2': {
            fontSize: '2rem',
            marginBottom: theme.spacing(1),
          },
        },
      },
}));

const Homesec = () => {
    const classes = useStyles();
    return (
    <div className={`${classes.background} ${classes.root1}`}  >
        <div className={classes.heading} >
            <h1>Hi there!,</h1>
            <h2>
                Our team,
                <span className={classes.name}> TeamEleven,</span>
                <br /> dedicated this website to YOU!
            </h2>
            <a href="#takealook">
                <h3>Lets get started</h3>
            </a>
        </div>
    </div>
    );

}
export default Homesec;