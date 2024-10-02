import * as React from 'react';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel'

export default function SectionCarousel() {

  var items = [
    {
        name: "",
        description: "Mitsubishi Triton",
        src: require("../assets/images/1.jpg")
    },
    {
        name: "",
        description: "Kia Sonet",
        src: require("../assets/images/2.jpg")
    }
  ]

  return (
    <div>
        <Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
        </Carousel>
    </div>
  );

  function Item(props) 
  {
      return (
          <Paper>
              <h2>{props.item.name}</h2>
              <img src={props.item.src} alt={props.item.description}/>

              <Button className="CheckButton">
                  {props.item.description} 
              </Button>
          </Paper>
      )
  }

}
