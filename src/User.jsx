// Task - User (Component)
// Presentation Component - Reusablity ⬆️
function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={`${name}'s profile pic`} />
      <p>
        Hello, <span>{name} </span>🎉🎉
      </p>
    </div>
  );
}
