import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import DataModel from "../Components/DataModel";
import { Grid } from "semantic-ui-react";
import "../Components/CardComponent.css"

const CardComponent = (props) => {
  console.log(DataModel.map((i) => i));

  return (
    <>
    <div className="product-card">
      <Card >
        <Image src={props.image} size="small" centered />
        <Card.Content>
          <Card.Header>{props.model}</Card.Header>
        </Card.Content>
        <Icon circular color='teal' name='like' />
        <Card.Meta>
          <span className="date">{props.price}</span>
        </Card.Meta>
        <Card.Header>{props.price}</Card.Header>
        <Card.Description>
          {props.screen}
          <br />
          {props.warranty} Warranty
        </Card.Description>
      </Card>
      </div>
    </>
  );
};

export default CardComponent;
