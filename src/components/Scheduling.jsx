
function Scheduling() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Scheduling</h2>
      <div className="mb-4">
        <input type="text" placeholder="Event Title" className="border p-2 w-full mb-2" />
        <input type="date" className="border p-2 w-full mb-2" />
        <input type="time" className="border p-2 w-full mb-2" />
        <button className="bg-blue-500 text-white p-2 w-full">Add Event</button>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
        <ul>
          <li className="border p-2 mb-2">Event: Parent-Teacher Meeting - Date: 2023-06-15</li>
          <li className="border p-2 mb-2">Event: Science Fair - Date: 2023-07-01</li>
        </ul>
      </div>
    </div>
  );
}

export default Scheduling;
