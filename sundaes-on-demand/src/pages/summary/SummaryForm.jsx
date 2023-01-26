import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const checkBoxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
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
        <Button type="submit" variant="primary" disabled={!tcChecked}>Confirm order</Button>
      </Form>
    </div>
  );
}
