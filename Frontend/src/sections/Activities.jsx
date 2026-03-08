function Activities() {

  const data = [
    "Islamic Education",
    "Community Welfare",
    "Charity Programs",
    "Madrasa Development"
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-green-900">
          Our Activities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {data.map((item,index)=>(
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-green-800">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Activities;