import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return(
    <label>
        <p>Find contacts by name:</p>
        <input type="text" value={value} onChange={onChange} />
    </label>
  )   
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Filter;