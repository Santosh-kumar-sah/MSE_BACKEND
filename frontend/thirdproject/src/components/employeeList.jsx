import EmployeeCard from "./employeeCard";
import "./employeeList.css";
function EmployeeList(){
    return (

        <div>
            <h2>Employee List</h2>
            <EmployeeCard employee={{ name: "John Doe", role: "Software Engineer", salary: "$75,000" }} />
            <EmployeeCard employee={{ name: "Jane Smith", role: "Project Manager", salary: "$85,000" }} />
            <EmployeeCard employee={{ name: "Emily Johnson", role: "UX Designer", salary: "$70,000" }} />    
        </div>
    )
}

export default EmployeeList;