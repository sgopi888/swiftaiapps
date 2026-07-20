import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Check,
  ChefHat,
  Clock3,
  Sparkles,
} from "lucide-react";
import { DISCOVERY_CALL_URL } from "@/lib/contact";
import { VoiceAgentDemo } from "@/components/restaurant/VoiceAgentDemo";

const capabilities = [
  {
    image: "/images/restaurant-capabilities/guest-concierge.jpg",
    alt: "AI restaurant guest concierge",
    title: "AI guest concierge",
    copy: "Answer menu questions, handle dietary needs, suggest pairings, and capture orders in a natural conversation.",
  },
  {
    image: "/images/restaurant-capabilities/smarter-operations.jpg",
    alt: "AI-assisted restaurant inventory and operations",
    title: "Smarter operations",
    copy: "Turn sales and inventory signals into prep guidance, low-stock alerts, and less end-of-day waste.",
  },
  {
    image: "/images/restaurant-capabilities/guest-intelligence.jpg",
    alt: "Personalized restaurant guest intelligence",
    title: "Guest intelligence",
    copy: "Recognize preferences and visit patterns so every campaign and recommendation feels personal.",
  },
  {
    image: "/images/restaurant-capabilities/live-command-center.jpg",
    alt: "Restaurant performance command center",
    title: "One live command center",
    copy: "See orders, labor, reviews, and revenue across locations without stitching together spreadsheets.",
  },
];

const journeyCapabilities = [
  ["01", "Never Miss a Guest", "Answer every phone call, SMS, and WhatsApp message—even after hours.", "/images/restaurant-journey/never-miss-a-guest.jpg", "Always-on restaurant guest communications", "md:col-span-3"],
  ["02", "Take Orders", "Handle orders, menu questions, dietary requests, add-ons, and live updates.", "/images/restaurant-journey/take-orders.jpg", "AI-assisted restaurant ordering", "md:col-span-3"],
  ["03", "Handle Every Call", "Manage simultaneous calls without hold times, missed orders, or busy signals.", "/images/restaurant-journey/handle-every-call.jpg", "Simultaneous restaurant call handling", "md:col-span-2"],
  ["04", "Free Your Team", "Automate repetitive conversations so staff can focus on guests and service.", "/images/restaurant-journey/free-your-team.jpg", "Restaurant staff focused on guest service", "md:col-span-2"],
  ["05", "Bring Guests Back", "Automate feedback, follow-ups, and personalized offers through SMS and WhatsApp.", "/images/restaurant-journey/bring-guests-back.jpg", "Restaurant guest retention and follow-up", "md:col-span-2"],
];

const industries = [
  ["01", "Hotels & Travel", "Answer guest questions, manage bookings, provide multilingual assistance, and hand conversations to staff.", "/images/restaurant-industries/hotels-and-travel.jpg", "AI assistance for hotels and travel"],
  ["02", "Healthcare & Dental Clinics", "Schedule appointments, send reminders, answer common questions, and transfer urgent calls.", "/images/restaurant-industries/healthcare-and-dental-clinics.jpg", "AI assistance for healthcare and dental clinics"],
  ["03", "Home Services", "Qualify requests, collect job details, provide estimates, and dispatch plumbers, electricians, or HVAC technicians.", "/images/restaurant-industries/home-services.jpg", "AI assistance for home service businesses"],
  ["04", "Real Estate", "Qualify buyers and renters, answer property questions, and schedule viewings.", "/images/restaurant-industries/real-estate.jpg", "AI assistance for real estate businesses"],
];

const processSteps = [
  ["Connect your stack", "POS, reservations, delivery, inventory, reviews, and loyalty.", "/images/restaurant-process/connect-your-stack.jpg", "Connected restaurant technology stack"],
  ["Tune your AI", "Your menus, policies, brand voice, goals, and operating playbooks.", "/images/restaurant-process/tune-your-ai.jpg", "Restaurant AI configuration and tuning"],
  ["Act on insight", "Automated guest service and clear recommendations for every role.", "/images/restaurant-process/act-on-insight.jpg", "Restaurant insights turned into action"],
];

