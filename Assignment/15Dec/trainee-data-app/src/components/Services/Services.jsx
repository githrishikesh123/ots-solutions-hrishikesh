import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Popup, Button } from "semantic-ui-react";
import "../../App.css";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <h2>Services</h2>
      <div className="card-main">
        {ServicesData.map((data,index) => {
          return (
            <>
              <Card>
                <Image src={data.img} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{data.service}</Card.Header>
                  <Card.Meta>Service from 2016</Card.Meta>
                  <Card.Description>{data.descShort}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {console.log(data.id)}
                  {/* <a>
                    <Popup
                      content={data.describe}
                      mouseEnterDelay={500}
                      mouseLeaveDelay={500}
                      on="hover"
                      trigger={<Button>more...</Button>}
                    />
                  </a> */}
                  <Link to={`/services/${index}`}><Button>more...</Button></Link>
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
