import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
     <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Task Management Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Organize your tasks and stay productive.
          </p>
        </header>

      <Dashboard />
    </div>
    </div>
    
  );
}

export default App;