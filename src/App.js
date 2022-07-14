import React, { useState } from "react";
import { Button, Row, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Todo from "./Todo";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listofitem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleteItems");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
    console.log("delte ho gya");
  };
  return (
    <Container className="my-3">
      <Row>
        <div className="text-center my-3">
          <h2>Todo List</h2>
        </div>

        <InputGroup className="justify-content-center mb-3">
          <Form.Control
            type="text"
            placeholder="enter list here"
            onChange={itemEvent}
            value={inputList}
          />
          <Button
            onClick={listofitem}
            variant="outline-secondary"
            id="button-addon2"
          >
            AddToDo
          </Button>
        </InputGroup>
      </Row>

      <div className="container align-item-center">
        <ListGroup variant="flush">
          {Items.map((value, index) => {
            return (
              <Todo
                key={index}
                id={index}
                text={value}
                selectItem={deleteItems}
              />
            );
          })}
        </ListGroup>
      </div>
    </Container>
  );
}

export default App;
