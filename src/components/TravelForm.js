import { useState } from "react";

function TravelForm({ createList }) {
  const [text, setText] = useState("");
  const [val, setVal] = useState("1");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleVal = (event) => {
    const selectedValue = event.target.value;
    setVal(selectedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createList(text, val);
    setText("");
    setVal("1");
    document.getElementById("textField").focus();
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={handleVal} value={val}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <input
        onChange={handleText}
        type="text"
        placeholder="Item..."
        value={text}
        id="textField"
      />
      <button>Add</button>
    </form>
  );
}

export default TravelForm;
