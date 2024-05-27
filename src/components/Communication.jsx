
function Communication() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Communication</h2>
      <div className="mb-4">
        <textarea placeholder="Message" className="border p-2 w-full mb-2" rows="4"></textarea>
        <button className="bg-blue-500 text-white p-2 w-full">Send Message</button>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Messages</h3>
        <ul>
          <li className="border p-2 mb-2">From: Admin - Message: School is closed tomorrow.</li>
          <li className="border p-2 mb-2">From: Teacher - Message: Homework due next week.</li>
        </ul>
      </div>
    </div>
  );
}

export default Communication;
