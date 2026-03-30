

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <p>{employee.salary}</p>
    </div>
  );
};

export default EmployeeCard;