function TodoAd() {
  let todoName = "Go to school";
  let todoDate = "4/10/2024";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoAd;
