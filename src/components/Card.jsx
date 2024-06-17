import "./Card.css";

export function Card({ name, job, imgurl }) {
  return (
    <div className="card">
      <img src={imgurl} alt="Jane Doe" width="200" />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}
