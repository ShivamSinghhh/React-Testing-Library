import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No icecream will actually be delivered! </Popover.Body>
    </Popover>
  );

  const checkBoxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger placement="right" overlay={popover}>
      <span style={{ color: "blue" }}>Terms and Conditions</span></OverlayTrigger>
    </span>
  );
  return (
    <div>
      <Form>
        <Form.Group controlId="terms and conditions">
          <Form.Check
            type="checkbox"
            checked={tcChecked}
            onChange={() => setTcChecked(!tcChecked)}
            label={checkBoxLabel}
          />
        </Form.Group>
        <Button type="submit" variant="primary" disabled={!tcChecked}>
          Confirm order
        </Button>
      </Form>
    </div>
  );
}
