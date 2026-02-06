import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <p className="loader-text">Loading products...</p>
    </div>
  );
}
