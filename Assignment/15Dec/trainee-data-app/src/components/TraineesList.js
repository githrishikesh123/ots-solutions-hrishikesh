import React from "react";
import { Table, Icon, Popup } from "semantic-ui-react";
import "../App.css";

const TraineesList = (props) => (
  <>
    {props.trainees.length > 0 && (
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {props.trainees.length > 0 &&
          props.trainees.map((trainee, index) => {
            return (
              <Table.Body key={index}>
                <Table.Row>
                  <Table.Cell>
                    {trainee.firstName} {trainee.lastName}
                  </Table.Cell>
                  <Table.Cell>{trainee.email}</Table.Cell>
                  <Table.Cell>{trainee.gender}</Table.Cell>
                  <Table.Cell className="edit-icon-set">
                    <Icon name="edit" className="editTrainee" size="large" />
                    <Icon
                      name="user delete"
                      className="deleteTrainee"
                      size="large"
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
    )}
    <div>{props.trainees.length == 0 && <div>No Data Found!</div>}</div>
  </>
);

export default TraineesList;
