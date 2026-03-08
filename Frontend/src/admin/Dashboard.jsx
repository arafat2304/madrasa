function Dashboard() {

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white shadow-lg p-6 rounded-lg">

          <h3 className="text-gray-600">
            Total Income
          </h3>

          <p className="text-2xl font-bold text-green-700">
            ₹5,40,000
          </p>

        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">

          <h3 className="text-gray-600">
            Total Expense
          </h3>

          <p className="text-2xl font-bold text-red-600">
            ₹3,10,000
          </p>

        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">

          <h3 className="text-gray-600">
            Balance
          </h3>

          <p className="text-2xl font-bold text-blue-600">
            ₹2,30,000
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;