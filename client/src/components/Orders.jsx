import DashboardHeader from "./DashboardHeader";

const Orders = () => {
  // Sample order data
  const orders = [
    {
      id: 1,
      item: "The Grass",
      price: 1000,
      email: "user1@example.com",
      name: "John Doe",
      date: "2024-06-01",
    },
    {
      id: 2,
      item: "Dancing Sunflower",
      price: 500,
      email: "user2@example.com",
      name: "Jane Smith",
      date: "2024-06-02",
    },
    {
      id: 3,
      item: "Pleasant Mood",
      price: 100,
      email: "user3@example.com",
      name: "Alice Johnson",
      date: "2024-06-03",
    },
    // Add more orders as needed
  ];

  return (
    <div className="">
      <DashboardHeader />
      <h1 className="text-2xl font-semibold mb-5 ml-8">Orders</h1>
      <div className="overflow-x-auto sm:ml-8">
        <table className="w-full sm:w-[80vw] bg-white rounded-lg shadow-md">
          <thead>
            <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Item</th>
              <th className="py-3 px-6 text-left">Purchaser Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-right">Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {order.id}
                </td>
                <td className="py-3 px-6 text-left">{order.item}</td>
                <td className="py-3 px-6 text-left">{order.name}</td>
                <td className="py-3 px-6 text-left">{order.email}</td>
                <td className="py-3 px-6 text-left">{order.date}</td>
                <td className="py-3 px-6 text-right">${order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
