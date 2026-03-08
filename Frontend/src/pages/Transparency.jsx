import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Transparency() {

  const donations = [
    { date: "12 Mar 2025", name: "Ahmed Patel", type: "Zakat", amount: 5000 },
    { date: "10 Mar 2025", name: "Yusuf Shaikh", type: "Lillah", amount: 2500 },
    { date: "05 Mar 2025", name: "Imran Khan", type: "Sadaqah", amount: 1200 },
    { date: "02 Mar 2025", name: "Abdul Rahman", type: "Donation", amount: 3000 }
  ];

  const expenses = [
    { name: "Electricity", amount: 2000 },
    { name: "Food", amount: 1500 }
  ];

  const totalIncome = donations.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <>
      <Navbar />

      {/* Header */}

      <section className="pt-32 pb-16 bg-green-900 text-white text-center">

        <h1 className="text-4xl font-bold">
          Financial Transparency
        </h1>

        <p className="mt-3 text-green-200">
          Madrasa e Nurool Islam – Donation Records
        </p>

      </section>

      {/* Table */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Donation Records
          </h2>

          {/* Scroll container */}

          <div className="overflow-x-auto rounded-lg shadow">

            <table className="min-w-[600px] w-full bg-white">

              <thead className="bg-green-900 text-white">

                <tr>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Donor Name</th>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-right">Amount</th>
                </tr>

              </thead>

              <tbody>

                {donations.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-4">{item.date}</td>

                    <td className="p-4 font-medium">
                      {item.name}
                    </td>

                    <td className="p-4">

                      <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        {item.type}
                      </span>

                    </td>

                    <td className="p-4 text-right font-semibold text-green-700">
                      ₹{item.amount}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Summary */}

          <div className="mt-10 overflow-x-auto">

            <table className="min-w-[400px] w-full bg-white rounded-lg shadow">

              <tbody>

                <tr className="border-b">

                  <td className="p-4 font-medium">
                    Kul Aavak (Total Income)
                  </td>

                  <td className="p-4 text-right text-green-700 font-bold">
                    ₹{totalIncome}
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="p-4 font-medium">
                    Kul Javak (Total Expense)
                  </td>

                  <td className="p-4 text-right text-red-600 font-bold">
                    ₹{totalExpense}
                  </td>

                </tr>

                <tr className="bg-gray-50">

                  <td className="p-4 font-semibold">
                    Save Money
                  </td>

                  <td className="p-4 text-right text-blue-600 font-bold">
                    ₹{balance}
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Transparency;