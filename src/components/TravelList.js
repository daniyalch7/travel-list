function TravelList({
  list,
  deleteListById,
  deleteList,
  handleItemClick,
  selectedItems,
  handleChangeSortBy,
}) {
  const handleDelete = (id) => {
    deleteListById(id);
  };

  const deleteListCompletely = () => {
    deleteList();
  };

  const handleCheck = (id) => {
    handleItemClick(id);
  };

  const renderedList = list.map((item) => {
    return (
      <li key={item.id}>
        <input
          onClick={() => handleCheck(item.id)}
          type="checkbox"
          value="true"
        />
        <span
          style={{
            textDecoration: selectedItems.has(item.id)
              ? "line-through"
              : "none",
          }}
        >
          {item.quantity} {item.text}
        </span>
        <button onClick={() => handleDelete(item.id)}>❌</button>
      </li>
    );
  });

  return (
    <div className="list">
      <ul>{list && renderedList}</ul>
      <div className="actions">
        <select onChange={handleChangeSortBy}>
          <option value="inputOrder">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={deleteListCompletely}>Clear list</button>
      </div>
    </div>
  );
}

export default TravelList;
