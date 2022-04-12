import { getDatabase, update, ref } from "firebase/database";

function Task(props) {

    // function updateStatus(value) {
    //     const db = getDatabase();
    //     console.log("WORKING")
    //     update(ref(db, 'tasks/' + props.id), {
    //         status: value
    //     })
    // }

    return (
        <div className="task">
            <p>{props.name}</p>
            <p>{props.description}</p>
            <label>Assigned To:</label>
            <select className="statusDropdown" name="assigneeDropdown" id="assignee">
                <option>Member 1</option>
            </select>

            <div className="statusSelect">
                <label htmlFor="status">Status:</label>
                <select className="statusDropdown" name="statusDropdown" id="status">
                    <option value="new">New</option>
                    <option value="in progress">In Progress</option>
                    <option value="complete">Complete</option>
                </select>
            </div>
        </div>
    )
}
export default Task;