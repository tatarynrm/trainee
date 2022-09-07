import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
const DeletedBlocks = ({ deleteBlocks, deleteBlock }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="deleted-bocks">
      <h1>
        Видалені блоки : {deleteBlocks.length}
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          {show ? "Приховати" : "Дивитись"}
        </button>
      </h1>
      <div className={show ? "deleted-items-show" : "deleted-items"}>
        {show
          ? deleteBlocks?.map((item) => (
              <a key={item.id} href={`http://${item.link}`} target="blank">
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src={item.photo} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            ))
          : null}
      </div>
    </div>
  );
};

export default DeletedBlocks;
