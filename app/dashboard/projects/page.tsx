export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold mb-3">No Projects Yet</p>
        <p className="mb-6 text-gray-600">
          Create your first project to kick off your agency’s work.
        </p>
        <button className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          Add Project
        </button>
      </div>
    </section>
  );
}