import AttendanceTracking from '../components/AttendanceTracking';

function TeacherDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>
      <AttendanceTracking />
    </div>
  );
}

export default TeacherDashboard;