import Communication from '../components/Communication';

function ParentDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Parent Dashboard</h1>
      <Communication />
    </div>
  );
}

export default ParentDashboard;
