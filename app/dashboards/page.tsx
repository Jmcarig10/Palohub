'use client';

export default function Dashboards() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
          <h2 className="text-2xl font-bold mb-4">🎮 Player Dashboard</h2>
          <p className="text-gray-600 mb-4">Manage your bookings, tournaments, and profile</p>
          <button className="btn-primary">Access Player Dashboard</button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
          <h2 className="text-2xl font-bold mb-4">🏆 Organizer Dashboard</h2>
          <p className="text-gray-600 mb-4">Create tournaments and manage participants</p>
          <button className="btn-secondary">Access Organizer Dashboard</button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
          <h2 className="text-2xl font-bold mb-4">⚙️ Admin Dashboard</h2>
          <p className="text-gray-600 mb-4">Manage courts, revenue, and platform settings</p>
          <button className="btn-accent">Access Admin Dashboard</button>
        </div>
      </div>
    </div>
  );
}
