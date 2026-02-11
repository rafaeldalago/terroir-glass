import React, { Activity, useRef, useState } from "react";

type State =
  | { status: "idle" }
  | { status: "processing" }
  | { status: "success" }
  | { status: "error"; message: string };

const GLASS_PRICES: Record<string, number> = {
  bordeaux: 32,
  white: 27,
  champagne: 26,
} as const;

export const Form = () => {
  const [state, setState] = useState<State>({ status: "idle" });
  const [totalPrice, setTotalPrice] = useState(GLASS_PRICES["bordeaux"]);
  const typeRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const calculateTotal = () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const glassType = formData.get("glassType") as keyof typeof GLASS_PRICES;
    const quantity = parseInt(formData.get("quantity") as string) || 1;

    const price = GLASS_PRICES[glassType] * quantity;
    setTotalPrice(price);
  };

  const handleIncrement = () => {
    if (!quantityRef.current) return;
    const quantity = parseInt(quantityRef.current.value) || 1;
    quantityRef.current.value = String(quantity + 1);
    calculateTotal();
  };

  const handleDecrement = () => {
    if (!quantityRef.current) return;
    const quantity = parseInt(quantityRef.current.value) || 1;
    if (quantity > 1) {
      quantityRef.current.value = String(quantity - 1);
      calculateTotal();
    }
  };

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    let formatted = "";
    if (value.length > 0) {
      formatted = "(" + value.substring(0, 2);
      if (value.length >= 3) {
        formatted += ") " + value.substring(2, 7);
      }
      if (value.length >= 8) {
        formatted += "-" + value.substring(7, 11);
      }
    }
    e.currentTarget.value = formatted;
  };

  const handleZipInput = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);

    let formatted = "";
    if (value.length > 0) {
      formatted = value.substring(0, 5);
      if (value.length >= 6) {
        formatted += "-" + value.substring(5, 8);
      }
    }
    e.currentTarget.value = formatted;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setState({ status: "processing" });
      e.preventDefault();
      const form = e.currentTarget;
      await new Promise((resolve) => setTimeout(() => resolve(""), 1000));
      setState({ status: "success" });
      form.reset();
      setTotalPrice(GLASS_PRICES["bordeaux"]);
    } catch (error) {
      setState({
        status: "error",
        message: "Your upgrade couldn't be completed. Please try again.",
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
        <form ref={formRef} onSubmit={handleSubmit} aria-busy={isProcessing}>
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
              placeholder="example@email.com"
              required
            />
          </label>

          <label htmlFor="phone_number">
            Phone number
            <input
              type="tel"
              title="Phone Number"
              id="phone_number"
              name="phone_number"
              placeholder="(XX) XXXXX-XXXX"
              onInput={handlePhoneInput}
              pattern="\(\d{2}\) \d{5}-\d{4}"
              maxLength={15}
              required
            />
          </label>
          <label htmlFor="zip_code">
            Zip Code
            <input
              title="Zip Code"
              id="zip_code"
              name="zip_code"
              placeholder="XXXXX-XXX"
              onInput={handleZipInput}
              pattern="\d{5}-\d{3}"
              maxLength={9}
              required
            />
          </label>
          <fieldset ref={typeRef} disabled={isProcessing}>
            <legend>Type of glass</legend>
            <div>
              <input
                type="radio"
                id="bordeaux"
                name="glassType"
                value="bordeaux"
                defaultChecked
                onChange={calculateTotal}
              />
              <label htmlFor="bordeaux">
                {`Bordeaux ($${String(GLASS_PRICES["bordeaux"])})`}
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="white"
                name="glassType"
                value="white"
                onChange={calculateTotal}
              />
              <label htmlFor="white">{`White ($${String(GLASS_PRICES["white"])})`}</label>
            </div>
            <div>
              <input
                type="radio"
                id="champagne"
                name="glassType"
                value="champagne"
                onChange={calculateTotal}
              />
              <label htmlFor="champagne">{`Champagne ($${String(GLASS_PRICES["champagne"])})`}</label>
            </div>
          </fieldset>
          <label htmlFor="quantity">
            Quantity
            <div style={{ display: "flex", flex: 1, gap: "1rem" }}>
              <button
                type="button"
                data-action="decrement"
                onClick={handleDecrement}
                style={{ width: "4rem" }}
                className="increment-decrement-button"
              >
                −
              </button>
              <input
                title="Quantity"
                type="number"
                id="quantity"
                name="quantity"
                inputMode="numeric"
                min={1}
                readOnly
                required
                ref={quantityRef}
                defaultValue={1}
                onChange={calculateTotal}
                onKeyDown={(e) => {
                  if (e.key === "0" && e.currentTarget.value === "") {
                    e.preventDefault();
                  }
                }}
                onInput={(e) => {
                  if (Number(e.currentTarget.value) < 1) {
                    e.currentTarget.value = "";
                  }
                }}
                style={{ width: "100%" }}
              />

              <button
                type="button"
                data-action="increment"
                onClick={handleIncrement}
                style={{ width: "4rem" }}
                className="increment-decrement-button"
              >
                +
              </button>
            </div>
          </label>

          <div
            style={{
              marginTop: "16px",
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            <span>Total: ${totalPrice.toFixed(2)}</span>
          </div>

          <label htmlFor="observation">
            {`Observation (optional)`}
            <textarea id="observation" name="observation" rows={4} />
          </label>

          <button
            type="submit"
            className="submit-button"
            disabled={state.status === "processing"}
            style={{ marginTop: "12px" }}
          >
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
          <span>We'll take it from here.</span>
          <div id="buttons">
            <button
              className="submit-button"
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
