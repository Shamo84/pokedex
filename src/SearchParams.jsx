import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const axios = require('axios').default;
// import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [id, updateId] = useState("");
  const [name, updateName] = useState("");
  const [img, updateImg] = useState("");
  // const [name, NameDropdown, updateName] = useDropdown("", "");
  // const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    updateName("");
    updateImg("");
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      // handle success
      updateName(response.data.species.name);
      updateImg(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`);
    })
    .catch(error => {
      // handle error
      console.log(error);
    }, console.error);
  }, [id, updateName, updateId, updateImg]);
  if (!id) {
    return (
      <Container>
          <Row>
            <Col size="12">
              <div className="search-params">
                <form>
                  <label htmlFor="id">
                    Id:<br/>
                    <input
                      id="id"
                      value={id}
                      placeholder="Id"
                      onChange={(e) => updateId(e.target.value)}
                    />
                  </label>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      );
  } else {
  return (
    <Container>
      <Row>
        <Col size="12">
          <div className="search-params">
            <form>
              <label htmlFor="id">
                Id:<br/>
                <input
                  id="id"
                  value={id}
                  placeholder="Id"
                  onChange={(e) => updateId(e.target.value)}
                />
              </label>
              <Card>
                <Card.Body>
                  <Card.Text>
                    nome: {name}
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={img} alt="image not found"/>
              </Card>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
  }
};

export default SearchParams;
