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
      ],
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
      featured: true, 
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
    className="flex items-center gap-2 w-[var(--logo-width)] h-[var(--logo-height)] lg:w-[var(--logo-width-lg)] lg:h-[var(--logo-height-lg)] text-[var(--color-navy)]"
  >
    <Image src={"/images/logo.svg"} width={72} height={20} alt="Logo"></Image>
  </a>
);

const HeadsetIcon = () => (
  <img src="/images/headset.svg" alt="headset" width={20.5} height={20.5} />
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
    <div className="min-h-[var(--mega-min-height)] rounded-2xl border border-black/5 bg-white p-[var(--mega-padding)] shadow-[var(--shadow-mega-menu)]">
      <div
        className={`grid gap-[2.5rem] ${
          menu.featured ? "grid-cols-[1fr_1fr_1.05fr]" : "grid-cols-3"
        }`}
      >
        {menu.columns.map((col) => (
          <div className="space-y-[2rem]" key={col.title}>
            <p className="mb-7 text-[length:var(--font-15)] font-medium 	text-[var(--color-muted)]">
              {col.title}
            </p>
            <ul className="space-y-[1.25rem]">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-[length:var(--text-xl)] font-semibold text-[var(--color-navy)] hover:text-[var(--color-purple-hover)]" >
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
            <a
              href="#"
              className="flex h-[var(--mega-card-height)] items-stretch overflow-hidden rounded-lg bg-[var(--color-card)] shadow-[var(--shadow-small)]"
            >
              <span className="flex w-[var(--mega-card-width)] shrink-0 items-center justify-center bg-[#f1f1f7]">
                <HeadsetIcon />
              </span>
              <span className="flex flex-1 items-center justify-between gap-3 px-4">
                <span className="text-[length:var(--font-16)] font-semibold leading-tight text-[var(--color-navy)]">
                  Hire a certified Retell solution partner
                </span>
                <DotsArrowIcon />
              </span>
            </a>

            <div className="relative mt-10 h-[var(--mega-image-container-height)] w-[var(--mega-image-container-width)]">
              <img
                src="/images/navbarpic2.avif"
                alt="img1"
                className="absolute bottom-[var(--mega-image-bottom)] left-0 h-[var(--mega-image-one-height)] w-[var(--mega-image-one-width)] rounded-md bg-[var(--color-slate)] object-cover"
              />
              <img
                src=" /images/navbarpic2.0.avif"
                alt="img 2"
                className="absolute right-0 top-0 h-[var(--mega-image-two-height)] w-[var(--mega-image-two-width)] rounded-md bg-[var(--color-slate)] object-cover"
              />
              <img
                src="/images/navbarpic1.avif"
                alt="img 3"
                className="absolute bottom-0 right-0 h-[var(--mega-image-three-height)] w-[var(--mega-image-two-width)] rounded-md bg-[var(--color-slate)] object-cover"
              />
              <a
                href="#"
                className="absolute left-1/2 top-[var(--mega-story-top)] -translate-x-[45%] whitespace-nowrap rounded-md bg-white px-4 py-2 text-[length:var(--font-13)] font-semibold text-[var(--color-navy)]shadow-[var(--shadow-card)]"
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
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const activeMenu = NAV.find((n) => n.label === open)?.menu;

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)] py-[var(--nav-header-padding-y)] px-[var(--nav-header-padding-x)] "
      onMouseLeave={() => setOpen(null)}
    >
      <div className=" ">
        <nav className="mx-auto flex sm:min-h-[var(--navbar-height)] max-w-[var(--container-width)] items-center justify-between p-[6px] lg:p-[var(--nav-padding-lg)] max-lg:h-[61.5px] bg-[var(--color-white-transparent)] rounded-2xl lg:max-w-[var(--navbar-width)]">
          <div className="flex items-center gap-8">
            <Logo />

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
                      className={`flex items-center gap-1.5 ml-[var(--nav-item-margin-left)] rounded-md px-3 py-2 text-[length:var(--text-base)] font-medium transition-colors ${
                        open === item.label
                          ? "text-[var(--color-navy)]"
                          : "text-[var(--color-navy)] hover:text-[var(--color-muted-hover)]"
                      }`}
                    >
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
                      className="rounded-md px-3 py-2 text-[length:var(--text-base)] font-medium text-[var(--color-navy)] transition-colors hover:text-[var(--color-navy)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#" className="px-4 text-[length:var(--text-base)] font-medium text-[var(--color-navy)]">
              Login
            </a>
            <a
              href="#"
              className="rounded-lg bg-[var(--color-light)] px-4 py-2.5 text-[length:var(--text-base)] font-medium text-[var(--color-navy)] transition-colors hover:bg-[var(--color-light-hover)]"
            >
              Contact Sales
            </a>
            <a
              href="#"
              className="rounded-lg bg-[var(--color-navy)] px-4 py-2.5 text-[length:var(--text-base)] font-medium text-white transition-colors hover:bg-[var(--color-navy)]"
            >
              Try For Free
            </a>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="#"
              className="rounded-lg bg-[var(--color-light)] px-4 py-2 text-[length:var(--font-13)] font-semibold text-[var(--color-dark-navy)]"
            >
              Contact Sales
            </a>
            <a
              href="#"
              className="rounded-lg bg-[var(--color-dark-navy)] px-4 py-2 text-[length:var(--font-13)] font-semibold text-white hover"
            >
              Try For Free
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-1 text-[var(--color-dark-navy)]"
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

      {activeMenu && (
        <div className="absolute inset-0 top-full hidden lg:block">
          <div className="mx-auto flex max-w-[var(--container-width)] justify-end px-7 ">
            <div className="w-full max-w-[var(--mega-panel-width)] pb-[40px]">
              <MegaPanel menu={activeMenu} />
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[var(--mobile-menu-top)] px-[var(--mobile-menu-padding)] pb-[var(--mobile-menu-padding)] lg:hidden">
          <div className="h-full rounded-4xl bg-[image:var(--background-image-primary)] px-0.05 pb-0.5">
            <div className="h-full overflow-y-auto rounded-[var(--mobile-menu-radius)] bg-white px-[var(--mobile-menu-inner-padding)] pt-6">
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
                        className="flex w-full items-center justify-between py-[17px] text-[length:var(--font-16)] font-semibold text-[var(--color-navy)]"
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
                              <p className="my-[var(--mobile-menu-title-margin)] text-[length:var(--font-16)] font-medium	text-[var(--color-muted)]">
                                {col.title}
                              </p>
                              <ul className="space-y-3">
                                {col.links.map((l) => (
                                  <li key={l.label}>
                                    <a
                                      href={l.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="text-[length:var(--font-15)] font-medium text-[var(--color-navy)]"
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
                        className="block py-[17px] text-[length:var(--font-16)] font-semibold text-[var(--color-navy)]"
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
                    className="block py-[17px] text-[length:var(--font-16)] font-semibold text-[var(--color-navy)] hover:bg-[#3724a3]"
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
