import React, { useState } from "react";
import { Button, Form, Segment, TextArea } from "semantic-ui-react";
import '../App.css'

function ContactUs() {
  return (
    <>
      <div>
        <h2>Contact Us</h2>
        <div className="form-enter-main">
        <Segment inverted>
          <Form inverted>
            <Form.Group widths="equal">
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
            </Form.Group>
            <TextArea placeholder='Tell us more' style={{ minHeight: 100 }}  />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
