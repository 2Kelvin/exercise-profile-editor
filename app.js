var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function ProfileEditor() {
  var _React$useState = React.useState("Jane"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      firstName = _React$useState2[0],
      setFirstName = _React$useState2[1];

  var _React$useState3 = React.useState("Jacobs"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      lastName = _React$useState4[0],
      setLastName = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isEditing = _React$useState6[0],
      setIsEditing = _React$useState6[1];

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLasNameChange(e) {
    setLastName(e.target.value);
  }

  return React.createElement(
    "form",
    {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        setIsEditing(!isEditing);
      }
    },
    React.createElement(
      "label",
      null,
      "First name:",
      " ",
      isEditing ? React.createElement("input", { value: firstName, onChange: handleFirstNameChange }) : React.createElement(
        "b",
        null,
        firstName,
        " "
      )
    ),
    React.createElement(
      "label",
      null,
      "Last name:",
      " ",
      isEditing ? React.createElement("input", { value: lastName, onChange: handleLasNameChange }) : React.createElement(
        "b",
        null,
        lastName,
        " "
      )
    ),
    React.createElement(
      "button",
      { type: "submit" },
      isEditing ? "Save Profile" : "Edit Profile"
    ),
    React.createElement(
      "p",
      null,
      "Hello,",
      " ",
      React.createElement(
        "span",
        { className: "_name" },
        firstName,
        " ",
        lastName
      )
    )
  );
}

export default function App() {
  return React.createElement(ProfileEditor, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));