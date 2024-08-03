import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="m-3 row">
            <label htmlFor="name" className="col-sm-1 col-form-label">
              Name:
            </label>
            <div className="col-sm-11">
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="d-grid m-4">
            <button className="btn btn-primary" disabled={!name} type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SimpleForm;
