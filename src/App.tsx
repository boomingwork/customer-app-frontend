import { useQuery } from "@apollo/client/react";
import { GET_CUSTOMERS } from "./graphql/customer";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};

type GetCustomersData = {
  customers: Customer[];
};

function App() {
  const { data, loading, refetch } =
    useQuery<GetCustomersData>(GET_CUSTOMERS);

  return (
    <div style={{ padding: "20px" }}>
      <CustomerForm onCustomerCreated={refetch} />

      <hr />

      <CustomerTable
        customers={data?.customers || []}
        loading={loading}
      />
    </div>
  );
}

export default App;