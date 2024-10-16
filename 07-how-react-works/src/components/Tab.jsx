import PropTypes from "prop-types";

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

Tab.propTypes = {
  num: PropTypes.number,
  activeTab: PropTypes.number,
  onClick: PropTypes.func,
};

export default Tab;
