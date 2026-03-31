import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_CUSTOMER } from "../graphql/customer";

type Props = {
  onCustomerCreated: () => void;
};

function CustomerForm({ onCustomerCreated }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [createCustomer] = useMutation(CREATE_CUSTOMER);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createCustomer({
      variables: { name, email, phone },
    })
      .then(() => {
        onCustomerCreated();

        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((err) => {
        console.error("Error creating customer:", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Customer</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerForm;