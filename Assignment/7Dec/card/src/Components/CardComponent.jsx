import React from "react";
import { Card, Icon, Image ,Label} from "semantic-ui-react";
import { List } from 'semantic-ui-react'
import DataModel from "../Components/DataModel";
import { Rating } from "semantic-ui-react";
import "../Components/CardComponent.css";
import { useState } from "react";
const CardComponent = (props) => {
  console.log(DataModel.map((i) => i));
  const [like, setLike] = useState(true);
  return (
    <>
      <div className="product-card">
        <div className="card">
          <Card className="card-prim">
            <Image src={props.image} size="small" centered />
            <Card.Content>
              <Card.Header className="card-header">{props.model}</Card.Header>
            </Card.Content>
            <i
              className="icon-prim"
              onClick={() => {
                setLike(!like);
              }}
            >
              {like ? (
                <Icon circular color="" name="like" />
              ) : (
                <Icon circular color="pink" name=
                "like" />
              )}
            </i>
            <p>
            <Label as='a' image>{props.rating}
            <Rating icon='star'  defaultRating={1} size='mini' disabled/> 
      
    </Label><span>{props.reviews} Reviews</span>
            </p>
            <Card.Meta>
              <span className="date">Rs <s>{props.price}</s></span>
            </Card.Meta>
            <Card.Header>Rs <b>{props.offerPrice}</b> </Card.Header>
            <List bulleted className="list">
            <List.Item>{props.screen}</List.Item>
            <List.Item>{props.warranty} Warranty</List.Item>
            </List>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
