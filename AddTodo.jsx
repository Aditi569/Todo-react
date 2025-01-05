function AddTodo() {
    return (
        <div className="todo-input-container">
            <div className="row align-item-center">
                <div className="col-4">
                    <input type="text" placeholder="ADD NEW TODO" className="todo-input"/>
                </div>
                <div className="col-4">
                    <input type="date" className="todo-date"></input>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-succes">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );

}
export default AddTodo;
