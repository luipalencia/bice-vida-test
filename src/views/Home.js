import { Fragment, useState } from "react";
import useFetch from "../store/useFetch";
import styles from '../components/home.module.css'
import NavBar from './TheNavBar'
import DetailsCard from './Card'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {

  const classes = useStyles();
  const [insurance, setInsurance] = useState(0);
  const { data, isPending, error } = useFetch(
    "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/" + insurance
  );

 const [infoInsurance, setInfoInsurance] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    setInsurance(infoInsurance)
  };

  return (
    <Fragment>
      <NavBar/>
      <h1>Selecciona tu planes:</h1>
      <Grid container spacing={0}>
      <Grid item xs={4}>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Planes</InputLabel>
        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
         value={infoInsurance}
         onChange={(e) => setInfoInsurance(e.target.value)}
         required
        >
                    <MenuItem value={0} disabled>
            <em>None</em> 
          </MenuItem>
          <MenuItem value={58}>Seguro Vida Activa</MenuItem>
          <MenuItem value={59}>Seguro Viaje Protegido</MenuItem>
         
        </Select>
       
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      <button className={styles.buttonSearch} onClick={handleSearch}>Buscar</button>
      </Grid>
      </Grid>
{/*       <select className={styles.select}
        name="seguros"
        id="seguros"
        value={infoInsurance}
        onChange={(e) => setInfoInsurance(e.target.value)}
        required >
        <option value="0" className={styles.options} disabled>
          Planes
        </option>
        <option value="58" className={styles.options} >Seguro Vida Activa</option>
        <option value="59" className={styles.options} >Seguro Viaje Protegido</option>
      </select>
     <button className={styles.buttonSearch} onClick={handleSearch}>Buscar</button>
      </section> */}

<section>
{ isPending && <div>Loading</div> }
           { error && <div> {error} </div> }
           { data && <DetailsCard infoInsurance={data} />}
</section>      
    </Fragment>
  );
};

export default Home;
