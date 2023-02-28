import { useState, useRef, useEffect } from "react";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef();

  const handleSubmit = async (ev) => {
    // stop native form submission
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const url =
      "https://63a184ccba35b96522e0265d.mockapi.io/neduatech/api/v1/customers";

    setIsLoading(true);
    await fetch(url, {
      body: formData,
      method: "POST",
    });
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleBack = (ev) => {
    ev.preventDefault();
    setIsSubmitted(false);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
    <div>
      {/* If the form is submitted, we show this */}
      {isSubmitted ? (
        <>
            <div
              className="submitted-form-container"
            >
              <h1>Thank you!</h1>
              <p>
                Thank you for signing up! We are thrilled to have you join our
                community. Your information has been received and we will keep you
                updated with our latest news and offerings. In the meantime, feel
                free to explore our website and connect with us on social media. If
                you have any questions or concerns, please don't hesitate to contact
                us. Thank you again for your interest and support!
              </p>
              <div
                className="form-group"
              >
                <button href="#" className="btn-md btn-submit w-100" onClick={handleBack}>
                  Go Back
                </button>
              </div>
            </div>
        </>
      ) : (
        <>
          {/* if the form has not been submitted, we show this */}
          <form onSubmit={handleSubmit}>
            <div
              className="form-box"
            >
              <label>First Name:</label>
              <input
                required
                ref={inputRef}
                type="text"
                name="firstname"
                placeholder="i.e. John"
              />
            </div>
            <div
              className="form-box"
            >
              <label>Last Name:</label>
              <input
                required
                type="text"
                name="lastname"
                placeholder="i.e. Doe"
              />
            </div>
            <div
              className="form-box"
            >
              <label>Email:</label>
              <input
                required
                name="email"
                type="email"
                placeholder="i.e. user@example.com"
              />
            </div>

            {/* Subscribe button */}
            <div 
              className="form-group"
            >
              <button
                className="btn-md btn-submit w-100"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Please wait..." : "Subscribe"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
