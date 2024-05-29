function TravelFooter({ list, selectedItems }) {
  return (
    <div className="stats">
      {list.length > 0 ? (
        selectedItems.size === list.length ? (
          <p>You got everything! Ready to go ✈️</p> // agr ye 2 conditions sahi hain tou ye dekhau.. You got everything! ready to go wrna neeche waley
        ) : (
          <p>
            💼 You have {list.length} items on your list, and you already packed{" "}
            {selectedItems.size} (
            {Math.floor((selectedItems.size / list.length) * 100)}%)
          </p>
        )
      ) : (
        <p>Start adding some items to your packing list 🚀</p>
      )}
    </div>
  );
}

export default TravelFooter;
