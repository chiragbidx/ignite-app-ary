export default function ClientsPage() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold mb-2">Clients</h2>
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold mb-3">No Clients Yet</p>
        <p className="mb-6 text-gray-600">
          Add your first client to start managing relationships and projects.
        </p>
        <button className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          Add Client
        </button>
      </div>
    </section>
  );
}