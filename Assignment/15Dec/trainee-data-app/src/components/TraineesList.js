import React from "react";
import {Table,Icon,Popup,Button,Header,Modal,Form,Input} from "semantic-ui-react";
import "../App.css";

const TraineesList = ({ trainees }) => {
  console.log(
    trainees.map((i) => {
      return i;
    })
  );
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {trainees.length > 0 && (
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {trainees.length > 0 &&
            trainees.map((trainee, index) => {
              return (
                <>
                  {/* --------------------------------------------------------------------- */}
                  <Table.Body key={index}>
                    <Table.Row>
                      <Table.Cell>
                        {trainee.firstName} {trainee.lastName}
                      </Table.Cell>
                      <Table.Cell>{trainee.email}</Table.Cell>
                      <Table.Cell>{trainee.gender} </Table.Cell>
                      <Table.Cell className="edit-icon-set">
                        {/* <Icon name="edit" className="editTrainee" size="large" /> */}
                        {/* -------------------------------------------------------------------------- Modal - */}
                        <Modal
                          closeIcon
                          open={open}
                          trigger={
                            <Icon
                              name="edit"
                              className="editTrainee"
                              size="large"
                            />
                          }
                          onClose={() => setOpen(false)}
                          onOpen={() => setOpen(true)}
                        >
                          <Header
                            icon="archive"
                            content={`Edit ${trainee.firstName}'s Data`}
                          />
                          <Modal.Content>
                            <p>Edit Trainees's Data.</p>
                                   
                          </Modal.Content>
                          <Modal.Actions>
                            <Button color="red" onClick={() => setOpen(false)}>
                              <Icon name="remove" /> No
                            </Button>
                            <Button
                              color="green"
                              onClick={() => setOpen(false)}
                            >
                              <Icon name="checkmark" /> Yes
                            </Button>
                          </Modal.Actions>
                        </Modal>
                        {/* ------------------------------------------------------------------ */}
                        <Icon
                          name="user delete"
                          className="deleteTrainee"
                          size="large"
                        />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </>
              );
            })}
        </Table>
      )}
      <div>{trainees.length == 0 && <div>No Data Found!</div>}</div>
    </>
  );
};

export default TraineesList;
