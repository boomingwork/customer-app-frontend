type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};

type Props = {
  customers: Customer[];
  loading: boolean;
};

function CustomerTable({ customers, loading }: Props) {
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Customers</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Created At</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;