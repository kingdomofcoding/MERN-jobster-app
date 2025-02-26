import "./form.css";
import { useEffect } from "react";
const Form = () => {
  useEffect(() => {
    const formControls = document.querySelectorAll(".form-control");

    formControls.forEach((control) => {
      const label = control.querySelector("label");
      const input = control.querySelector("input");

      if (label && input) {
        const labelWidth = label.offsetWidth;
        input.style.setProperty("--label-width", `${labelWidth}px`);
      }
    });
  }, []);

  return (
    <div>
      <form>
        <div className="form-container">
          <div className="form-section">
            <div className="form-control">
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-control">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-control">
              <label>E-mail Address</label>
              <input type="email" placeholder="E-mail Address" />
            </div>
            <div className="form-control">
              <label>Date of Birth</label>
              <input type="date" placeholder="Date of Birth" />
            </div>
            <div className="form-control">
              <label>Social Security Number</label>
              <input type="text" placeholder="Social Security Number" />
            </div>
          </div>
          <div className="section-banner">Personal Information</div>
        </div>
      </form>
    </div>
  );
};
export default Form;
