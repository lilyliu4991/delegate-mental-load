import DelegationTool from '@/components/DelegationTool';
import { TextShimmer } from '@/components/ui/text-shimmer';

const FAQ_ITEMS = [
  {
    q: 'What is mental load?',
    a: "Mental load is the invisible cognitive work of managing a shared life — the planning, remembering, anticipating, and coordinating that keeps everything running. Every task has three phases: noticing it needs doing (conception), figuring out how to handle it (planning), and actually completing it (execution). When one partner handles all three phases on most tasks, they carry the mental load — even if both partners are physically busy.",
  },
  {
    q: 'Does this only work for couples with kids?',
    a: "Not at all. Mental load exists in every shared home, whether or not children are involved. From managing finances to planning social events to maintaining vehicles, every couple carries invisible labor worth making visible.",
  },
  {
    q: "What if my partner isn't interested?",
    a: "Try framing it as a shared project rather than a critique. This tool isn't about keeping score — it's about building a clearer picture together. Starting with just one category can help lower resistance and open the conversation gently.",
  },
  {
    q: 'What if we disagree about who owns what?',
    a: "That's actually the most valuable outcome. Disagreement reveals unspoken assumptions — and making those explicit is exactly the point. Use this as a conversation starter, not a verdict.",
  },
  {
    q: 'Is this about reaching a perfect 50/50?',
    a: "No. The goal isn't mathematical equality — it's intentional agreement. A 60/40 split that both partners knowingly chose is far healthier than an accidental 80/20 no one ever discussed.",
  },
  {
    q: 'Can a shared task still have one primary owner?',
    a: 'Absolutely. Marking something "Both" signals shared responsibility — but in practice, one person may take the lead. The important thing is that both partners are aware of the arrangement.',
  },
  {
    q: 'Do we need to finish in one sitting?',
    a: 'No. Your selections save automatically in your browser. Pick up where you left off anytime.',
  },
  {
    q: 'How long until we see a difference?',
    a: "Most couples notice relief within a few weeks of making ownership explicit. Sustainable change — where new habits feel natural — typically takes 3–6 months of consistency and revisiting the agreements you make here.",
  },
];

