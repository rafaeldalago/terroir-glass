import React, { Activity, useState } from "react";

type State =
  | { status: "idle" }
  | { status: "processing" }
  | { status: "success" }
  | { status: "error"; message: string };

export const Form = () => {
  const [state, setState] = useState<State>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setState({ status: "processing" });
      e.preventDefault();
      const form = e.currentTarget;
      await new Promise((resolve) => setTimeout(() => resolve(""), 1000));
      setState({ status: "success" });
      form.reset();
    } catch (error) {
      setState({
        status: "error",
        message: "Your upgrade couldn’t be completed. Please try again.",
      });
    }
  };

  const isSuccess = state.status === "success";
  const isProcessing = state.status === "processing";

  const submitButtonTitle = isProcessing
    ? "Getting the glasses ready..."
    : "Upgrade my glassware";

  return (
    <section id="upgrade">
      <Activity mode={isSuccess ? "hidden" : "visible"}>
        <h3 style={{ marginBottom: "40px" }} className="heading">
          Upgrade now
        </h3>
        <form onSubmit={handleSubmit} aria-busy={isProcessing}>
          <label htmlFor="full_name">
            Full name
            <input
              title="Full name"
              id="full_name"
              name="full_name"
              pattern="[A-Za-z]{2,}\s[A-Za-z]{2,}[A-Za-z\s]*"
              required
            />
          </label>

          <label htmlFor="email">
            E-mail
            <input
              type="email"
              pattern=".+@.+\..+"
              title="E-mail"
              id="email"
              name="email"
              required
            />
          </label>

          <label htmlFor="phone_number">
            Phone number
            <input
              type="tel"
              inputMode="numeric"
              title="Phone Number"
              id="phone_number"
              name="phone_number"
              pattern="[0-9]{11}"
              minLength={11}
              maxLength={11}
              required
            />
          </label>
          <label htmlFor="zip_code">
            Zip Code
            <input
              title="Zip Code"
              id="zip_code"
              name="zip_code"
              minLength={8}
              maxLength={8}
              required
            />
          </label>
          <fieldset disabled={isProcessing}>
            <legend>Type of glass</legend>
            <div>
              <input
                type="radio"
                id="bordeaux"
                name="glassType"
                value="bordeaux"
                defaultChecked
              />
              <label htmlFor="bordeaux">Bordeaux</label>
            </div>
            <div>
              <input type="radio" id="white" name="glassType" value="white" />
              <label htmlFor="white">White</label>
            </div>
            <div>
              <input
                type="radio"
                id="champagne"
                name="glassType"
                value="champagne"
              />
              <label htmlFor="champagne">Champagne</label>
            </div>
          </fieldset>
          <label htmlFor="quantity">
            Quantity
            <input
              title="Quantity"
              type="number"
              id="quantity"
              name="quantity"
              inputMode="numeric"
              min={1}
              required
              defaultValue={1}
            />
          </label>
          <label htmlFor="observation">
            {`Observation (optional)`}
            <textarea id="observation" name="observation" rows={4} />
          </label>

          <button type="submit" disabled={state.status === "processing"}>
            {submitButtonTitle}
          </button>
          {state.status === "error" ? (
            <span className="error">{state.message}</span>
          ) : null}
        </form>
      </Activity>
      <Activity mode={!isSuccess ? "hidden" : "visible"}>
        <div
          id="success"
          aria-live="polite"
          aria-atomic
          className={isSuccess ? "activity visible" : "activity hidden"}
        >
          <p>Your upgrade is in motion.</p>
          <span>We’ll take it from here.</span>
          <div id="buttons">
            <button
              onClick={() => {
                document.getElementById("the-collection")?.scrollIntoView();
              }}
            >
              Continue browsing
            </button>
          </div>
        </div>
      </Activity>
    </section>
  );
};
