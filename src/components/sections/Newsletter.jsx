'use client'

import { useEffect, useRef, useState } from "react";

const DottedArrow = () => (
  <svg viewBox="0 0 12 14" className="h-3.5 w-3 text-[var(--newsletter-icon-color)]" fill="currentColor" aria-hidden="true">
    {[
      [2, 2],
      [6, 4.5],
      [10, 7],
      [6, 9.5],
      [2, 12],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="0.9" />
    ))}
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3 text-[var(--newsletter-text-dark)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 6.5 5 9.5 10 3" />
  </svg>
);


export default function Newsletter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [done, setDone] = useState(false);
  const wrapRef = useRef(null);

  const openPanel = () => {
    setDone(false);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!open) return openPanel();
    if (!agree || !email) return;
    setDone(true);
    setEmail("");
    setAgree(false);
  };

  return (
    <form
      ref={wrapRef}
      onSubmit={handleSubmit}
      className={`w-full border border-[var(--newsletter-border)] bg-[var(--newsletter-bg)] backdrop-blur-md transition-[border-radius] duration-300 lg:max-w-[var(--newsletter-max-width)] ${
        open ? "rounded-[var(--newsletter-radius-open)] sm:rounded-[var(--newsletter-radius-open-sm)]" : "rounded-[var(--newsletter-radius)]"
      }`}
    >
      <div className="flex h-[var(--newsletter-height)] items-stretch p-[var(--newsletter-padding)] md:h-[var(--newsletter-height-md)] lg:max-h-[var(--newsletter-max-height-lg)]">
        <input
          type="email"
          required={open}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={openPanel}
          onClick={openPanel}
          placeholder="Your email"
          aria-label="Your email"
          className="min-w-0 flex-1 bg-transparent px-6 text-[length:var(--newsletter-font-16)] font-medium text-white placeholder:text-white focus:outline-none sm:px-7 lg:max-w-[var(--newsletter-input-max-width)]"
        />
        {!open && (
          <button
            type="button"
            onClick={openPanel}
            className="flex h-[var(--newsletter-button-height)] items-center justify-between gap-4 rounded-[var(--newsletter-button-radius)] bg-white px-6 py-6 text-[length:var(--newsletter-font-18)] font-medium text-[var(--newsletter-text-dark)] transition-colors hover:bg-[var(--newsletter-hover-bg)] sm:w-[160px] lg:h-auto lg:max-w-[var(--newsletter-button-max-width)] lg:py-8 xl:max-h-[var(--newsletter-button-max-height-xl)] xl:min-w-[var(--newsletter-button-min-width-xl)] xl:px-[var(--newsletter-button-padding-x-xl)] xl:text-[length:var(--newsletter-font-24)]"
          >
            Submit
            <DottedArrow />
          </button>
        )}
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
            {done ? (
              <div className="py-2">
                <p className="text-[length:var(--newsletter-font-20)] font-medium leading-[var(--newsletter-line-26)] text-white sm:text-[length:var(--newsletter-font-22)]">Thanks for subscribing.</p>
                <p className="mt-2 text-[length:var(--newsletter-font-14)] leading-[var(--newsletter-line-20)] text-[var(--newsletter-white-80)]">Check your inbox for a confirmation email.</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 h-12 w-full rounded-full bg-white text-[length:var(--newsletter-font-15)] font-medium text-[var(--newsletter-text-dark)] transition-colors hover:bg-[var(--newsletter-hover-bg)]"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <label className="flex cursor-pointer items-start gap-3 text-[length:var(--newsletter-font-14)] font-medium leading-[var(--newsletter-line-20)] text-white">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    tabIndex={open ? 0 : -1}
                    className="peer sr-only"
                  />
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-[var(--newsletter-white-60)] bg-[var(--newsletter-white-10)] peer-checked:border-white peer-checked:bg-white peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--newsletter-focus-ring)]">
                    {agree && <Check />}
                  </span>
                  <span>I agree to receive the Retell newsletter and accept the data privacy statement.</span>
                </label>

                <button
                  type="submit"
                  tabIndex={open ? 0 : -1}
                  disabled={!agree || !email}
                  className="mt-5 h-12 w-full rounded-full bg-white text-[length:var(--newsletter-font-15)] font-medium text-[var(--newsletter-text-dark)] transition-colors hover:bg-[var(--newsletter-hover-bg)] disabled:cursor-not-allowed disabled:opacity-90 sm:h-[var(--newsletter-button-height)] lg:mt-6"
                >
                  Subscribe
                </button>

                <p className="mt-5 max-w-[var(--newsletter-text-max-width)] text-[length:var(--newsletter-font-13)] leading-[var(--newsletter-line-20)] text-[var(--newsletter-white-70)] sm:text-[length:var(--newsletter-font-14)]">
                  You can unsubscribe at any time using the link in any email. This site is protected by reCAPTCHA and the Google{" "}
                  <a href="#" tabIndex={open ? 0 : -1} className="font-bold underline">Privacy Policy</a> and{" "}
                  <a href="#" tabIndex={open ? 0 : -1} className="font-bold underline">Terms of Service</a> apply.
                </p>
                <p className="mt-3 max-w-[var(--newsletter-text-max-width)] text-[length:var(--newsletter-font-13)] leading-[var(--newsletter-line-20)] text-[var(--newsletter-white-70)] sm:text-[length:var(--newsletter-font-14)]">
                  We use Brevo as our marketing platform. By submitting this form you agree that the personal data you provided will be
                  transferred to Brevo for processing in accordance with{" "}
                  <a href="#" tabIndex={open ? 0 : -1} className="font-bold underline">Brevo’s Privacy Policy.</a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
