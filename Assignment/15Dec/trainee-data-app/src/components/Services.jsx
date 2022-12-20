import React from "react";
import { Card, Icon, Image, Popup,Button } from "semantic-ui-react";
import "../App.css";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
    <h2>Services</h2>
      <div className="card-main">
        {ServicesData.map((i) => {
          return (
            <> 
              <Card>
                <Image src={i.img} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{i.service}</Card.Header>
                  <Card.Meta>Service from 2016</Card.Meta>
                  <Card.Description>
                    {i.descShort}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Popup
                      content={i.describe}
                      mouseEnterDelay={500}
                      mouseLeaveDelay={500}
                      on="hover"
                      trigger={<Button>more...</Button>}
                    />
                  </a>
                </Card.Content>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Services;
