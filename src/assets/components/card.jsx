export function Card({ name, job }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}
