import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const BlockItem = ({ item, deleteBlock }) => {
  return (
    <>
      <a
        className="block-card"
        key={item.id}
        href={item.link.includes("http") ? item.link : `http://${item.link}`}
        target="_blank"
      >
        <Card style={{ width: "20rem" }} bg={"primary"}>
          <Card.Img variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <Button
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteBlock(item.id);
              }}
              variant="danger"
            >
              Видалити
            </Button>
          </Card.Body>
        </Card>
      </a>
    </>
  );
};

export default BlockItem;
