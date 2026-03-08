function PropertySection() {

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-green-900">
          Waqf Properties
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-green-800">
              Madrasa Building
            </h3>
            <p className="text-gray-600 mt-2">
              Location : Gujarat
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-green-800">
              Madrasa Land
            </h3>
            <p className="text-gray-600 mt-2">
              Status : Development
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PropertySection;