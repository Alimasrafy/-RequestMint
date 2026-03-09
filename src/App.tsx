import { useEffect, useMemo, useState, type FormEvent } from "react";

type BetaSignup = {
  name: string;
  email: string;
  role: string;
  createdAt: string;
};

type SliderControlProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  valueLabel: string;
  onChange: (value: number) => void;
};

type MetricProps = {
  label: string;
  value: string;
  hint: string;
};

const pipelineSteps = [
  {
    number: "01",
    title: "Capture demand",
    description:
      "Sync support inboxes, WhatsApp exports, DMs, surveys, and call transcripts into one stream of repeated asks.",
  },
  {
    number: "02",
    title: "Find the offer",
    description:
      "Cluster similar requests, score urgency, estimate willingness to pay, and recommend the cleanest monetizable offer.",
  },
  {
    number: "03",
    title: "Launch and learn",
    description:
      "Generate a landing page, payment flow, onboarding form, and follow-up loop that gets smarter after every sale.",
  },
];

const buyerSegments = [
  {
    name: "Agencies",
    problem: "Client asks repeat across every account, but nobody productizes them fast enough.",
    value: "Sell premium retainers, audits, and done-for-you add-ons from demand that already exists.",
    pricing: "$249 to $799 per month plus launch concierge",
  },
  {
    name: "SaaS teams",
    problem: "Feature requests pile up without a commercial signal attached.",
    value: "Turn repeated asks into paid betas, premium workflows, and high-touch onboarding tiers.",
    pricing: "$399 to $1,499 per month plus usage take rate",
  },
  {
    name: "Commerce brands",
    problem: "Customer questions hint at bundles, pre-orders, and subscriptions that never get launched.",
    value: "Create new offers from demand spikes before a competitor notices the pattern.",
    pricing: "$199 to $599 per month plus transaction share",
  },
  {
    name: "Creator businesses",
    problem: "Communities ask for templates, playbooks, and private access in scattered channels.",
    value: "Ship micro-products and premium circles in hours instead of spending weeks validating.",
    pricing: "$99 to $399 per month plus checkout tools",
  },
];

const moatRows = [
  {
    number: "01",
    label: "Demand graph",
    title: "Every request becomes training data for what people will actually pay for.",
    detail:
      "The product builds a cross-channel map of pains, urgency, objections, and conversion outcomes that compounds over time.",
  },
  {
    number: "02",
    label: "Launch loop",
    title: "The platform owns the path from signal to checkout.",
    detail:
      "Because RequestMint generates the offer page, pricing, checkout, and onboarding, it sees the full feedback loop instead of a partial one.",
  },
  {
    number: "03",
    label: "Embedded revenue",
    title: "Payments, services, and usage revenue all sit inside one workflow.",
    detail:
      "That creates more pricing surface than a single SaaS subscription and raises switching costs as teams scale.",
  },
  {
    number: "04",
    label: "Operator habit",
    title: "Founders and operators come back because the product answers one hard question daily.",
    detail:
      "What are people asking for right now that we could turn into money this week?",
  },
];

const rolloutPlan = [
  {
    phase: "Week 1 to 3",
    focus: "Inbox connectors and transcript ingestion",
    outcome: "Get support email, call notes, and CSV exports into a clean signal feed.",
  },
  {
    phase: "Week 4 to 6",
    focus: "Demand clustering and offer generation",
    outcome: "Turn repeated asks into offer drafts with pricing guidance and launch recommendations.",
  },
  {
    phase: "Week 7 to 10",
    focus: "Checkout, onboarding, and analytics",
    outcome: "Close the loop with payments, post-purchase data, and revenue reporting.",
  },
];

const rawRequests = [
  "Customers keep asking for a faster setup option.",
  "Can you sell the reporting dashboard as a separate add-on?",
  "We need a premium support lane for onboarding week.",
  "Do you have a template pack for our team to reuse?",
  "Could this be bundled with implementation instead of annual only?",
  "People want a done-for-you migration service.",
];

