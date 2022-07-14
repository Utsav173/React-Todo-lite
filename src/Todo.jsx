import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillTrashFill } from "react-icons/bs";
// import {TrashIcon} from 'react-bootstrap-icons';

const Todo = (props) => {
  return (
    <ListGroup.Item>
      <Button
        variant="danger"
        className="mx-5"
        onClick={() => {
          props.selectItem(props.id);
        }}
      >
        <BsFillTrashFill />
      </Button>{" "}
      {props.text}
    </ListGroup.Item>
  );
};

export default Todo;
