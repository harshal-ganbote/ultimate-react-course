import PropTypes from "prop-types";

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

StepMessage.propTypes = {
  step: PropTypes.number,
  children: PropTypes.node,
};

export default StepMessage;
