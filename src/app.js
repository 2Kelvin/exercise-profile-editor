function ProfileEditor() {
  const [firstName, setFirstName] = React.useState("Jane");
  const [lastName, setLastName] = React.useState("Jacobs");
  const [inputActive, setInputActive] = React.useState(false);
  const [editMode, setEditMode] = React.useState(true);

  function handleClick() {
    // e.preventDefault;
    setEditMode(true);
  }

  return (
    <form>
      <label>First name: {editMode ? <b>{firstName} </b> : <input />}</label>
      <label>Last name: {editMode ? <b>{lastName} </b> : <input />}</label>
      <button type="submit" onClick={handleClick}>
        {editMode ? "Edit Profile" : "Save Profile"}
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}

export default function App() {
  return <ProfileEditor />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
