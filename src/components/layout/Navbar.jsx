"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, ChevronUp, X, Menu } from "lucide-react";

const NAV = [
  {
    label: "Products",
    menu: {
      columns: [
        {
          title: "Build",
          links: [
            { label: "Call Transfer", href: "#" },
            { label: "Book Appointments", href: "#" },
            { label: "knowledge Base", href: "#" },
            { label: "Navigate IVR", href: "#" },
          ],
        },
        {
          title: "Deploy",
          links: [
            { label: "Batch Call", href: "#" },
            { label: "Brand Call ID", href: "#" },
            { label: "Verified Phone Number", href: "#" },
          ],
        },
        {
          title: "Monitor",
          links: [
            { label: "Post Call Analysis", href: "#" },
            { label: "AI Quality Asurance", href: "#" },
          ],
        },
      ], // shows partner card + customer stories collage
    },
  },
  {
    label: "Solutions",
    menu: {
      columns: [
        {
          title: "Industries",
          links: [
            { label: "Healthcare", href: "#" },
            { label: "Financial Services", href: "#" },
            { label: "Insurance", href: "#" },
            { label: "Logistics", href: "#" },
            { label: "Retail & Consumer Goods", href: "#" },
            { label: "Travel & Hospitality", href: "#" },
            { label: "Debt Collection", href: "#" },
          ],
        },
        {
          title: "Use cases",
          links: [
            { label: "Overview", href: "#" },
            { label: "AI Dispatch Service", href: "#" },
            { label: "Lead Qualification", href: "#" },
            { label: "AI Receptionist", href: "#" },
            { label: "AI Customer Service", href: "#" },
            { label: "AI Answering Service", href: "#" },
          ],
        },
      ],
      featured: true, // shows partner card + customer stories collage
    },
  },
  {
    label: "Developers",
    menu: {
       columns: [
        {
          title: "Resources",
          links: [
            { label: "Documentation", href: "#" },
            { label: "Status", href: "#" },
            { label: "Glossary", href: "#" },
            { label: "Learn", href: "#" },
          ],
        },
        {
          title: "Integrations",
          links: [
            { label: "Overview", href: "#" },
            { label: "Make", href: "#" },
            { label: "Twilio", href: "#" },
            { label: "Vonage", href: "#" },
            { label: "Go High Level", href: "#" },
            { label: "n8n", href: "#" },
            { label: "Hubspot", href: "#" },

          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    menu: {
       columns: [
        {
          title: "Build",
          links: [
            { label: "Blog", href: "#" },
            { label: "Changelog", href: "#" },
            { label: "Community", href: "#" },
            { label: "Events", href: "#" },
            { label: "Customers Stories", href: "#" },
          ],
        },
        {
          title: "Deploy",
          links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Newsroom", href: "#" },
            { label: "Brand Assets", href: "#" },
            { label: "Trust Center", href: "#" },
          ],
        },
        {
          title: "Monitor",
          links: [
            { label: "Solution Partner Program", href: "#" },
            { label: "Solution Partner Directory", href: "#" },
            { label: "App Partner Directory", href: "#" },
            { label: "Creators Partner", href: "#" },
          ],
        },
      ],
    },
  },
  { label: "Pricing", href: "#" },
];

const Logo = () => (
  <a
    href="#"
    className="flex items-center gap-2 w-[46px] h-[15px] lg:w-[86.63px] lg:h-[24.06px] text-[#151a4a]"
  >
    <Image src={"/images/logo.svg"} width={72} height={20} alt="Logo"></Image>
  </a>
);

const HeadsetIcon = () => (
  <img
    src="/images/headset.svg"
    alt="headset"
    width={20.5}
    height={20.5}
  />
);

const DotsArrowIcon = () => (
  <img
    src="/images/navbarsecright.svg"
    alt="Arrow"
    width={20.5}
    height={20.5}
  />
);

const ExternalArrowIcon = () => (
  <img
    src="/images/arrowup.svg"
    alt=""
    width={14}
    height={14}
    className="size-3.5 object-contain"
  />
);

function MegaPanel({ menu }) {
  return (
    <div className="min-h-[460px] rounded-2xl border border-black/5 bg-white p-[41px] shadow-[0_20px_60px_-15px_rgba(0,16,41,0.35)]">
      <div
        className={`grid gap-[2.5rem] ${
          menu.featured ? "grid-cols-[1fr_1fr_1.05fr]" : "grid-cols-3"
        }`}
      >
        {menu.columns.map((col) => (
          <div className="space-y-[2rem]" key={col.title}>
            <p className="mb-7  text-[15px] font-medium text-[#9a9bb0]">
              {col.title}
            </p>
            <ul className="space-y-[1.25rem]">
              {/* {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[17px] font-semibold text-[#151a4a] transition-colors hover:text-[#ffffff]"
                  >
                    {l.label}
                  </a>
                </li>
              ))} */}
              {col.links.map((l) => (
  <li key={l.label}>
    <a
      href={l.href}
      className="inline-flex items-center gap-1.5 text-[17px] font-semibold text-[#151a4a] hover:text-[#5f69c2]"
    >
      {l.label}

      {(l.label === "Documentation" || l.label === "Status") && (
        <ExternalArrowIcon />
      )}
    </a>
  </li>
))}
            </ul>
          </div>
        ))}

        {menu.featured && (
          <div>
            {/* Partner card */}
            <a
              href="#"
              className="flex h-[60px] items-stretch overflow-hidden rounded-lg bg-[#f7f7fb] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            >
              <span className="flex w-[60px] shrink-0 items-center justify-center bg-[#f1f1f7]">
                <HeadsetIcon />
              </span>
              <span className="flex flex-1 items-center justify-between gap-3 px-4">
                <span className="text-[16px] font-semibold leading-tight text-[#151a4a]">
                  Hire a certified Retell solution partner
                </span>
                <DotsArrowIcon />
              </span>
            </a>

            {/* Customer stories collage */}
            <div className="relative mt-10 h-[264px] w-[317.64px]">
              <img
                src="/images/navbarpic2.avif"
                alt="img1"
                className="absolute bottom-[38px] left-0 h-[178.06px] w-[144.38px] rounded-md bg-slate-200 object-cover"
              />
              <img
                src=" /images/navbarpic2.0.avif"
                alt="img 2"
                className="absolute right-0 top-0 h-[129.94px] w-[163.63px] rounded-md bg-slate-200 object-cover"
              />
              <img
                src="/images/navbarpic1.avif"
                alt="img 3"
                className="absolute bottom-0 right-0 h-[127.53px] w-[163.63px] rounded-md bg-slate-200 object-cover"
              />
              <a
                href="#"
                className="absolute left-1/2 top-[96px] -translate-x-[45%] whitespace-nowrap rounded-md bg-white px-4 py-2 text-[13px] font-semibold text-[#151a4a] shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
              >
                See Customer Stories
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(null); // desktop: label of open dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null); // mobile accordion

  const activeMenu = NAV.find((n) => n.label === open)?.menu;

  // Esc closes everything
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-[92.25px] py-[15px] px-[13px] "
      onMouseLeave={() => setOpen(null)}
    >
      {/* ---------------- Top bar ---------------- */}
      <div className=" ">
        <nav className="mx-auto flex sm:min-h-[61.5px] max-w-[1280px] items-center justify-between p-[6px] lg:p-[10px] max-lg:h-[61.5px] bg-white/80 rounded-2xl lg:max-w-[1160px]">
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV.map((item) =>
                item.menu ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      onMouseEnter={() => setOpen(item.label)}
                      onClick={() =>
                        setOpen(open === item.label ? null : item.label)
                      }
                      aria-expanded={open === item.label}
                      className={`flex items-center gap-1.5 ml-[.5px] rounded-md px-3 py-2 text-[14px] font-medium transition-colors ${
                        open === item.label
                          ? "text-[#151a4a]"
                          : "text-[#151a4a] hover:text-[#8e90a6]"
                      }`}
                    >
{/* 151a4a */}
                    
                      {item.label}
                      {open === item.label ? (
                        <ChevronUp className="size-3.5" />
                      ) : (
                        <ChevronDown className="size-3.5" />
                      )}
                    </button>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onMouseEnter={() => setOpen(null)}
                      className="rounded-md px-3 py-2 text-[14px] font-medium text-[#151a4a] transition-colors hover:text-[#151a4a]"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#" className="px-4 text-[14px] font-medium text-[#0d1233]">
              Login
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#f1f1f7] px-4 py-2.5 text-[14px] font-medium text-[#0d1233] transition-colors hover:bg-[#e8e8f1]"
            >
              Contact Sales
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#001029] px-4 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#0a1f45]"
            >
              Try For Free
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="#"
              className="rounded-lg bg-[#f1f1f7] px-4 py-2 text-[13px] font-semibold text-[#0d1233]"
            >
              Contact Sales
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#001029] px-4 py-2 text-[13px] font-semibold text-white hover"
            >
              Try For Free
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-1 text-[#0d1233]"
            >
              {mobileOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* ---------------- Desktop dropdown ---------------- */}
      {activeMenu && (
        <div className="absolute inset-0 top-full hidden lg:block">
          {/* pt-2 keeps hover alive while moving from bar to panel */}
          <div className="mx-auto flex max-w-[1280px] justify-end px-7 ">
            <div className="w-full max-w-[1100px] pb-[40px]">
              <MegaPanel menu={activeMenu} />
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Mobile menu ---------------- */}
      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[80px] px-[10px] pb-[10px] lg:hidden">
          <div className="h-full rounded-4xl bg-gradient-to-r from-pink-400 via-purple-700 to-blue-900 px-0.05 pb-0.5">
            <div className="h-full overflow-y-auto rounded-[23px] bg-white px-[20px] pt-6">
              <ul>
                {NAV.map((item) =>
                  item.menu ? (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(
                            expanded === item.label ? null : item.label,
                          )
                        }
                        aria-expanded={expanded === item.label}
                        className="flex w-full items-center justify-between py-[17px] text-[16px] font-semibold text-[#151a4a]"
                      >
                        {item.label}
                        <ChevronRight
                          className={`size-4 transition-transform ${
                            expanded === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {expanded === item.label && (
                        <div className="pb-4 pl-5">
                          {item.menu.columns.map((col) => (
                            <div key={col.title} className="mb-4">
                              <p className="my-[20px] text-[16px] font-medium text-[#9a9bb0]">
                                {col.title}
                              </p>
                              <ul className="space-y-3">
                                {col.links.map((l) => (
                                  <li key={l.label}>
                                    <a
                                      href={l.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="text-[15px] font-medium text-[#151a4a]"
                                    >
                                      {l.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-[17px] text-[16px] font-semibold text-[#151a4a]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ),
                )}
                <li>
                  <a
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className="block py-[17px] text-[16px] font-semibold text-[#151a4a] hover:bg-[#3724a3]"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
