function ProfileEditor() {
  const [firstName, setFirstName] = React.useState("Jane");
  const [lastName, setLastName] = React.useState("Jacobs");
  const [isEditing, setIsEditing] = React.useState(false);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLasNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        First name:{" "}
        {isEditing ? (
          <input value={firstName} onChange={handleFirstNameChange} />
        ) : (
          <b>{firstName} </b>
        )}
      </label>
      <label>
        Last name:{" "}
        {isEditing ? (
          <input value={lastName} onChange={handleLasNameChange} />
        ) : (
          <b>{lastName} </b>
        )}
      </label>
      <button type="submit">
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
      <p>
        Hello,{" "}
        <span className="_name">
          {firstName} {lastName}
        </span>
      </p>
    </form>
  );
}

export default function App() {
  return <ProfileEditor />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
