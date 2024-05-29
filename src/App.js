import { useState } from "react";
import TravelFooter from "./components/TravelFooter";
import TravelHeader from "./components/TravelHeader";
import TravelList from "./components/TravelList";
import TravelForm from "./components/TravelForm";

function App() {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [sortBy, setSortBy] = useState("");

  console.log(selectedItems);

  const createList = (text, val) => {
    const updatedList = [
      ...originalList, // agr delete kreinge tou list mein se hoga ismein se nahi isliye iskay elements dobara se add hoajeyinge list mein iss liye humein call krna hai setOrignalList(upadtedList) in the deleteListById function mein
      { id: Math.floor(Math.random() * 99) + 1, quantity: val, text: text },
    ];
    setOriginalList(updatedList);
    setList(updatedList);
  };

  const deleteListById = (id) => {
    const updatedLists = list.filter((item) => item.id !== id);

    const updatedSelectedItems = new Set(
      [...selectedItems].filter((itemId) => itemId !== id)
    );

    setList(updatedLists);
    setSelectedItems(updatedSelectedItems);
    setOriginalList(updatedLists);
  };

  const deleteList = () => {
    setList([]);
    setOriginalList([]);
  };

  const handleItemClick = (id) => {
    const updatedSelectedItems = new Set(selectedItems);
    if (selectedItems.has(id)) {
      updatedSelectedItems.delete(id); // Remove from selected items if already selected
    } else {
      updatedSelectedItems.add(id); // Add to selected items if not selected
    }
    setSelectedItems(updatedSelectedItems);
  };

  const handleChangeSortBy = (event) => {
    const sortValue = event.target.value;
    if (sortValue === "inputOrder") {
      setList(originalList); // * Hamara data originalList mein para rahega agr hum decription se sort kreigne agr hum inputOrder kreinge tou hamara list state orignalState mein set hoajeygi. kyunke createList function mein hum usko bhi set krrahe hain or list ko bhi or list ko use krhee hain all over the app. and originalList just will be use for sorting
    } else {
      const sortedList = [...list].sort((a, b) => {
        if (sortValue === "description") {
          return a.text.localeCompare(b.text);
        }
        return a.id - b.id;
      });
      setList(sortedList);
    }
    setSortBy(sortValue);
  };

  return (
    <div className="app">
      <TravelHeader />
      <TravelForm createList={createList} />
      <TravelList
        list={list}
        deleteListById={deleteListById}
        deleteList={deleteList}
        handleItemClick={handleItemClick}
        selectedItems={selectedItems}
        handleChangeSortBy={handleChangeSortBy}
      />
      <TravelFooter list={list} selectedItems={selectedItems} />
    </div>
  );
}

export default App;
