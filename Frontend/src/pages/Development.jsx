import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

function Development() {

  const projects = [
    {
      title: "Madrasa Building Renovation",
      before: "/images/before1.jpg",
      after: "/images/after1.jpg",
      description: "Old madrasa building renovated and classrooms improved."
    },
    {
      title: "Student Hostel Development",
      before: "/images/before2.jpg",
      after: "/images/after2.jpg",
      description: "Hostel rooms improved for madrasa students."
    }
  ];

  return (
    <>
      

      {/* Header */}

      <section className="pt-32 pb-16 bg-green-900 text-white text-center">

        <h1 className="text-4xl font-bold">
          Our Work & Development
        </h1>

        <p className="mt-3 text-green-200">
          Projects completed by Madrasa Team
        </p>

      </section>

      {/* Projects */}

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {projects.map((project, index) => (

            <div key={index}>

              <h2 className="text-2xl font-semibold text-green-900">
                {project.title}
              </h2>

              <p className="text-gray-600 mt-2 mb-6">
                {project.description}
              </p>

              <BeforeAfterSlider
                before={project.before}
                after={project.after}
              />

            </div>

          ))}

        </div>

      </section>

      
    </>
  );
}

export default Development;