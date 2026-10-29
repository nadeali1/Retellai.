"use client"

import { useId, useState } from "react";

/**
 * AI Voice Agent FAQs - accordion with 10 questions
 *
 * - Click a question (or its round button) to open it.
 * - The button icon flips 180deg instantly (no slow rotation) when the
 *   answer opens, and flips back when it closes. Height still animates.
 * - Each FAQ opens and closes on its own: opening one never closes another.
 *   (Set ALLOW_MULTIPLE = false if you ever want one-at-a-time.)
 * - Responsive: same component for desktop and phone.
 *
 * YOUR ICON IMAGE:
 *   import arrow from "./assets/arrow-dots.png";
 *   const ICON_SRC = arrow;
 * It should point DOWN in its normal state (closed). When opened it rotates
 * to point UP. If your image already points UP, set ICON_POINTS_UP = true.
 * With ICON_SRC = null a built-in dotted chevron is used instead.
 */

const ICON_SRC = null;
const ICON_POINTS_UP = false;
const ALLOW_MULTIPLE = true;
const OPEN_FIRST_BY_DEFAULT = true;

// Replace the answers (and questions 7-10) with your real content.
const FAQS = [
  {
    q: "What is an AI voice agent?",
    a: (
      <>
        An AI voice agent is an autonomous system that can listen, speak, and
        hold natural phone conversations like a human. It uses speech
        recognition, large language models, and text-to-speech technology to
        understand callers, respond intelligently, maintain context, and take
        actions such as booking appointments or updating systems without
        relying on rigid scripts or human intervention.
      </>
    ),
  },
  {
    q: "Which is the best AI voice agent?",
    a: (
      <>
        The best AI voice agent depends on what you need it to do. For
        production phone calls, evaluate platforms on four things: workflow
        accuracy on multi-step calls, latency under real network conditions,
        how much of the agent logic you control, and whether you can test on
        your own traffic before committing. In an{" "}
        <strong>independent Cekura benchmark across 414 calls</strong>, Retell
        AI scored 95.7% workflow accuracy, the highest of six platforms tested.
        See how Retell AI <strong>compares to other platforms.</strong>
      </>
    ),
  },
  {
    q: "How much do AI voice agents cost?",
    a: "AI voice agent pricing is usually charged per minute of call time. Retell AI runs $0.07 to $0.31 per minute for voice agents depending on the models, voice, and add-ons you select, with no annual contract and no per-resolution charge. Chat agents start at $0.002 per message. You can estimate your cost on the pricing page, or compare enterprise plans.",
  },
  {
    q: "Do the AI voice agents sound like a real person?",
    a: "Most people cannot tell on a short call. Voice quality comes down to three things: the underlying speech model, response latency, and how the agent handles interruptions. Retell AI agents handle mid-sentence interruptions and natural turn-taking rather than waiting for a full pause, and can transfer to a human mid-call when a conversation needs one. The fastest way to judge it is to hear one, so try the live demo.",
  },
  {
    q: "Is using AI voice illegal?",
    a: "No, using AI voice agents is legal in the United States, but it is regulated. Outbound calling requires prior consent under the TCPA, some states require disclosure that the caller is automated, and call recording consent rules vary by state. The FCC has ruled that AI-generated voices in robocalls fall under existing TCPA restrictions. Compliance depends on how the platform is used, not on the platform itself. Our Trust Center covers how Retell AI handles security and compliance.",
  },
  {
    q: "Is there a free AI voice agent available?",
    a: "Yes. Retell AI gives you $10 in free credits at signup with full platform access and no contract, which covers building an agent, simulation testing, and live test calls, along with 20 free concurrent calls. After the credits run out you pay per minute with no commitment. See pricing and plans.",
  },
  {
    q: "How do Retell AI voice agents work?",
    a: "Retell AI is a real-time conversational AI platform that uses proprietary voice AI orchestration with low-latency speech recognition, LLM-powered conversation understanding, and real-time function calling. The platform features a ~600ms latency (industry-leading responsiveness), ultra-realistic voices built from real performance data, and proprietary turn-taking models that know when to speak and listen.​",
  },
  {
    q: "How do I create AI voice agent with Retell AI?",
    a: "Creating a voice AI agent with Retell is easy! Sign up for a free account on the Retell dashboard, where you’ll receive $10 of free usage. From there, you can customize and configure your AI voice agent, integrating it seamlessly with your company’s data and workflows",
  },
  {
    q: "Can I connect agent to my existing phone number?",
    a: "Yes. Retell supports integration with any telephony system through SIP trunking, making it easy to connect your existing phone number and deploy your AI-powered answering service or AI IVR without changing infrastructure.",
  },
  {
    q: "What is an AI call center?",
    a: "An AI call center uses AI phone agents to handle customer calls instead of routing every interaction to a person. The agent answers, understands what the caller wants, resolves routine requests, and escalates complex ones to a human with full context attached. ",
  },
  {
    q: "How do AI call centers actually function?",
    a: "AI call centers layer four technologies into one pipeline: a voice engine that converts speech to text and back in ~600ms, intent detection that identifies caller needs and pulls CRM history instantly, telephony APIs (Twilio, Vonage, SIP) that plug into your existing phone system, and post-call automation that logs data, creates tickets, and triggers follow-ups without human intervention.",
  },
  {
    q: "Can AI replace call center agents?",
    a: "No. AI phone agents handle repetitive, high-volume work like appointment booking, order status, and qualification, which frees your team for calls that need judgment or empathy. Most Retell AI deployments run a hybrid model: the voice agent takes the routine volume and hands off to a person when the conversation calls for it.",
  },
  {
    q: "What can a Retell AI voice agent do on a call?",
    a: "It answers inbound calls and places outbound ones, qualifies leads, books appointments, checks order status, and routes or transfers to a live agent when needed. Mid-call, it can pull and push data through your existing systems, so it acts on real customer information rather than reading from a script.",
  },
  {
    q: "What are the main benefits of using an AI call center?",
    a: "Shorter wait times, calls answered 24/7, lower cost per call, and capacity that scales with volume instead of headcount. Because the agent handles routine calls end to end, average handle time drops and your team spends its hours on higher-value conversations.",
  },
  {
    q: "How does Retell AI improve performance and quality assurance?",
    a: "Every call is transcribed and available for review, so you evaluate 100 percent of interactions instead of a manual sample. Transcripts and call data surface recurring issues, drop-off points, and coaching opportunities across your full call volume, not a handful of spot checks.",
  },
  {
    q: "Does Retell AI’s AI call center offer multilingual support?",
    a: "Yes. Voice agents can hold conversations in multiple languages, so you serve customers in their preferred language without staffing separate multilingual teams.",
  },
  {
    q: "How does Retell AI connect to my existing tools?",
    a: "Retell AI integrates with CRMs, calendars, and telephony through native connectors and APIs. The agent reads customer context before and during the call and writes outcomes back automatically, so records stay current without manual entry.",
  },
  {
    q: "How is an AI phone agent different from traditional IVR?",
    a: "Traditional IVR forces callers through fixed menus most people try to skip. A Retell AI voice agent understands natural speech, lets the caller say what they need in their own words, resolves simple requests directly, and routes the rest without menu trees.",
  },
];