export function RestaurantLanding() {
  return (
    <>
      <section className="relative min-h-[820px] overflow-hidden pt-28 pb-20 flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(160,120,255,0.16),transparent_34%),radial-gradient(circle_at_18%_65%,rgba(76,215,246,0.10),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1.02fr_.98fr] gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4cd7f6]/20 bg-[#4cd7f6]/[0.07] px-3.5 py-2 text-xs font-mono text-[#81e8ff]">
              <Sparkles size={14} /> AI built for modern hospitality
            </div>
            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.055em] leading-[0.98] text-white">
              Run a sharper restaurant. <span className="grad-text">Delight every guest.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#aeb3c5]">
              One intelligent layer for guest conversations, orders, inventory, and multi-location performance—connected to the tools your team already uses.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={DISCOVERY_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#a078ff] px-6 py-3.5 text-sm font-bold text-[#07172f] shadow-[0_0_30px_rgba(77,142,255,.25)] transition-transform hover:scale-[1.03]">
                Explore Restaurant AI <ArrowRight size={17} />
              </a>
              <Link href="#platform" className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08]">
                See the platform
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#8c909f]">
              {["Works with your POS", "Deploys securely", "Built for every location"].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check size={14} className="text-[#4cd7f6]" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-[#4d8eff]/10 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[28px] p-3 shadow-2xl">
              <div className="rounded-[22px] border border-white/[0.06] bg-[#0d1017] p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                  <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#4d8eff] to-[#a078ff]"><ChefHat size={21} className="text-[#06152b]" /></div><div><p className="font-bold text-white">Service overview</p><p className="text-xs text-[#757b8e]">Downtown · Live</p></div></div>
                  <span className="flex items-center gap-2 text-xs text-[#70e2ba]"><i className="size-2 rounded-full bg-[#70e2ba] shadow-[0_0_10px_#70e2ba]" />All systems healthy</span>
                </div>
                <div className="grid grid-cols-3 gap-3 py-5">
                  {[["$8,420", "Today", "+18%"], ["147", "Orders", "+24"], ["4.8", "Guest score", "+0.3"]].map(([value,label,delta]) => <div key={label} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3 sm:p-4"><p className="text-lg sm:text-2xl font-bold text-white">{value}</p><p className="mt-1 text-[10px] sm:text-xs text-[#777d90]">{label}</p><p className="mt-2 text-[10px] text-[#70e2ba]">{delta}</p></div>)}
                </div>
                <div className="grid sm:grid-cols-[1.2fr_.8fr] gap-3">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <div className="flex items-center justify-between"><p className="text-sm font-semibold text-white">Revenue pulse</p><span className="text-[10px] text-[#73798b]">12pm—8pm</span></div>
                    <div className="mt-7 flex h-28 items-end gap-2">{[31,48,42,68,57,82,75,94,71,87,61,78].map((h,i)=><div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#4d8eff]/30 to-[#4cd7f6]" style={{height:`${h}%`, opacity:.55+i/28}} />)}</div>
                  </div>
                  <div className="rounded-2xl border border-[#a078ff]/20 bg-[#a078ff]/[0.06] p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#d0bcff]"><Bot size={15}/> AI shift brief</div>
                    <p className="mt-4 text-sm leading-6 text-[#c7cada]">Dinner demand is trending high. Prep 18 more salmon portions before 6:30.</p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-[#858b9d]"><Clock3 size={12}/>Updated now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VoiceAgentDemo />

      <section id="platform" className="border-y border-white/[0.06] bg-[#0d0d0d] py-24 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-[.2em] text-[#4cd7f6]">The intelligence layer</p>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5"><h2 className="max-w-2xl text-4xl sm:text-5xl font-bold tracking-tight text-white">From first hello to last table.</h2><p className="max-w-md text-[#8f95a8] leading-7">Give guests faster service and teams clearer decisions without replacing the systems that already run your business.</p></div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">{capabilities.map(({image,alt,title,copy})=><article key={title} className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 hover:border-[#4d8eff]/30 hover:bg-white/[0.04] transition-colors"><div className="relative size-20 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07090d] shadow-[0_0_24px_rgba(77,142,255,0.08)]"><Image src={image} alt={alt} fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><h3 className="mt-7 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-[#8f95a8]">{copy}</p></article>)}</div>
        </div>
      </section>

      <section id="use-cases" className="relative overflow-hidden border-y border-white/[0.06] bg-[#0d0d0d] py-24 scroll-mt-20">
        <div className="absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-[#4d8eff]/[0.07] blur-3xl" />
        <div className="relative max-w-[1120px] mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[.2em] text-[#a078ff]">One connected journey</p>
            <h2 className="mt-4 text-4xl font-bold text-white">More than a chatbot.</h2>
            <p className="mt-5 leading-7 text-[#8f95a8]">Restaurant AI connects guest conversations, ordering, operations, and retention across every channel.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-6 gap-4">
            {journeyCapabilities.map(([n,title,copy,image,alt,span]) => (
              <article key={n} className={`${span} group relative min-h-52 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors hover:border-[#4d8eff]/30 hover:bg-white/[0.04]`}>
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#4cd7f6]/[0.06] blur-2xl transition-colors group-hover:bg-[#4cd7f6]/10" />
                <span className="font-mono text-xs text-[#596074]">{n}</span>
                <div className="absolute right-5 top-5 size-16 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07090d] shadow-[0_0_22px_rgba(77,142,255,0.08)]">
                  <Image src={image} alt={alt} fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-10 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#9096a8]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-mono uppercase tracking-[.2em] text-[#4cd7f6]">Built for every conversation</p>
              <h2 className="mt-4 text-4xl font-bold text-white">One AI platform.<br /><span className="grad-text">Many industries.</span></h2>
              <p className="mt-5 leading-7 text-[#8f95a8]">Adapt intelligent voice and messaging agents to the workflows, customers, and systems unique to your business.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.08]">
              {industries.map(([n,title,copy,image,alt]) => (
                <article key={n} className="group relative min-h-64 bg-[#101116] p-7 sm:p-8 transition-colors hover:bg-[#141722]">
                  <span className="font-mono text-xs text-[#596074]">{n}</span>
                  <div className="absolute right-6 top-6 size-16 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07090d] shadow-[0_0_22px_rgba(77,142,255,0.08)]">
                    <Image src={image} alt={alt} fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-12 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#9096a8]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#0d0d0d] border-y border-white/[0.06] py-24 scroll-mt-20">
        <div className="max-w-[1120px] mx-auto px-6 text-center"><p className="text-xs font-mono uppercase tracking-[.2em] text-[#4cd7f6]">Designed around your restaurant</p><h2 className="mt-4 text-4xl font-bold text-white">Connect. Learn. Improve every shift.</h2><div className="mt-14 grid md:grid-cols-3 gap-4 text-left">{processSteps.map(([title,copy,image,alt],i)=><div key={title} className="group relative rounded-2xl border border-white/[0.08] p-7 transition-colors hover:border-[#4d8eff]/30"><span className="font-mono text-xs text-[#505668]">0{i+1}</span><div className="absolute right-5 top-5 size-16 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07090d] shadow-[0_0_22px_rgba(77,142,255,0.08)]"><Image src={image} alt={alt} fill sizes="64px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><h3 className="mt-14 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-[#8f95a8]">{copy}</p></div>)}</div></div>
      </section>

      <section id="results" className="py-24 scroll-mt-20">
        <div className="max-w-[1120px] mx-auto px-6"><div className="relative overflow-hidden rounded-[28px] border border-[#4d8eff]/20 bg-[linear-gradient(135deg,rgba(77,142,255,.11),rgba(160,120,255,.08))] p-8 sm:p-12"><div className="absolute -right-20 -top-20 size-72 rounded-full bg-[#4cd7f6]/10 blur-3xl" /><div className="relative grid md:grid-cols-[1.18fr_.82fr] items-center gap-8"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#81e8ff]">Your restaurant. Better connected.</p><h2 className="mt-5 max-w-2xl text-4xl sm:text-5xl font-bold text-white">Turn every interaction into a better next decision.</h2><p className="mt-5 max-w-xl leading-7 text-[#a3a8ba]">Let’s map the highest-impact AI opportunities across your guest journey and operations.</p><a href={DISCOVERY_CALL_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#10131a] hover:scale-[1.03] transition-transform">Book a restaurant AI session <ArrowRight size={17}/></a></div><div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#07090d] shadow-[0_0_40px_rgba(77,142,255,0.12)]"><Image src="/images/restaurant-cta/book-a-restaurant-ai-session.jpg" alt="Connected Restaurant AI guest and operations platform" fill sizes="(min-width: 768px) 280px, 70vw" className="object-cover" /></div></div></div></div>
      </section>
    </>
  );
}
