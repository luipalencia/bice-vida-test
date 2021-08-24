import styles from "../components/card.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const DetailsCard = ({ infoInsurance }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.values(infoInsurance).map((elem) => {
        return (
          <Card className={styles.divCard} key={elem.name}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={elem.image}
                title="Card with details"
              />
              <div
                className={styles.divLabel}
                variant="contained"
                color="primary"
                disabled>
                Plan
              </div>
              <CardContent>
                <h1
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={styles.title}
                >
                  {elem.name}
                </h1>
                <p className={styles.paragraph}>{elem.description}</p>
                <p className={styles.paragraph}>Precio ${elem.price}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default DetailsCard;
