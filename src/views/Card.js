import styles from '../components/card.module.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const DetailsCard = ({infoInsurance}) => {
    const classes = useStyles();

    return ( 
       <div className={styles.divCard}> 
       <Grid container spacing={1}>
       <Grid item xs={12}>
         {Object.values(infoInsurance).map((elem) => { return (  
    <Card className={classes.root} key={elem.name}>
      <CardActionArea>
      <CardMedia
          className={classes.media}
          image={elem.image}
          title="Card with details"
        />
        <CardContent>
          <h1 gutterBottom variant="h5" component="h2" className={styles.title}>
          {elem.name}
          </h1>
          <p className={styles.paragraph}>
          { elem.description }
          </p>
          <p className={styles.paragraph}>
           PRECIO ${ elem.price } 
          </p>
        </CardContent> 
      </CardActionArea>
    </Card> )})}
    </Grid>
    </Grid>
    </div>

     );
}
 
export default DetailsCard;