'use client'

import { useEffect, useRef, useState } from "react";

const DottedArrow = () => (
  <svg viewBox="0 0 12 14" className="h-3.5 w-3 text-[#1a1d2e]" fill="currentColor" aria-hidden="true">
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
  <svg viewBox="0 0 12 12" className="h-3 w-3 text-[#0b1230]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      className={`w-full border border-white/25 bg-white/20 backdrop-blur-md transition-[border-radius] duration-300 lg:max-w-[800px] ${
        open ? "rounded-[24px] sm:rounded-[28px]" : "rounded-[22px]"
      }`}
    >
      <div className="flex h-[60px] items-stretch p-[2px] md:h-[71px] lg:max-h-[117px]">
        <input
          type="email"
          required={open}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={openPanel}
          onClick={openPanel}
          placeholder="Your email"
          aria-label="Your email"
          className="min-w-0 flex-1 bg-transparent px-6 text-[16px] font-medium text-white placeholder:text-white focus:outline-none sm:px-7 lg:max-w-[733px]"
        />
        {!open && (
          <button
            type="button"
            onClick={openPanel}
            className="flex h-[52px] items-center justify-between gap-4 rounded-[19px] bg-white px-6 py-6 text-[18px] font-medium text-[#0b1230] transition-colors hover:bg-[#f1f2f8] sm:w-[160px] lg:h-auto lg:max-w-[282px] lg:py-8 xl:max-h-[106px] xl:min-w-[290px] xl:px-[53px] xl:text-[24px]"
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
                <p className="text-[20px] font-medium leading-[26px] text-white sm:text-[22px]">Thanks for subscribing.</p>
                <p className="mt-2 text-[14px] leading-[20px] text-white/80">Check your inbox for a confirmation email.</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 h-12 w-full rounded-full bg-white text-[15px] font-medium text-[#0b1230] transition-colors hover:bg-[#f1f2f8]"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <label className="flex cursor-pointer items-start gap-3 text-[14px] font-medium leading-[20px] text-white">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    tabIndex={open ? 0 : -1}
                    className="peer sr-only"
                  />
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-white/60 bg-white/10 peer-checked:border-white peer-checked:bg-white peer-focus-visible:ring-2 peer-focus-visible:ring-white/80">
                    {agree && <Check />}
                  </span>
                  <span>I agree to receive the Retell newsletter and accept the data privacy statement.</span>
                </label>

                <button
                  type="submit"
                  tabIndex={open ? 0 : -1}
                  disabled={!agree || !email}
                  className="mt-5 h-12 w-full rounded-full bg-white text-[15px] font-medium text-[#0b1230] transition-colors hover:bg-[#f1f2f8] disabled:cursor-not-allowed disabled:opacity-90 sm:h-[52px] lg:mt-6"
                >
                  Subscribe
                </button>

                <p className="mt-5 max-w-[560px] text-[13px] leading-[20px] text-white/70 sm:text-[14px]">
                  You can unsubscribe at any time using the link in any email. This site is protected by reCAPTCHA and the Google{" "}
                  <a href="#" tabIndex={open ? 0 : -1} className="font-bold underline">Privacy Policy</a> and{" "}
                  <a href="#" tabIndex={open ? 0 : -1} className="font-bold underline">Terms of Service</a> apply.
                </p>
                <p className="mt-3 max-w-[560px] text-[13px] leading-[20px] text-white/70 sm:text-[14px]">
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
