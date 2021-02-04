import React, { useState, useEffect } from "react";
import { Container, Card } from 'react-bootstrap';
const axios = require('axios').default;

const PokeGrid = () => {
  const array = [];
  const [jsx, updatejsx] = useState([]);
  do {
    let rand = Math.floor(Math.random() * 874) + 1;
    const include = (a) => {
      return Object.values(a).indexOf(rand) > -1;
    };
    if (!array.some(include)) {
      array.push({"id": rand});
    }
  } while (array.length < 12);
  useEffect(() => {
    for (let element of array) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${element.id}`)
      .then(response => {
        element.name = response.data.species.name;
        element.imgPath = `https://pokeres.bastionbot.org/images/pokemon/${element.id}.png`;
        updatejsx(buildGrid(array));
      })
      .catch(error => {
        // handle error
        console.log(error);
      }, console.error);
    }
  }, []);
  return (
    <Container>
      <div className="grid">
        {jsx}
      </div>
    </Container>
  );
}

const buildGrid = (array) => (
  array.map((e) => (
    <Card key={e.id}>
      <Card.Body>
        <Card.Text>
          nome: {e.name}
          <br/>
          id: {e.id}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={e.imgPath}/>
    </Card>
  ))
)

export default PokeGrid;