const demandClusters = [
  "Cluster: premium onboarding tier",
  "Cluster: template library subscription",
  "Cluster: migration concierge offer",
  "Cluster: analytics add-on for agencies",
  "Cluster: private community plus office hours",
  "Cluster: recurring audit product",
];

const launchedOffers = [
  "Offer launched: Priority Setup - $299",
  "Offer launched: Agency Analytics Pack - $149/mo",
  "Offer launched: Migration Concierge - $1,200",
  "Offer launched: Template Vault - $39/mo",
  "Offer launched: Founder Office Hours - $99/mo",
  "Offer launched: Quarterly Growth Audit - $690",
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const contactEmail = "hello@requestmint.com";

function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

function buildMailtoUrl(signup: BetaSignup) {
  const subject = encodeURIComponent(`RequestMint early access: ${signup.role}`);
  const body = encodeURIComponent(
    [
      `Name: ${signup.name}`,
      `Email: ${signup.email}`,
      `Business type: ${signup.role}`,
      "",
      "Interested in seeing the product and rollout details.",
    ].join("\n")
  );

  return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

function readSignups() {
  if (typeof window === "undefined") {
    return [] as BetaSignup[];
  }

  try {
    const saved = window.localStorage.getItem("requestmint-interest");

    if (!saved) {
      return [] as BetaSignup[];
    }

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? (parsed as BetaSignup[]) : ([] as BetaSignup[]);
  } catch {
    return [] as BetaSignup[];
  }
}

function SliderControl({
  label,
  value,
  min,
  max,
  step = 1,
  valueLabel,
  onChange,
}: SliderControlProps) {
  return (
    <label className="block">
      <div className="flex items-end justify-between gap-4">
        <span className="text-sm font-medium text-slate-200">{label}</span>
        <span className="text-sm text-cyan-300">{valueLabel}</span>
      </div>
      <input
        className="mt-4 w-full accent-cyan-400"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className="mt-2 flex justify-between text-xs text-slate-500">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </label>
  );
}

function Metric({ label, value, hint }: MetricProps) {
  return (
    <div className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{hint}</p>
    </div>
  );
}

function App() {
  const [companyCount, setCompanyCount] = useState(1800);
  const [subscriptionPrice, setSubscriptionPrice] = useState(249);
  const [gmvPerCompany, setGmvPerCompany] = useState(7000);
  const [takeRate, setTakeRate] = useState(4);
  const [attachRate, setAttachRate] = useState(18);
  const [launchFee, setLaunchFee] = useState(1400);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Agency",
  });
  const [savedCount, setSavedCount] = useState(0);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    setSavedCount(readSignups().length);

    // Reveal sections once as they enter the viewport so the page feels alive without becoming noisy.
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const revenueModel = useMemo(() => {
    const subscriptionMrr = companyCount * subscriptionPrice;
    const launchMrr = Math.round(companyCount * (attachRate / 100) * launchFee);
    const usageMrr = Math.round(companyCount * gmvPerCompany * (takeRate / 100));
    const totalMrr = subscriptionMrr + launchMrr + usageMrr;
    const remaining = Math.max(0, 1_000_000 - totalMrr);
    const bars = totalMrr
      ? {
          subscription: (subscriptionMrr / totalMrr) * 100,
          launch: (launchMrr / totalMrr) * 100,
          usage: (usageMrr / totalMrr) * 100,
        }
      : { subscription: 0, launch: 0, usage: 0 };

    return {
      subscriptionMrr,
      launchMrr,
      usageMrr,
      totalMrr,
      remaining,
      bars,
      annualRunRate: totalMrr * 12,
      launchedOffers: Math.round(companyCount * (attachRate / 100) * 0.8),
      merchantsAboveTarget: Math.ceil(remaining / Math.max(subscriptionPrice + gmvPerCompany * (takeRate / 100), 1)),
    };
  }, [attachRate, companyCount, gmvPerCompany, launchFee, subscriptionPrice, takeRate]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextSignup: BetaSignup = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const current = readSignups();
    const existingIndex = current.findIndex(
      (entry) => entry.email.toLowerCase() === formData.email.toLowerCase()
    );

    const next = [...current];

    if (existingIndex >= 0) {
      next[existingIndex] = nextSignup;
    } else {
      next.unshift(nextSignup);
    }

    try {
      window.localStorage.setItem("requestmint-interest", JSON.stringify(next));
    } catch {
      // Keep the form working even if storage is blocked by the browser.
    }

    setSavedCount(next.length);
    setSubmitMessage(
      existingIndex >= 0
        ? "Inquiry updated on this device. Your email app should open next."
        : "Inquiry saved. Your email app should open next."
    );
    setFormData({ name: "", email: "", role: "Agency" });

    window.setTimeout(() => {
      window.location.href = buildMailtoUrl(nextSignup);
    }, 120);
  }

  return (
    <div className="min-h-screen bg-[#07111c] text-slate-100">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111c]/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold uppercase tracking-[0.28em] text-white sm:text-xl">
            RequestMint
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#concept">
              Concept
            </a>
            <a className="transition hover:text-white" href="#buyers">
              Buyers
            </a>
            <a className="transition hover:text-white" href="#simulator">
              Revenue
            </a>
            <a className="transition hover:text-white" href="#waitlist">
              Beta
            </a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-300 hover:text-white"
          >
            Request access
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-end overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_35%),radial-gradient(circle_at_75%_25%,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(180deg,_#08111d_0%,_#07111c_60%,_#060d16_100%)]" />
          <div className="hero-grid absolute inset-0 opacity-40" />

          <div className="absolute inset-0 hidden lg:grid lg:grid-cols-12">
            <div className="col-span-4 border-r border-white/10 bg-[#08101a]/45">
              <div className="signal-stream px-8 py-28">
                {[...rawRequests, ...rawRequests].map((request, index) => (
                  <div className="border-b border-white/10 py-5" key={`${request}-${index}`}>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-300/80">
                      Raw request {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200/85">{request}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 border-r border-white/10 bg-slate-950/20">
              <div className="signal-stream delayed px-8 py-36">
                {[...demandClusters, ...demandClusters].map((cluster, index) => (
                  <div className="border-b border-white/10 py-6" key={`${cluster}-${index}`}>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-sky-300/70">Demand cluster</p>
                    <p className="mt-2 text-sm leading-6 text-slate-100/80">{cluster}</p>
                    <p className="mt-3 text-xs text-slate-400">Intent score rising from conversations across support, sales, and community.</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 bg-[linear-gradient(180deg,_rgba(8,17,29,0.42)_0%,_rgba(6,13,22,0.82)_100%)]">
              <div className="signal-stream slower px-8 py-32">
                {[...launchedOffers, ...launchedOffers].map((offer, index) => (
                  <div className="border-b border-white/10 py-6" key={`${offer}-${index}`}>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-300/75">Live offer</p>
                    <p className="mt-2 text-sm leading-6 text-white/90">{offer}</p>
                    <p className="mt-3 text-xs text-slate-400">Landing page, checkout, onboarding, and follow-up created in one system.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(7,17,28,0.94)_0%,_rgba(7,17,28,0.82)_28%,_rgba(7,17,28,0.56)_52%,_rgba(7,17,28,0.78)_100%),linear-gradient(180deg,_rgba(7,17,28,0.16)_0%,_rgba(7,17,28,0.58)_62%,_rgba(6,13,22,0.96)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-end px-6 pb-16 sm:pb-20">
            <div className="max-w-3xl">
              <p className="text-3xl font-semibold uppercase tracking-[0.34em] text-cyan-300 sm:text-5xl lg:text-6xl">
                RequestMint
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[0.94] text-white sm:text-6xl lg:text-7xl">
                Turn the questions customers keep repeating into products they can buy today.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                A new product concept built for agencies, SaaS teams, commerce brands, and creator businesses. Feed it conversations, detect paid demand, launch a ready-to-sell offer, and keep the payment rail inside the product.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#simulator"
                  className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-white"
                >
                  Model the revenue path
                </a>
                <a
                  href="#concept"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/5"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-8 max-w-2xl text-sm leading-6 text-slate-400">
                No honest founder can guarantee zero competition or a million dollars a month. This is designed as a realistic high-margin SaaS path with subscriptions, launch fees, and a usage-based take rate layered into one workflow.
              </p>
            </div>
          </div>
        </section>

        <section id="concept" data-reveal className="reveal border-t border-white/10 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">The concept</p>
            <div className="mt-6 max-w-4xl">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Most companies already receive great product ideas every day. They just arrive disguised as support tickets, call notes, and DMs.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                RequestMint watches for repeated pain, scores buying intent, and turns that signal into a revenue-ready offer without waiting for a long product roadmap.
              </p>
            </div>

            <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
              {pipelineSteps.map((step) => (
                <div key={step.number} className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{step.number}</p>
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="max-w-sm text-base leading-7 text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="buyers" data-reveal className="reveal border-t border-white/10 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Why buyers pay</p>
            <div className="mt-6 max-w-4xl">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                It plugs into revenue where money already exists instead of inventing a brand-new behavior.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Every customer segment uses the same core engine, but the monetization angle changes based on what they already sell.
              </p>
            </div>

            <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
              {buyerSegments.map((segment) => (
                <div key={segment.name} className="grid gap-4 py-6 md:grid-cols-[180px_1.2fr_1fr_auto] md:items-start md:gap-8">
                  <p className="text-lg font-medium text-white">{segment.name}</p>
                  <p className="text-sm leading-7 text-slate-400">{segment.problem}</p>
                  <p className="text-sm leading-7 text-slate-300">{segment.value}</p>
                  <p className="text-sm leading-7 text-cyan-300">{segment.pricing}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="simulator" data-reveal className="reveal border-t border-white/10 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Revenue simulator</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Model the path to $1M per month.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Adjust the commercial model. This calculator combines subscription revenue, launch concierge revenue, and transaction take rate into one monthly view.
                </p>

                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
                  <div className="grid gap-8">
                    <SliderControl
                      label="Paying companies"
                      value={companyCount}
                      min={100}
                      max={5000}
                      step={50}
                      valueLabel={companyCount.toLocaleString()}
                      onChange={setCompanyCount}
                    />
                    <SliderControl
                      label="Average subscription price"
                      value={subscriptionPrice}
                      min={49}
                      max={999}
                      step={10}
                      valueLabel={formatCurrency(subscriptionPrice)}
                      onChange={setSubscriptionPrice}
                    />
                    <SliderControl
                      label="Monthly launched GMV per company"
                      value={gmvPerCompany}
                      min={500}
                      max={25000}
                      step={250}
                      valueLabel={formatCurrency(gmvPerCompany)}
                      onChange={setGmvPerCompany}
                    />
                    <SliderControl
                      label="Platform take rate"
                      value={takeRate}
                      min={1}
                      max={10}
                      valueLabel={`${takeRate}%`}
                      onChange={setTakeRate}
                    />
                    <SliderControl
                      label="Concierge attach rate"
                      value={attachRate}
                      min={5}
                      max={50}
                      valueLabel={`${attachRate}%`}
                      onChange={setAttachRate}
                    />
                    <SliderControl
                      label="Average launch fee"
                      value={launchFee}
                      min={300}
                      max={5000}
                      step={50}
                      valueLabel={formatCurrency(launchFee)}
                      onChange={setLaunchFee}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-cyan-400/15 bg-[#091422]/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Projected monthly revenue</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  <Metric
                    label="Subscriptions"
                    value={formatCurrency(revenueModel.subscriptionMrr)}
                    hint="The recurring base software layer."
                  />
                  <Metric
                    label="Launch services"
                    value={formatCurrency(revenueModel.launchMrr)}
                    hint="Optional done-for-you onboarding and offer setup."
                  />
                  <Metric
                    label="Usage take rate"
                    value={formatCurrency(revenueModel.usageMrr)}
                    hint="A percentage of launched offer revenue processed inside the platform."
                  />
                </div>

                <div className="mt-8 overflow-hidden rounded-full bg-white/6">
                  <div className="flex h-3 w-full">
                    <div
                      className="bg-cyan-300 transition-[width] duration-500"
                      style={{ width: `${revenueModel.bars.subscription}%` }}
                    />
                    <div
                      className="bg-sky-400 transition-[width] duration-500"
                      style={{ width: `${revenueModel.bars.launch}%` }}
                    />
                    <div
                      className="bg-emerald-400 transition-[width] duration-500"
                      style={{ width: `${revenueModel.bars.usage}%` }}
                    />
                  </div>
                </div>

                <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-[1.1fr_1fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Total monthly revenue</p>
                    <p className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      {formatCurrency(revenueModel.totalMrr)}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Annual run rate: {formatCurrency(revenueModel.annualRunRate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Scale signal</p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      {revenueModel.totalMrr >= 1_000_000 ? "Above seven figures per month" : "Below seven figures per month"}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {revenueModel.totalMrr >= 1_000_000
                        ? "At this mix, the business clears the $1M monthly mark."
                        : `${formatCurrency(revenueModel.remaining)} more monthly revenue is needed to cross the target.`}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Live offers each month</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{revenueModel.launchedOffers.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Companies still needed</p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      {revenueModel.totalMrr >= 1_000_000 ? "0" : revenueModel.merchantsAboveTarget.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Why this is attractive</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Three monetization layers create higher ARPU than a single-seat SaaS tool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="moat" data-reveal className="reveal border-t border-white/10 px-6 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Defensibility</p>
            <div className="mt-6 max-w-4xl">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                The moat comes from feedback loops, embedded payments, and the habit of checking demand before building.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                AI alone is easy to copy. Owning the signal, the launch path, and the transaction layer is where the durable advantage lives.
              </p>
            </div>

            <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
              {moatRows.map((row) => (
                <div key={row.number} className="grid gap-4 py-6 md:grid-cols-[80px_180px_1fr_1fr] md:gap-8">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{row.number}</p>
                  <p className="text-lg font-medium text-white">{row.label}</p>
                  <p className="text-sm leading-7 text-slate-200">{row.title}</p>
                  <p className="text-sm leading-7 text-slate-400">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" data-reveal className="reveal border-t border-white/10 px-6 py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Launch path</p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                A practical first release with a clear way to capture early demand.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Start with one painful, obvious job: detect repeated asks and spin up a monetizable offer in under 30 minutes. Then layer in payments, analytics, and concierge once demand is visible.
              </p>

              <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                {rolloutPlan.map((item) => (
                  <div key={item.phase} className="grid gap-4 py-6 md:grid-cols-[160px_1fr_1fr] md:gap-8">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.phase}</p>
                    <p className="text-sm leading-7 text-white">{item.focus}</p>
                    <p className="text-sm leading-7 text-slate-400">{item.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Contact</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Collect inbound interest from a static site.</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                This version works on static hosting by opening the visitor's email app after submission and keeping an in-browser backup on the current device.
              </p>

              <div className="mt-8 grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm text-slate-300">Full name</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                    type="text"
                    placeholder="Amina Rahman"
                    value={formData.name}
                    onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-slate-300">Email</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                    type="email"
                    placeholder="team@company.com"
                    value={formData.email}
                    onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-slate-300">Best-fit business type</span>
                  <select
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                    value={formData.role}
                    onChange={(event) => setFormData((current) => ({ ...current, role: event.target.value }))}
                  >
                    <option>Agency</option>
                    <option>SaaS</option>
                    <option>Ecommerce</option>
                    <option>Creator business</option>
                    <option>Investor</option>
                  </select>
                </label>
              </div>

              <button
                className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-white"
                type="submit"
              >
                Email the team
              </button>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 inline-flex text-sm text-cyan-300 transition hover:text-white"
              >
                Or contact directly at {contactEmail}
              </a>

              <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400">
                <p>In-browser inquiry backups on this device: {savedCount}</p>
                <p className="mt-2 text-cyan-300">
                  {submitMessage || "Swap the email address for your own inbox or connect this form to a CRM endpoint later."}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.28em] text-white">RequestMint</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              A white-label friendly launch site for a B2B SaaS that turns conversations into launch-ready offers and recurring revenue.
            </p>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Built as a launch-ready product concept. Strong monetization potential, but not a revenue guarantee.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
