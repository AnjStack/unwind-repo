import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Manage from "./Components/Manage";


function App() {
  return (
    <div className="min-h-screen w-full bg-[#f9f9ff] shadow-md border border-gray-200 flex flex-col px-8">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1 mt-8 gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <main className="flex-1 bg-white rounded-2xl shadow-sm p-8">
          {/* Default content */}
          <Manage />
          {/* Agar future me ManageClinic dikhana ho */}
          {/* <ManageClinic /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
