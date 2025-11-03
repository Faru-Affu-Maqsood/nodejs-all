import './Price.css';
const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
        />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
        />
        <span className="checkmark"></span>&#x20b9;0-&#x20b9;50
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
        />
        <span className="checkmark"></span>&#x20b9;50-&#x20b9;100
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
        />
        <span className="checkmark"></span>&#x20b9;100-&#x20b9;150
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
        />
        <span className="checkmark"></span>Over &#x20b9;150
      </label>
    </div>
  );
};

export default Price;
