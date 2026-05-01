export default function UpdateProfile() {
  return (
    <form className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Update Profile</h1>

      <input className="border p-2 w-full mb-2" placeholder="Name" />
      <input className="border p-2 w-full mb-2" placeholder="Image URL" />

      <button className="bg-blue-600 text-white px-4 py-2 w-full">
        Update
      </button>
    </form>
  );
}