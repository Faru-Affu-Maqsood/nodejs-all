import './Category.css';
const Category = () => {
  return (
    <div className="category-container">
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
          />
          <span className="checkmark"></span>All
        </label>
        <br />

        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
          />
          <span className="checkmark"></span>Sneaker
        </label>
        <br />

        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
          />
          <span className="checkmark"></span>Flats
        </label>
        <br />

        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
          />
          <span className="checkmark"></span>Sandals
        </label>
        <br />

        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
          />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  );
};

export default Category;
