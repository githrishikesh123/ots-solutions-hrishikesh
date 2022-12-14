import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown } from "semantic-ui-react";
import TraineesList from "./TraineesList";
import "../App.css";
import EditModal from "../Modal/EditModal";
const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  // --------------------
  const [passModal,setPassModal] = useState(true)
  const [order, setOrder] = useState("");

  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  // --------------------------------- modal func --------
  function modalFunc(modalOpen){
    console.log(modalOpen)
    setPassModal(modalOpen)
    console.log(passModal)
  }
  // -----------------------
 

  // const options = [
  //   {
  //     key: "ascending",
  //     text: "Ascending Order",
  //     value: "first-name",
  //   },
  //   {
  //     key: "descending",
  //     text: "Descending Order",
  //     value: "descending",
  //   },
  // ];
  useEffect(() => {
    setTraineesList(mockTraineesData);
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);
  // ------------------------------------------ Order Names ----------------
  useEffect(() => {
    if (order == "ascending") {
      //  sort by String property ASCENDING (A - Z)
      const strAscending = [...mockTraineesData].sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1
      );
      console.log(strAscending);
      setTraineesList(strAscending);
    } else if (order == "descending") {
      // sort by String property DESCENDING (Z - A)
      const strDescending = [...mockTraineesData].sort((a, b) =>
        a.firstName > b.firstName ? -1 : 1
      );
      console.log(strDescending);
      setTraineesList(strDescending);
    }
  }, [order]);
  // -------------------------------------------------------------

  return (
    <>
      <Header as="h1">Trainees Data</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
      >
        <Input
          style={{ width: "25rem" }}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <EditModal passModal={passModal}/>
        <div className="button-main">
          {/* --------- */}
          <label htmlFor="">Sort</label>
          <select value={order} onChange={handleChange}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
          {/* <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button>Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
            />
          </Button.Group> */}
        </div>
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          trainees={searchTerm == "" ? traineesList : searchedTraineesList}
          modalFunc={modalFunc}
        />
      </div>
    </>
  );
};

export default TraineesComponent;