function Icon() {
  if (ICON_SRC) {
    return <img src={ICON_SRC} alt="" className="faq__img" />;
  }
  // built-in dotted chevron (points down)
  const pts = [
    [5, 9],
    [8.5, 12],
    [12, 15],
    [15.5, 12],
    [19, 9],
  ];
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      {pts.map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="1.3" fill="#2b2b33" />
      ))}
    </svg>
  );
}

function Item({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className={`faq__item ${open ? " is-open" : ""}`}>
      <h3 className="faq__heading">
        <button
          type="button"
          className="faq__q"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span
            className={`faq__btn${ICON_POINTS_UP ? " faq__btn--up" : ""}`}
            aria-hidden="true"
          >
            <Icon />
          </span>
        </button>
      </h3>

      <div
        className="faq__panel"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
      >
        <div className="faq__panelInner">
          <p className="faq__a">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openSet, setOpenSet] = useState(
    () => new Set(OPEN_FIRST_BY_DEFAULT ? [0] : [])
  );

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(ALLOW_MULTIPLE ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <>
      <style>{css}</style>
      <section className="faq">
        <div className="faq__head">
          <span className="faq__eyebrow">FAQ</span>
          <h2 className="faq__title">AI Voice Agent FAQs</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              open={openSet.has(i)}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

const css = `

.faq {
  // font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  color: #1c1c28;
  background: #fff;
  padding: 48px 20px 80px;
}

.faq__head {
  text-align: center;
  margin-bottom: 72px;
}

.faq__eyebrow {
  font-size: 13px;
  font-weight: 600;
  color: #3f6df2;
}

.faq__title {
  margin: 28px 0 0;
  font-size: clamp(30px, 5vw, 52px);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.faq__list {
  max-width: 1160px;
  margin: 0 auto;
  border-top: 1px solid #dcdce8;
}

.faq__item {
  border-bottom: 1px solid #dcdce8;
}

.faq__heading {
  margin: 0;
  font-weight: 400;
}

.faq__q {
  appearance: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 20px 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  font: inherit;
  font-size: clamp(17px, 2.4vw, 20px);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.faq__q:focus-visible {
  outline: 2px solid #3f6df2;
  outline-offset: 2px;
  border-radius: 6px;
}

/* Icon button */
.faq__btn {
  flex: none;
  display: grid;
  place-items: center;
  width: 52px;
  height: 44px;
  border-radius: 22px;
  background: #f4f4f8;

  transform: rotate(0deg);
  transition: transform 0.35s ease;
}

.faq__item.is-open .faq__btn {
  transform: rotate(180deg);
}

.faq__img {
  width: 22px;
  height: 22px;
  display: block;
}

/* Answer open/close animation */
.faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition:
    grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0s linear 0.45s;
}

.faq__item.is-open .faq__panel {
  grid-template-rows: 1fr;
  visibility: visible;
  transition:
    grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0s;
}

.faq__panelInner {
  min-height: 0;
  overflow: hidden;
}

.faq__a {
  max-width: 1100px;
  margin: 0;
  padding: 0 0 32px;
  font-size: clamp(15px, 2vw, 17px);
  line-height: 1.5;
  letter-spacing: -0.01em;

  opacity: 0;
  transform: translateY(-8px);
  transition:
    opacity 0.25s ease,
    transform 0.35s ease;
}

.faq__item.is-open .faq__a {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.08s;
}

@media (max-width: 639px) {
  .faq {
    padding: 32px 16px 56px;
  }

  .faq__head {
    margin-bottom: 40px;
  }

  .faq__btn {
    width: 44px;
    height: 40px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .faq__btn,
  .faq__panel,
  .faq__a {
    transition: none;
  }

  .faq__a {
    transform: none;
  }
}

`;
