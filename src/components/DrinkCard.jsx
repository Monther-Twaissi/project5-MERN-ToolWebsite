import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./FoodO.css";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { minWidth: 200, height: 400 },
  formControl: {
    minWidth: 120,
  },
}));

export default function DrinkCard(props) {
  const [quantity, setQuantity] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  console.log(quantity);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.drinkImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.drinkName}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h3">
            Price: {props.price} <small>JOD</small>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.drinkDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="Space__bet">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Size</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={quantity}
              onChange={handleChange}
            >
              <MenuItem value={"small"}>Small</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"large"}>Large</MenuItem>
            </Select>
          </FormControl>
          <Button disabled={quantity ? false : true} variant="contained">
            Order now
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
