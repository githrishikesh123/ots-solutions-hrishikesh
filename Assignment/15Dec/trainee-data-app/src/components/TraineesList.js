import React, { useState } from "react";
import {Table,Icon,Popup,Button,Header,Modal,Form,Input,} from "semantic-ui-react";
import "../App.css";
import EditModal from "../Modal/EditModal";

const TraineesList = ({ trainees ,modal,modalFunc}) => {
  const [modalOpen,setModalOpen] = useState(false)
  function setModal(){
    setModalOpen(true)
    modalFunc(modalOpen)
  }
  console.log(
    trainees.map((i) => {
      return i;
    })
  );
  // const [open, setOpen] = React.useState(false);
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
                        
                        {/* -------------------------------------------------------------------------- Modal - */}
                        <Icon
                          name="edit"
                          className="editTrainee"
                          size="large"
                          onClick={()=>{setModal()}}
                        />
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
      {modal? <p>ddd</p>:<p>ssss</p>}
    </>
  );
};

export default TraineesList;
