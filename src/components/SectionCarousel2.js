import * as React from 'react';
import { Paper, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

export default function SectionCarousel2() {

  var items = [
    {
        name: "",
        description: "Hyundai Stargazer",
        src: require("../assets/images/3.jpg")
    },
    {
        name: "",
        description: "Peugeot 2008",
        src: require("../assets/images/4.jpg")
    },
    {
        name: "",
        description: "Chevrolet Trailblazer",
        src: require("../assets/images/5.jpg")
    }
  ]

  return (
    <div>
        <Carousel>
        {
            <Item />
            // items.map( (item, i) => <Item key={i} item={item} /> )
        }
        </Carousel>
    </div>
  );

  function Item(props) 
  {
      return (
          <Paper>
            <Grid container spacing={2} padding={2}>
                {
                    items.map( (item, i) => 
                        <Grid item xs={4}>
                            <img src={item.src} alt={item.description}/>
                        </Grid> )
                }
            </Grid>
          </Paper>
      )
  }

}
