import { Fragment, useState } from "react";
import useFetch from "../store/useFetch";
import styles from "../components/home.module.css";
import NavBar from "./TheNavBar";
import DetailsCard from "./Card";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [insurance, setInsurance] = useState(0);
  const { data, isPending, error } = useFetch(
    "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/" + insurance
  );

  const [infoInsurance, setInfoInsurance] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    setInsurance(infoInsurance);
  };

  return (
    <Fragment>
      <NavBar />
      <h2>Selecciona tus planes:</h2>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Planes</InputLabel>
            <Select
              native
              label="Planes"
              value={infoInsurance}
              onChange={(e) => setInfoInsurance(e.target.value)}
              required
            >
              <option aria-label="None" value="" />
              <option value={58}>Seguro Vida Activa</option>
              <option value={59}>Seguro Viaje Protegido</option>
            </Select>
          </FormControl>
        </Grid>
        <button className={styles.buttonSearch} onClick={handleSearch}>
          Buscar
        </button>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {isPending && <div>Loading</div>}
          {error && <div> {error} </div>}
          {data && <DetailsCard infoInsurance={data} />}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
