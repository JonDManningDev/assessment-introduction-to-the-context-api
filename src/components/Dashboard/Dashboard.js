import Tasks from "./Tasks";

function Dashboard({ tasks }) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <p>If you can see this, Qualified is updating with local changes.</p>
          <Tasks tasks={tasks} />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