const P = '#5AABAB';   // primary teal
const PD = '#3D8F91';  // darker teal
const PL = '#EAF5F5';  // light teal bg
const CO = '#E8907A';  // coral accent

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 border-b border-teal-100 font-nav"
        style={{ background: 'rgba(245,251,251,0.95)', backdropFilter: 'blur(6px)' }}>
        <div className="max-w-6xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium text-stone-500">
            <a href="#how-it-works" className="hover:text-[#5AABAB] transition-colors">How It Works</a>
            <a href="#why-it-matters" className="hover:text-[#5AABAB] transition-colors">Why It Matters</a>
            <a href="#tool" className="hover:text-[#5AABAB] transition-colors">The Tool</a>
          </div>

          {/* Logo image */}
          <a href="#">
            <img src="/Gemini_Generated_Image_hu5x1thu5x1thu5x.png" alt="Delegating Mental Load"
              className="h-20 w-auto" style={{ mixBlendMode: 'multiply' }} />
          </a>

          <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium text-stone-500">
            <a href="#faq" className="hover:text-[#5AABAB] transition-colors">FAQ</a>
            <a href="#about" className="hover:text-[#5AABAB] transition-colors">About</a>
            <a href="#tool" className="text-white text-[11px] uppercase tracking-widest px-4 py-2 hover:opacity-90 transition-opacity"
              style={{ background: P }}>
              Start Now
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ background: 'var(--cream)' }} className="overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center min-h-[580px]">
          <div className="w-1/2 py-16 pl-16 pr-8">
            <p className="font-label text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
              For couples, by design
            </p>
            <h1 className="mb-6 leading-tight font-semibold"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontFamily: 'var(--font-montserrat), sans-serif' }}>
              <TextShimmer
                as="span"
                duration={3}
                spread={3}
                className="block [--base-color:#1E3A3A] [--base-gradient-color:#5AABAB]"
              >
                Who carries
              </TextShimmer>
              <TextShimmer
                as="span"
                duration={3}
                spread={3}
                className="block [--base-color:#1E3A3A] [--base-gradient-color:#5AABAB]"
              >
                the invisible load
              </TextShimmer>
              <TextShimmer
                as="span"
                duration={3}
                spread={3}
                className="block [--base-color:#1E3A3A] [--base-gradient-color:#5AABAB]"
              >
                in your home?
              </TextShimmer>
            </h1>
            <p className="text-sm leading-relaxed mb-8 text-stone-500"
              style={{ fontFamily: 'Sweet Sans Pro, system-ui, sans-serif', maxWidth: '26rem' }}>
              The mental load of running a shared life is real — but it often goes unseen. This tool helps couples name it, assign it, and finally see who carries what.
            </p>
            <div className="flex gap-4">
              <a href="#tool" className="inline-block text-white text-xs uppercase tracking-widest font-nav px-7 py-3.5 hover:opacity-90 transition-opacity"
                style={{ background: P }}>
                Start Delegating
              </a>
              <a href="#how-it-works" className="inline-block text-stone-600 text-xs uppercase tracking-widest font-nav px-7 py-3.5 border border-stone-300 hover:border-stone-400 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="w-1/2 relative h-[560px] flex items-center justify-center overflow-hidden"
            style={{ background: PL }}>
            <img src="/Gemini_Generated_Image_cguww2cguww2cguw.png"
              alt="Couple discussing household tasks"
              className="w-full h-full object-contain p-8" />
          </div>
        </div>
      </section>

      {/* ── Video section ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: P }}>See It In Action</p>
          <h2 className="font-serif text-3xl text-stone-800 mb-8">Watch how it works</h2>
          <div className="overflow-hidden shadow-lg border border-teal-100">
            <video
              src="/Video_Ready_After_Upgrade.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ background: PL }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: P }}>Simple Process</p>
          <h2 className="font-serif text-4xl text-stone-800 mb-4">How it works</h2>
          <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed mb-14"
            style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
            Four steps from invisible assumptions to clear, shared agreements.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: '01', label: 'Review categories', img: '/3.png', desc: 'Browse five areas of shared life' },
              { step: '02', label: 'Talk it through', img: '/4.png', desc: 'Read each task aloud together' },
              { step: '03', label: 'Assign ownership', img: '/5.png', desc: 'Choose Wife, Husband, Both, or Neither' },
              { step: '04', label: 'See the breakdown', img: '/6.png', desc: 'Watch the chart update in real time' },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-2 overflow-hidden shadow-sm"
                  style={{ borderColor: P }}>
                  <img src={s.img} alt={s.label} className="w-full h-full object-contain p-2" />
                </div>
                <div className="font-label text-[10px] uppercase tracking-widest" style={{ color: P }}>{s.step}</div>
                <div className="font-serif text-base text-stone-800">{s.label}</div>
                <div className="text-xs text-stone-400 leading-relaxed" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coral/teal banner — three phases ── */}
      <section style={{ background: P }} className="py-14 px-6 text-center">
        <p className="font-label text-[11px] text-white/80 uppercase tracking-widest mb-3">The three phases of every task</p>
        <h2 className="font-serif text-3xl text-white mb-4">Owning a task means owning all of it</h2>
        <p className="text-sm text-white/90 max-w-lg mx-auto leading-relaxed mb-10"
          style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
          True ownership isn't just execution. It's noticing the need, planning the response, and completing the work — start to finish, every time.
        </p>
        <div className="flex justify-center gap-6 flex-wrap max-w-2xl mx-auto">
          {[
            { icon: '💡', phase: 'Conception', desc: 'Noticing it needs doing' },
            { icon: '📝', phase: 'Planning', desc: 'Organizing how to do it' },
            { icon: '✅', phase: 'Execution', desc: 'Completing & resetting' },
          ].map((p) => (
            <div key={p.phase} className="bg-white/15 rounded-lg px-6 py-5 text-center w-44">
              <div className="text-2xl mb-2">{p.icon}</div>
              <div className="font-serif text-white text-base mb-1">{p.phase}</div>
              <div className="text-xs text-white/80" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why It Matters — split 1 ── */}
      <section id="why-it-matters" className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto flex items-center gap-16 px-8">
          <div className="w-1/2 flex items-center justify-center">
            <img src="/5.png" alt="Household tasks" className="w-72 object-contain drop-shadow-sm" />
          </div>
          <div className="w-1/2">
            <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: P }}>What Is Mental Load?</p>
            <h2 className="font-serif text-3xl text-stone-800 mb-5">The thinking behind the doing</h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-4" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              Mental load is the ongoing cognitive work of managing a shared life — tracking what needs to happen, when, and for whom. Scheduling the dentist. Noticing the pantry is low. Remembering your partner's sibling's birthday.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-6" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              None of this shows up on a to-do list. But all of it takes up space — and when it falls disproportionately on one person, it creates a quiet, chronic strain that builds over time.
            </p>
            <a href="#tool" className="text-xs font-label uppercase tracking-widest border-b pb-0.5 hover:opacity-70 transition-opacity"
              style={{ color: P, borderColor: P }}>
              Try the Tool
            </a>
          </div>
        </div>
      </section>

      {/* ── Why It Matters — split 2 ── */}
      <section style={{ background: PL }} className="py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto flex items-center gap-16 px-8">
          <div className="w-1/2">
            <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: P }}>Why It Builds Resentment</p>
            <h2 className="font-serif text-3xl text-stone-800 mb-5">Assumptions are the real problem</h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-4" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              Most household tension doesn't come from malice. It comes from assumptions — one person assumes the other will handle it; the other doesn't know it needs handling.
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-6" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              Over time, invisible labor accumulates silently — surfacing as resentment, conversations that feel like nagging, and a gradual loss of closeness. Naming it is the first step toward changing it.
            </p>
            <a href="#tool" className="text-xs font-label uppercase tracking-widest border-b pb-0.5 hover:opacity-70 transition-opacity"
              style={{ color: P, borderColor: P }}>
              Start the Conversation
            </a>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src="/7.png" alt="Sharing household tasks" className="w-64 object-contain drop-shadow-sm" />
          </div>
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section style={{ background: PD }} className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-label text-[11px] text-white/80 uppercase tracking-widest text-center mb-10">
            The numbers behind the feeling
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { stat: '71%', label: 'of household mental load carried by mothers on average' },
              { stat: '100+', label: 'extra minutes per day spent on household tasks in dual-income homes' },
              { stat: '3–6 mo', label: 'typical timeline to build sustainable new ownership habits' },
            ].map((s) => (
              <div key={s.stat} className="text-center">
                <div className="font-serif text-4xl text-white mb-2">{s.stat}</div>
                <div className="text-xs text-white/90 leading-relaxed" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-5xl mb-4" style={{ color: P }}>"</p>
          <p className="font-serif text-2xl text-stone-700 italic leading-relaxed mb-6">
            The goal isn't a perfect 50/50. It's an intentional agreement — made by both people, on purpose.
          </p>
          <p className="font-label text-xs uppercase tracking-widest text-stone-400">A guiding principle of this tool</p>
        </div>
      </section>

      {/* ── The Tool ── */}
      <section id="tool" style={{ background: PL }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: P }}>Task Delegation Tool</p>
            <h2 className="font-serif text-4xl text-stone-800 mb-4">Assign every responsibility</h2>
            <p className="text-sm text-stone-500 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              Open each category, read the tasks together, and choose an owner. The breakdown updates in real time.
            </p>
          </div>

          <div className="bg-white border-l-4 px-7 py-5 mb-8 max-w-2xl mx-auto" style={{ borderColor: P }}>
            <p className="font-serif text-base text-stone-700 mb-1">Before you start</p>
            <p className="text-sm text-stone-500 leading-relaxed" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              Do this together, not separately. When you assign a task, think about <em>full ownership</em> — noticing it needs doing, planning how, and executing it. If it sparks a conversation, let it. That's the point.
            </p>
          </div>

          <DelegationTool />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: P }}>Questions</p>
            <h2 className="font-serif text-4xl text-stone-800">Common questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group rounded-xl overflow-hidden cursor-pointer" style={{ background: PL }}>
                <summary className="flex justify-between items-center px-6 py-5 font-serif text-base text-stone-800 list-none">
                  {item.q}
                  <svg className="w-4 h-4 shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200"
                    style={{ color: P }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm text-stone-500 leading-relaxed border-t border-teal-100 pt-4"
                  style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Lily ── */}
      <section id="about" style={{ background: P }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-16">
          <div className="w-1/2">
            <p className="font-label text-[11px] text-white/80 uppercase tracking-widest mb-3">The Founder</p>
            <h2 className="font-serif text-4xl text-white mb-5">Hi, I'm Lily</h2>
            <p className="text-sm text-white leading-relaxed mb-4" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              I designed this tool because I believe that making invisible labor visible is one of the most meaningful things a couple can do for their relationship.
            </p>
            <p className="text-sm text-white leading-relaxed mb-4" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              So much household tension stems not from a lack of care, but from a lack of clarity — assumptions that were never discussed, responsibilities that were never named.
            </p>
            <p className="text-sm text-white leading-relaxed mb-8" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              My hope is that what starts as a simple assignment exercise becomes a foundation for more honest, less resentful conversations — and ultimately, stronger relationships and happier families.
            </p>
            <a href="#tool" className="inline-block text-white text-xs font-label uppercase tracking-widest px-7 py-3.5 hover:opacity-90 transition-opacity border border-white/50">
              Try the Tool
            </a>
          </div>
          <div className="w-1/2 flex items-end justify-center">
            <img src="/LoveandLiveEvents2022-27_Original.jpg" alt="Lily, founder"
              className="w-80 h-96 object-cover object-top rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* ── CTA — gold ── */}
      <section style={{ background: 'var(--gold)' }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-16">
          <div className="w-1/3 flex justify-center">
            <img src="/6.png" alt="" className="w-48 object-contain drop-shadow" />
          </div>
          <div className="w-2/3 text-center">
            <p className="font-label text-[11px] text-stone-700 uppercase tracking-widest mb-3">Ready to start?</p>
            <h2 className="font-serif text-4xl text-stone-800 mb-4">Begin the conversation today</h2>
            <p className="text-sm text-stone-700 max-w-md mx-auto leading-relaxed mb-8" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
              It takes about 20 minutes to go through all five categories together. Your progress saves automatically.
            </p>
            <a href="#tool" className="inline-block text-white text-xs font-label uppercase tracking-widest px-8 py-3.5 hover:opacity-90 transition-opacity shadow"
              style={{ background: P }}>
              Start Delegating
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: 'var(--cream)' }} className="border-t border-teal-100 py-10 px-6 text-center">
        <img src="/Gemini_Generated_Image_hu5x1thu5x1thu5x.png" alt="Delegating Mental Load"
          className="h-20 w-auto mx-auto mb-5" style={{ mixBlendMode: 'multiply' }} />
        <div className="flex justify-center gap-8 font-label text-[11px] uppercase tracking-widest text-stone-400 mb-6">
          <a href="#how-it-works" className="hover:text-[#5AABAB] transition-colors">How It Works</a>
          <a href="#why-it-matters" className="hover:text-[#5AABAB] transition-colors">Why It Matters</a>
          <a href="#tool" className="hover:text-[#5AABAB] transition-colors">The Tool</a>
          <a href="#faq" className="hover:text-[#5AABAB] transition-colors">FAQ</a>
          <a href="#about" className="hover:text-[#5AABAB] transition-colors">About</a>
        </div>
        <p className="text-xs text-stone-400" style={{ fontFamily: 'Sweet Sans Pro, system-ui' }}>
          A tool for clearer relationships and shared ownership. Made with intention.
        </p>
      </footer>

    </div>
  );
}
