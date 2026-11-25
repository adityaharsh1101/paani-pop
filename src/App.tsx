import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { initialCampaigns, type Campaign, money } from './data';
import { SPONSOR_CARTONS, InteractiveCarton3D, type SponsorCartonData } from './components/CartonViewer3D';
import { BottleViewer3D } from './components/BottleViewer3D';

type Mode = 'brand' | 'ops';
type PackFormat = 'carton' | 'bottle';

export default function App() {
  const [activeTab, setActiveTab] = useState<'site' | 'portal'>('site');
  const [portalMode, setPortalMode] = useState<Mode>('brand');
  const [brandPage, setBrandPage] = useState('overview');
  const [opsPage, setOpsPage] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Packaging Format Selection: 'carton' (Tetra Pak / Paperboard) vs 'bottle' (100% Recyclable PET)
  const [packFormat, setPackFormat] = useState<PackFormat>('carton');

  // Hero active carton/bottle
  const [activeHeroCarton, setActiveHeroCarton] = useState<SponsorCartonData>(SPONSOR_CARTONS[0]); // Hashlilly
  // Creative studio active carton
  const [creativeCarton, setCreativeCarton] = useState<SponsorCartonData>(SPONSOR_CARTONS[0]);

  // Pricing calculator batch selector: 1000, 2400 (MOQ), 10000
  const [pricingQty, setPricingQty] = useState<number>(2400);

  // Landing page form state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadType, setLeadType] = useState('Brand / advertiser');
  const [leadMessage, setLeadMessage] = useState('');
  const [leadSuccess, setLeadSuccess] = useState(false);

  // FAQ Accordion state
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});
  const toggleFaq = (idx: number) => {
    setOpenFaqs(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Toast state
  const [toast, setToast] = useState('');
  const showToast = (msg: string = 'Nice. This is a clickable prototype — action recorded.') => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  // Campaigns & Modals in Dashboard
  const [campaignList, setCampaignList] = useState<Campaign[]>(initialCampaigns);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  // Filter state for campaigns table
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCampaigns = useMemo(() => {
    return campaignList.filter(c => {
      const matchStatus = statusFilter === 'All' || c.status.toLowerCase() === statusFilter.toLowerCase();
      const matchQuery = [c.name, c.brand, c.id, c.format, c.edition, c.venueTarget]
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchStatus && matchQuery;
    });
  }, [campaignList, statusFilter, searchQuery]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSuccess(true);
    showToast('Enquiry received! Early partner access requested.');
  };

  const handleAddCampaign = (newC: Campaign) => {
    setCampaignList(prev => [newC, ...prev]);
    showToast(`Campaign "${newC.name}" added to pipeline!`);
  };

  const scrollToContact = (interestType?: string) => {
    if (interestType) {
      setLeadType(interestType);
    }
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header */}
      <header className="wrap nav">
        <a className="logo" href="#top" aria-label="PAANI POP home">
          PAANI<span className="logo-mark">✳</span>POP
        </a>
        <button
          className="menu"
          id="menu"
          aria-label="Open navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '×' : '☰'}
        </button>
        <nav className={`navlinks ${mobileMenuOpen ? 'open' : ''}`} id="navlinks">
          {activeTab === 'site' ? (
            <>
              <a href="#why" onClick={() => setMobileMenuOpen(false)}>THE IDEA</a>
              <a href="#cartons-showcase" onClick={() => setMobileMenuOpen(false)}>3D MODELS</a>
              <a href="#pricing-calculator" onClick={() => setMobileMenuOpen(false)}>RATE CARD & COSTS</a>
              <a href="#template-builder" onClick={() => setMobileMenuOpen(false)}>DESIGN STUDIO</a>
              <a href="#editions" onClick={() => setMobileMenuOpen(false)}>THE VIBES</a>
              <a href="#how" onClick={() => setMobileMenuOpen(false)}>HOW IT WORKS</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <button
                className="btn lime"
                style={{ padding: '10px 18px', fontSize: '12px' }}
                onClick={() => { setActiveTab('portal'); setMobileMenuOpen(false); }}
              >
                ⚡ DASHBOARD PLAYGROUND
              </button>
              <button
                className="navcta"
                onClick={() => { scrollToContact(); setMobileMenuOpen(false); }}
              >
                LET'S POP OFF ↗
              </button>
            </>
          ) : (
            <>
              <button
                className="btn"
                style={{ background: '#fff' }}
                onClick={() => setActiveTab('site')}
              >
                ← Back to Public Website
              </button>
              <button
                className={`btn ${portalMode === 'brand' ? 'lime' : ''}`}
                onClick={() => setPortalMode('brand')}
              >
                ✳ Brand Portal
              </button>
              <button
                className={`btn ${portalMode === 'ops' ? 'lime' : ''}`}
                onClick={() => setPortalMode('ops')}
              >
                ⚡ Ops Dashboard
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Main Content Area */}
      {activeTab === 'site' ? (
        <main id="top">
          {/* Hero Section with Interactive 3D Sponsor Carton */}
          <section className="hero wrap">
            <div className="hero-grid">
              <div>
                <div className="pill"><span className="dot"></span> A fresh kind of brand activation</div>
                <h1>WATER.<br /><span className="pop">BUT</span><br />MAKE IT<br />POP<span style={{ color: 'var(--pink)' }}>.</span></h1>
                <p className="hero-copy">The water is free. The packaging has a personality. <strong>The brands make it happen.</strong></p>
                <div className="hero-actions">
                  <button className="btn dark" onClick={() => scrollToContact('Brand / advertiser')}>I'M A BRAND ↗</button>
                  <button className="btn lime" onClick={() => scrollToContact('Venue / event organiser')}>I HAVE A VENUE ↗</button>
                  <button className="btn" style={{ background: '#fff' }} onClick={() => setActiveTab('portal')}>OPEN DASHBOARD PLAYGROUND ⚡</button>
                </div>
                <div className="micro">500 ML OF HYDRATION. 100% LESS BORING. REAL 3D PACKAGING BELOW.</div>

                {/* Format Switcher: Paperboard Carton vs Recyclable PET Bottle */}
                <div style={{ marginTop: '22px', background: '#EDEAE2', padding: '14px 18px', borderRadius: '18px', border: '1.5px solid var(--ink)', boxShadow: '3px 3px 0 var(--ink)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ font: "800 11px 'DM Mono', monospace", color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      PACKAGING FORMAT:
                    </span>
                    <span style={{ font: "700 10px 'JetBrains Mono', monospace", background: packFormat === 'bottle' ? 'var(--blue)' : 'var(--lime)', color: packFormat === 'bottle' ? '#fff' : 'var(--ink)', padding: '3px 8px', borderRadius: '99px', border: '1px solid var(--ink)' }}>
                      {packFormat === 'bottle' ? 'PET BOTTLE (₹13.50/u)' : 'PAPER CARTON (₹18.00/u)'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      style={{
                        flex: 1,
                        border: '2px solid var(--ink)',
                        background: packFormat === 'carton' ? 'var(--ink)' : '#fff',
                        color: packFormat === 'carton' ? '#fff' : 'var(--ink)',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        boxShadow: packFormat === 'carton' ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : '2px 2px 0 var(--ink)',
                        transition: 'all 0.15s'
                      }}
                      onClick={() => setPackFormat('carton')}
                    >
                      📦 500 ML CARTON
                    </button>
                    <button
                      type="button"
                      style={{
                        flex: 1,
                        border: '2px solid var(--ink)',
                        background: packFormat === 'bottle' ? 'var(--blue)' : '#fff',
                        color: packFormat === 'bottle' ? '#fff' : 'var(--ink)',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        boxShadow: packFormat === 'bottle' ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : '2px 2px 0 var(--ink)',
                        transition: 'all 0.15s'
                      }}
                      onClick={() => setPackFormat('bottle')}
                    >
                      🍾 500 ML PET BOTTLE
                    </button>
                  </div>
                </div>

                {/* Brand Selector for Hero 3D Carton */}
                <div style={{ marginTop: '18px' }}>
                  <span style={{ font: "700 11px 'DM Mono', monospace", color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    EXPLORE REAL SPONSOR DESIGN:
                  </span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {SPONSOR_CARTONS.map(sc => (
                      <button
                        key={sc.id}
                        type="button"
                        style={{
                          border: '1.5px solid var(--ink)',
                          background: activeHeroCarton.id === sc.id ? 'var(--ink)' : '#fff',
                          color: activeHeroCarton.id === sc.id ? '#fff' : 'var(--ink)',
                          padding: '6px 12px',
                          borderRadius: '99px',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                        onClick={() => setActiveHeroCarton(sc)}
                      >
                        {sc.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Real 3D Model Showcase (Carton or Bottle according to packFormat) */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', minHeight: '600px' }}>
                <div className="sunburst" style={{ zIndex: 1, opacity: 0.85 }}></div>
                <div className="star one" style={{ zIndex: 2 }}>✳</div>
                <div className="star two" style={{ zIndex: 2 }}>✳</div>
                <div className="tape" style={{ zIndex: 5, top: '-25px', left: '10px' }}>
                  {packFormat === 'bottle' ? '3D REAL PET BOTTLE · DRAG TO ROTATE' : '3D REAL SPONSOR CARTON · DRAG TO ROTATE'}
                </div>
                <div className="burst-note" style={{ zIndex: 5, right: '0px', bottom: '0px' }}>
                  {packFormat === 'bottle' ? (
                    <>RECYCLABLE<br />PET BOTTLE<br />EDITION ✳</>
                  ) : (
                    <>SPONSORED<br />BY REAL<br />BRANDS ✳</>
                  )}
                </div>

                {/* Visible Side-by-Side Trio: Left (Startup), Center (This Could Be Yours / Active), Right (Startup) */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: '16px',
                    width: '100%',
                    marginTop: '20px'
                  }}
                >
                  {/* Left Side: InfluenceOS */}
                  <div
                    style={{
                      flex: '0 1 200px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.3s ease',
                      transform: 'rotate(-4deg)'
                    }}
                    onClick={() => setActiveHeroCarton(SPONSOR_CARTONS[2] || SPONSOR_CARTONS[1])}
                    title="Click to feature in center"
                  >
                    <div style={{ textAlign: 'center', marginBottom: '8px', font: "700 10px 'JetBrains Mono', monospace", background: 'var(--blue)', color: '#fff', padding: '4px 12px', borderRadius: '99px', border: '1.5px solid var(--ink)', boxShadow: '2px 2px 0 var(--ink)' }}>
                      {(SPONSOR_CARTONS[2] || SPONSOR_CARTONS[1]).name.toUpperCase()}
                    </div>
                    <div style={{ width: '100%', pointerEvents: 'none' }}>
                      {packFormat === 'bottle' ? (
                        <BottleViewer3D
                          carton={SPONSOR_CARTONS[2] || SPONSOR_CARTONS[1]}
                          scale={0.34}
                          autoSpin={true}
                          hideControls={true}
                          stageHeight={340}
                          translateYOffset={0}
                        />
                      ) : (
                        <InteractiveCarton3D
                          carton={SPONSOR_CARTONS[2] || SPONSOR_CARTONS[1]}
                          scale={0.30}
                          autoSpin={true}
                          hideControls={true}
                          stageHeight={340}
                          translateYOffset={0}
                        />
                      )}
                    </div>
                  </div>

                  {/* Center Feature Model: THIS COULD BE YOURS! (or selected startup) */}
                  <div
                    style={{
                      flex: '1 1 320px',
                      maxWidth: '360px',
                      zIndex: 4,
                      filter: 'drop-shadow(10px 14px 0 rgba(23,23,23,0.18))'
                    }}
                  >
                    <div style={{ textAlign: 'center', marginBottom: '14px', position: 'relative', zIndex: 10 }}>
                      <span style={{ font: "800 11px 'DM Mono', monospace", background: packFormat === 'bottle' ? 'var(--blue)' : 'var(--lime)', border: '1.5px solid var(--ink)', color: packFormat === 'bottle' ? '#fff' : 'var(--ink)', padding: '6px 14px', borderRadius: '99px', boxShadow: '2px 2px 0 var(--ink)', display: 'inline-block', whiteSpace: 'nowrap' }}>
                        ✦ {activeHeroCarton.id === 'custom-empty' ? `THIS COULD BE YOURS! (${packFormat.toUpperCase()} SPOT)` : `${activeHeroCarton.name.toUpperCase()} · ${packFormat.toUpperCase()} DROP`}
                      </span>
                    </div>
                    {packFormat === 'bottle' ? (
                      <BottleViewer3D
                        carton={activeHeroCarton}
                        scale={0.46}
                        autoSpin={false}
                        hideControls={false}
                        stageHeight={420}
                        translateYOffset={0}
                      />
                    ) : (
                      <InteractiveCarton3D
                        carton={activeHeroCarton}
                        scale={0.36}
                        autoSpin={false}
                        hideControls={false}
                        stageHeight={420}
                        translateYOffset={0}
                      />
                    )}
                  </div>

                  {/* Right Side: Hashlilly */}
                  <div
                    style={{
                      flex: '0 1 200px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.3s ease',
                      transform: 'rotate(4deg)'
                    }}
                    onClick={() => setActiveHeroCarton(SPONSOR_CARTONS[6] || SPONSOR_CARTONS[1])}
                    title="Click to feature in center"
                  >
                    <div style={{ textAlign: 'center', marginBottom: '8px', font: "700 10px 'JetBrains Mono', monospace", background: '#1A1230', color: '#fff', padding: '4px 12px', borderRadius: '99px', border: '1.5px solid var(--ink)', boxShadow: '2px 2px 0 var(--ink)' }}>
                      {(SPONSOR_CARTONS[6] || SPONSOR_CARTONS[1]).name.toUpperCase()}
                    </div>
                    <div style={{ width: '100%', pointerEvents: 'none' }}>
                      {packFormat === 'bottle' ? (
                        <BottleViewer3D
                          carton={SPONSOR_CARTONS[6] || SPONSOR_CARTONS[1]}
                          scale={0.34}
                          autoSpin={true}
                          hideControls={true}
                          stageHeight={340}
                          translateYOffset={0}
                        />
                      ) : (
                        <InteractiveCarton3D
                          carton={SPONSOR_CARTONS[6] || SPONSOR_CARTONS[1]}
                          scale={0.30}
                          autoSpin={true}
                          hideControls={true}
                          stageHeight={340}
                          translateYOffset={0}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marquee Ticker */}
          <div className="ticker">
            <div className="ticker-track">
              <span>FREE WATER</span><b>✳</b><span>LOUD PACKAGING</span><b>✳</b><span>GOOD BRAND ENERGY</span><b>✳</b>
              <span>FREE WATER</span><b>✳</b><span>LOUD PACKAGING</span><b>✳</b><span>GOOD BRAND ENERGY</span><b>✳</b>
              <span>FREE WATER</span><b>✳</b><span>LOUD PACKAGING</span><b>✳</b><span>GOOD BRAND ENERGY</span><b>✳</b>
              <span>FREE WATER</span><b>✳</b><span>LOUD PACKAGING</span><b>✳</b><span>GOOD BRAND ENERGY</span><b>✳</b>
            </div>
          </div>

          {/* 01 / The Idea */}
          <section id="why" className="wrap">
            <div className="intro reveal visible">
              <div>
                <div className="intro-stamp">THE<br />GOOD<br />STUFF<br />IS FREE.</div>
              </div>
              <div>
                <div className="eyebrow">01 / THE IDEA</div>
                <h2>Someone's thirsty.<br /><em>Someone's sponsoring.</em></h2>
                <p>We put free drinking water into people's hands at weddings, events, campuses and workplaces. Brands fund the drop, and get a creative little space in the real world — not another ad people scroll past.</p>
                <p>Useful for people. Memorable for brands. A tiny bit chaotic, in the best way.</p>
                <span className="sticker">NO WALLET REQUIRED ↗</span>
              </div>
            </div>
          </section>

          {/* 3D Showcase & Portfolio Case Studies */}
          <section id="cartons-showcase" style={{ background: '#EDEAE2', padding: '90px 0', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)' }}>
            <div className="wrap">
              <div className="section-head reveal visible">
                <div>
                  <div className="eyebrow">PORTFOLIO CASE STUDIES · DUAL FORMAT</div>
                  <h2>This is how we make it for you.</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <p style={{ margin: 0 }}>See how we turned real startup briefs into physical drops across tech, fashion, mental wellness, and creator tools. We will make yours with the exact same precision.</p>
                  <div style={{ display: 'inline-flex', background: '#fff', padding: '4px', borderRadius: '99px', border: '1.5px solid var(--ink)', boxShadow: '2px 2px 0 var(--ink)' }}>
                    <button
                      type="button"
                      style={{
                        padding: '6px 14px',
                        borderRadius: '99px',
                        border: 'none',
                        background: packFormat === 'carton' ? 'var(--ink)' : 'transparent',
                        color: packFormat === 'carton' ? '#fff' : 'var(--ink)',
                        fontSize: '11px',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                      onClick={() => setPackFormat('carton')}
                    >
                      📦 Cartons
                    </button>
                    <button
                      type="button"
                      style={{
                        padding: '6px 14px',
                        borderRadius: '99px',
                        border: 'none',
                        background: packFormat === 'bottle' ? 'var(--blue)' : 'transparent',
                        color: packFormat === 'bottle' ? '#fff' : 'var(--ink)',
                        fontSize: '11px',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                      onClick={() => setPackFormat('bottle')}
                    >
                      🍾 PET Bottles
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '30px' }}>
                {SPONSOR_CARTONS.map(carton => (
                  <div
                    key={carton.id}
                    style={{
                      background: '#fff',
                      border: '2.5px solid var(--ink)',
                      borderRadius: '24px',
                      padding: '22px 18px',
                      boxShadow: '6px 6px 0 var(--ink)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ font: "700 10px 'JetBrains Mono', monospace", background: carton.roof, color: carton.roofink, padding: '4px 8px', borderRadius: '99px', border: '1px solid var(--ink)' }}>
                          {carton.id === 'custom-empty' ? 'YOUR BRAND SPOT' : 'BRAND CASE STUDY'} · {packFormat.toUpperCase()}
                        </span>
                        <a
                          href={`/cartons/carton-${carton.id === 'custom-empty' ? 'template' : carton.id}.html`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ font: "700 11px 'DM Sans', sans-serif", color: 'var(--blue)', textDecoration: 'none' }}
                        >
                          Flat Dieline ↗
                        </a>
                      </div>
                      <h3 style={{ font: "900 28px 'Space Grotesk', sans-serif", margin: '6px 0 4px', letterSpacing: '-0.8px' }}>
                        {carton.name}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#555', margin: '0 0 14px', lineHeight: 1.4 }}>
                        {carton.desc}
                      </p>
                    </div>

                    <div style={{ background: '#F6F3EC', border: '1.5px solid var(--ink)', borderRadius: '16px', overflow: 'hidden', padding: '10px 0' }}>
                      {packFormat === 'bottle' ? (
                        <BottleViewer3D carton={carton} scale={0.46} autoSpin={false} stageHeight={410} translateYOffset={0} />
                      ) : (
                        <InteractiveCarton3D carton={carton} scale={0.36} autoSpin={false} stageHeight={410} translateYOffset={0} />
                      )}
                    </div>

                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                      <button
                        className="btn lime"
                        style={{ flex: 1, padding: '10px', fontSize: '12px' }}
                        onClick={() => { setActiveHeroCarton(carton); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      >
                        Feature in Hero ↗
                      </button>
                      <button
                        className="btn dark"
                        style={{ flex: 1.2, padding: '10px 12px', fontSize: '12px' }}
                        onClick={() => scrollToContact(carton.id === 'custom-empty' ? 'Custom Brand' : `Make Like ${carton.name}`)}
                      >
                        {carton.id === 'custom-empty' ? 'Make This Mine ↗' : 'Make Mine Like This ↗'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing & Cost Transparency Section (Priced As Per Their Exact Cost) */}
          <section id="pricing-calculator" style={{ background: '#fff', padding: '90px 0', borderBottom: '2px solid var(--ink)' }}>
            <div className="wrap">
              <div className="section-head reveal visible">
                <div>
                  <div className="eyebrow">TRANSPARENT ECONOMICS & SPONSOR RATE CARD</div>
                  <h2>Priced as per their cost. Exactly.</h2>
                </div>
                <p>We believe in radical clarity. Water bottles and paperboard cartons have fundamentally different production economics, procurement MOQs, and logistics. See the breakdown below.</p>
              </div>

              {/* Package Batch Size Selector */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <button
                  type="button"
                  style={{
                    padding: '10px 18px',
                    borderRadius: '99px',
                    border: '2px solid var(--ink)',
                    background: pricingQty === 1000 ? 'var(--ink)' : '#fff',
                    color: pricingQty === 1000 ? '#fff' : 'var(--ink)',
                    fontWeight: 800,
                    fontSize: '13px',
                    boxShadow: pricingQty === 1000 ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : '3px 3px 0 var(--ink)'
                  }}
                  onClick={() => setPricingQty(1000)}
                >
                  ⚡ 1,000 UNITS (Micro-Drop)
                </button>
                <button
                  type="button"
                  style={{
                    padding: '10px 18px',
                    borderRadius: '99px',
                    border: '2px solid var(--ink)',
                    background: pricingQty === 2400 ? 'var(--lime)' : '#fff',
                    color: 'var(--ink)',
                    fontWeight: 800,
                    fontSize: '13px',
                    boxShadow: pricingQty === 2400 ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : '3px 3px 0 var(--ink)'
                  }}
                  onClick={() => setPricingQty(2400)}
                >
                  ★ 2,400 UNITS (Custom Label MOQ · Recommended)
                </button>
                <button
                  type="button"
                  style={{
                    padding: '10px 18px',
                    borderRadius: '99px',
                    border: '2px solid var(--ink)',
                    background: pricingQty === 10000 ? 'var(--blue)' : '#fff',
                    color: pricingQty === 10000 ? '#fff' : 'var(--ink)',
                    fontWeight: 800,
                    fontSize: '13px',
                    boxShadow: pricingQty === 10000 ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : '3px 3px 0 var(--ink)'
                  }}
                  onClick={() => setPricingQty(10000)}
                >
                  🚀 10,000 UNITS (Enterprise City Takeover)
                </button>
              </div>

              {/* Side-by-Side Dual Pricing Cards: Plastic Bottle vs Carton */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
                {/* 1. Recyclable PET Bottle Card */}
                <div style={{ border: '2.5px solid var(--ink)', borderRadius: '24px', padding: '30px', background: '#F4F8FF', boxShadow: '8px 8px 0 var(--ink)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="pill" style={{ background: 'var(--blue)', color: '#fff', border: '1.5px solid var(--ink)' }}>
                        🍾 500 ML RECYCLABLE PET BOTTLE
                      </span>
                      <span style={{ font: "700 11px 'DM Mono', monospace", color: '#555' }}>
                        MOQ: 2,400 UNITS
                      </span>
                    </div>

                    <div style={{ margin: '20px 0 12px' }}>
                      <span style={{ fontSize: '13px', color: '#666', fontWeight: 700 }}>SPONSOR FEE PER BOTTLE</span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ font: "900 48px/1 'Space Grotesk', sans-serif", letterSpacing: '-2px' }}>
                          ₹{pricingQty === 1000 ? '15.00' : pricingQty === 2400 ? '14.00' : '13.50'}
                        </span>
                        <span style={{ font: "700 14px 'DM Mono', monospace", color: '#666' }}>/ bottle</span>
                      </div>
                      <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#555' }}>
                        + ₹{pricingQty === 1000 ? '2,500' : pricingQty === 2400 ? '3,500' : '5,000'} plate setup fee · Total: ₹{pricingQty === 1000 ? '17,500' : pricingQty === 2400 ? '37,100' : '1,40,000'}
                      </p>
                    </div>

                    <div style={{ borderTop: '1.5px dashed var(--ink)', paddingTop: '16px', marginTop: '16px' }}>
                      <span style={{ font: "800 11px 'DM Mono', monospace", color: 'var(--blue)', textTransform: 'uppercase' }}>
                        EXACT COST BREAKDOWN (AT ₹6.50 BASE PROCUREMENT):
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0', fontSize: '13px', display: 'grid', gap: '8px' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Bottle Procurement (500 ml filled & sealed)</span>
                          <b>₹{pricingQty === 1000 ? '6,500' : pricingQty === 2400 ? '15,600' : '65,000'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Corrugated Outer Cartons & Secondary Packing</span>
                          <b>₹{pricingQty === 1000 ? '250' : pricingQty === 2400 ? '600' : '2,500'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>QC Rejects & Transit Damage Reserve (2%)</span>
                          <b>₹{pricingQty === 1000 ? '135' : pricingQty === 2400 ? '324' : '1,350'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Commercial Logistics & Tata Ace Dispatch</span>
                          <b>₹{pricingQty === 1000 ? '2,500' : pricingQty === 2400 ? '4,500' : '10,000'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Event Runners & Unloading Handlers</span>
                          <b>₹{pricingQty === 1000 ? '1,500' : pricingQty === 2400 ? '3,000' : '28,300'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Creative Coordination & FSSAI Compliance</span>
                          <b>₹{pricingQty === 1000 ? '1,000' : pricingQty === 2400 ? '1,500' : '2,000'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #c8d8f0', paddingTop: '6px', fontWeight: 800 }}>
                          <span>Total Unit Operating Cost</span>
                          <span style={{ color: 'var(--blue)' }}>
                            ₹{pricingQty === 1000 ? '11.88' : pricingQty === 2400 ? '10.63' : '10.91'}/u
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <div style={{ background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid var(--ink)', marginBottom: '14px', fontSize: '12px' }}>
                      💡 <b>Best for:</b> High-volume sports tournaments, tech summits, outdoor campus festivals, and mass lead generation with fast 7-day turnaround.
                    </div>
                    <button
                      className="btn blue"
                      style={{ width: '100%', padding: '14px' }}
                      onClick={() => scrollToContact(`500 ml PET Bottle (${pricingQty} units)`)}
                    >
                      ORDER PET BOTTLE DROP ↗
                    </button>
                  </div>
                </div>

                {/* 2. Paperboard Gable-Top Carton Card */}
                <div style={{ border: '2.5px solid var(--ink)', borderRadius: '24px', padding: '30px', background: '#F8F6EF', boxShadow: '8px 8px 0 var(--ink)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="pill" style={{ background: 'var(--lime)', color: 'var(--ink)', border: '1.5px solid var(--ink)' }}>
                        📦 500 ML PAPERBOARD CARTON
                      </span>
                      <span style={{ font: "700 11px 'DM Mono', monospace", color: '#555' }}>
                        MOQ: 5,000 UNITS
                      </span>
                    </div>

                    <div style={{ margin: '20px 0 12px' }}>
                      <span style={{ fontSize: '13px', color: '#666', fontWeight: 700 }}>SPONSOR FEE PER CARTON</span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ font: "900 48px/1 'Space Grotesk', sans-serif", letterSpacing: '-2px' }}>
                          ₹{pricingQty === 1000 ? '22.00' : pricingQty === 2400 ? '19.50' : '18.00'}
                        </span>
                        <span style={{ font: "700 14px 'DM Mono', monospace", color: '#666' }}>/ carton</span>
                      </div>
                      <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#555' }}>
                        + ₹{pricingQty === 1000 ? '4,000' : pricingQty === 2400 ? '5,000' : '7,500'} die plate fee · Total: ₹{pricingQty === 1000 ? '26,000' : pricingQty === 2400 ? '51,800' : '1,87,500'}
                      </p>
                    </div>

                    <div style={{ borderTop: '1.5px dashed var(--ink)', paddingTop: '16px', marginTop: '16px' }}>
                      <span style={{ font: "800 11px 'DM Mono', monospace", color: '#886000', textTransform: 'uppercase' }}>
                        EXACT COST BREAKDOWN (AT ₹10.50 BASE CARTON PROCUREMENT):
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0', fontSize: '13px', display: 'grid', gap: '8px' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Aseptic Carton Laminate & Specialized Filling</span>
                          <b>₹{pricingQty === 1000 ? '10,500' : pricingQty === 2400 ? '25,200' : '1,05,000'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>FSC-Certified Board & 4-Side Offset Coating</span>
                          <b>₹{pricingQty === 1000 ? '1,200' : pricingQty === 2400 ? '2,800' : '11,000'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Damage & Pressure Seal Reserve (3%)</span>
                          <b>₹{pricingQty === 1000 ? '350' : pricingQty === 2400 ? '840' : '3,500'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Climate-Controlled Courier & Direct Freight</span>
                          <b>₹{pricingQty === 1000 ? '3,500' : pricingQty === 2400 ? '6,500' : '15,000'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Event Runners & Unloading Handlers</span>
                          <b>₹{pricingQty === 1000 ? '1,500' : pricingQty === 2400 ? '3,000' : '28,300'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Dieline Proofing & FSSAI Verification</span>
                          <b>₹{pricingQty === 1000 ? '1,500' : pricingQty === 2400 ? '2,000' : '3,000'}</b>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #ded9cb', paddingTop: '6px', fontWeight: 800 }}>
                          <span>Total Unit Operating Cost</span>
                          <span style={{ color: 'var(--ink)' }}>
                            ₹{pricingQty === 1000 ? '18.55' : pricingQty === 2400 ? '16.80' : '16.58'}/u
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <div style={{ background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid var(--ink)', marginBottom: '14px', fontSize: '12px' }}>
                      🌿 <b>Best for:</b> Luxury boutique weddings, ESG conferences, VIP lounges, design-forward brands, and eco-conscious brand statements.
                    </div>
                    <button
                      className="btn lime"
                      style={{ width: '100%', padding: '14px' }}
                      onClick={() => scrollToContact(`500 ml Paperboard Carton (${pricingQty} units)`)}
                    >
                      ORDER CARTON DROP ↗
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Custom Carton Template Studio: How We Make It For You */}
          <section id="template-builder" style={{ background: '#F6F3EC', padding: '90px 0', borderBottom: '2px solid var(--ink)' }}>
            <div className="wrap">
              <div className="section-head reveal visible">
                <div>
                  <div className="eyebrow">CUSTOM PACKAGING ENGINE · HOW IT WORKS</div>
                  <h2>This is how we make it for you.</h2>
                </div>
                <p>Every brand gets an exact 4-side carton dieline, custom color schemes, QR routing, and legal metrology space. Try the live template engine below.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '32px', alignItems: 'center', marginTop: '20px' }}>
                <div style={{ background: '#fff', border: '2.5px solid var(--ink)', borderRadius: '24px', padding: '32px', boxShadow: '8px 8px 0 var(--ink)' }}>
                  <div className="pill" style={{ marginBottom: '14px' }}>
                    <span className="dot"></span> READY-TO-PRINT DIELINE WORKFLOW
                  </div>
                  <h3 style={{ font: "900 32px 'Space Grotesk', sans-serif", letterSpacing: '-1px', margin: '10px 0' }}>
                    From your brand brief to physical drops.
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#444' }}>
                    You don't need packaging engineers or printing agencies. We provide the certified FSSAI 500 ml template: you supply your message, brand colors, and campaign link, and our engine configures the full wrap with matching gable roofs.
                  </p>

                  <div style={{ display: 'grid', gap: '14px', margin: '24px 0' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ font: "800 13px/1 'JetBrains Mono', monospace", background: 'var(--lime)', border: '1.5px solid var(--ink)', borderRadius: '50%', width: '28px', height: '28px', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                        1
                      </span>
                      <div>
                        <b style={{ fontSize: '14px' }}>4-Side Dieline Customization</b>
                        <p style={{ margin: '3px 0 0', fontSize: '13px', color: '#666' }}>Front billboard hero, Side A story bullets, Back QR engagement station, and Side B brand belief.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ font: "800 13px/1 'JetBrains Mono', monospace", background: 'var(--pink)', border: '1.5px solid var(--ink)', borderRadius: '50%', width: '28px', height: '28px', display: 'grid', placeItems: 'center', flexShrink: 0, color: '#fff' }}>
                        2
                      </span>
                      <div>
                        <b style={{ fontSize: '14px' }}>Rotatable 3D Proof Before Printing</b>
                        <p style={{ margin: '3px 0 0', fontSize: '13px', color: '#666' }}>Inspect your carton from any angle. Preview how the fold, gable slopes, and cap integration will look in hands.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ font: "800 13px/1 'JetBrains Mono', monospace", background: 'var(--blue)', border: '1.5px solid var(--ink)', borderRadius: '50%', width: '28px', height: '28px', display: 'grid', placeItems: 'center', flexShrink: 0, color: '#fff' }}>
                        3
                      </span>
                      <div>
                        <b style={{ fontSize: '14px' }}>Instant Dieline Export to PDF</b>
                        <p style={{ margin: '3px 0 0', fontSize: '13px', color: '#666' }}>Export the 300×760 px panel flat wrap directly to your carton printing partners with zero layout hassle.</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '10px', borderTop: '1px dashed #ccc' }}>
                    <a
                      href="/cartons/carton-template.html"
                      target="_blank"
                      rel="noreferrer"
                      className="btn lime"
                      style={{ textDecoration: 'none', padding: '12px 18px', fontSize: '12px' }}
                    >
                      OPEN FULL TEMPLATE GENERATOR ↗
                    </a>
                    <button
                      className="btn dark"
                      onClick={() => scrollToContact('Brand / advertiser')}
                      style={{ padding: '12px 18px', fontSize: '12px' }}
                    >
                      REQUEST BRAND MOCKUP
                    </button>
                  </div>
                </div>

                {/* Live Template Preview Container */}
                <div style={{ background: '#fff', border: '2.5px solid var(--ink)', borderRadius: '24px', padding: '24px', boxShadow: '8px 8px 0 var(--ink)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ font: "700 11px 'JetBrains Mono', monospace", textTransform: 'uppercase', color: 'var(--blue)' }}>
                      ✦ LIVE 3D TEMPLATE PREVIEW
                    </span>
                    <a
                      href="/cartons/carton-template.html"
                      target="_blank"
                      rel="noreferrer"
                      style={{ font: "700 11px 'DM Sans'", color: 'var(--ink)', textDecoration: 'underline' }}
                    >
                      Launch Full-Screen Editor ↗
                    </a>
                  </div>

                    <div style={{ width: '100%', background: '#EDEAE2', borderRadius: '16px', border: '1.5px solid var(--ink)', padding: '12px 0' }}>
                      <InteractiveCarton3D carton={SPONSOR_CARTONS[0]} scale={0.36} autoSpin={true} stageHeight={410} translateYOffset={0} />
                    </div>

                  <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
                    Drag to rotate · Switch views · Click <b>"Open Full Template Generator"</b> to edit your brand name, colors, and QR link live.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 02 / The Vibes & Editions */}
          <section id="editions" className="editions">
            <div className="wrap">
              <div className="section-head reveal visible">
                <div>
                  <div className="eyebrow">02 / PICK YOUR VIBE</div>
                  <h2>Different carton.<br />Different energy.</h2>
                </div>
                <p>Not every carton has to look the same. Meet the editions — pick what speaks to you. Everyone's invited to every vibe.</p>
              </div>
              <div className="edition-grid">
                <article className="edition her reveal visible">
                  <div>
                    <div className="edition-num">EDITION 001 / SOULAMORE VIBE</div>
                    <h3>GENTLE &<br />MINDFUL<br />HYDRATION.</h3>
                    <p>Therapy circles, soft peach gables, and open dialogue.</p>
                    <div style={{ marginTop: '20px' }}>
                      <InteractiveCarton3D carton={SPONSOR_CARTONS[1]} scale={0.28} autoSpin={true} hideControls={true} stageHeight={270} />
                    </div>
                  </div>
                  <div className="foot"><span>For the plot.</span><b>♡</b></div>
                </article>
                <article className="edition him reveal visible">
                  <div>
                    <div className="edition-num">EDITION 002 / INFLUENCEOS & BUILDER</div>
                    <h3>CREATORS.<br />ESCRW.<br />METRICS.</h3>
                    <p>Electric violet packaging. Escrow paid per view.</p>
                    <div style={{ marginTop: '20px' }}>
                      <InteractiveCarton3D carton={SPONSOR_CARTONS[2]} scale={0.28} autoSpin={true} hideControls={true} stageHeight={270} />
                    </div>
                  </div>
                  <div className="foot"><span>Stay sharp, bro.</span><b>✳</b></div>
                </article>
                <article className="edition all reveal visible">
                  <div>
                    <div className="edition-num">EDITION 003 / HASHLILLY FLAGSHIP</div>
                    <h3>NO MIDDLEMEN.<br />OWN YOUR<br />AUDIENCE.</h3>
                    <p>Cosmic dark purple radial packaging with custom QR.</p>
                    <div style={{ marginTop: '20px' }}>
                      <InteractiveCarton3D carton={SPONSOR_CARTONS[0]} scale={0.28} autoSpin={true} hideControls={true} stageHeight={270} />
                    </div>
                  </div>
                  <div className="foot"><span>Choose your own vibe.</span><b>☺</b></div>
                </article>
              </div>
            </div>
          </section>

          {/* 03 / The Exchange */}
          <section id="how" className="wrap">
            <div className="section-head reveal visible">
              <div>
                <div className="eyebrow">03 / THE EXCHANGE</div>
                <h2>It's a win-win-win.<br />Actually.</h2>
              </div>
              <p>We handle the water, the creative and the logistics. You bring the people or the brand. Everyone gets a little something.</p>
            </div>
            <div className="how-grid">
              <article className="how-card reveal visible">
                <div className="num">01</div>
                <h3>Brands fund the drop.</h3>
                <p>Pick your audience, campaign vibe and location. We turn your brief into a carton people want to pick up.</p>
              </article>
              <article className="how-card reveal visible">
                <div className="num">02</div>
                <h3>We make it happen.</h3>
                <p>We coordinate production, creative, QR experiences and delivery with approved manufacturing and venue partners.</p>
              </article>
              <article className="how-card reveal visible">
                <div className="num">03</div>
                <h3>People get free water.</h3>
                <p>Guests stay refreshed. Your campaign gets a real-world moment. We share delivery and engagement reporting.</p>
              </article>
            </div>
          </section>

          {/* 04 / Calling Brands & Venues */}
          <section className="brands" id="brands">
            <div className="wrap">
              <div className="section-head reveal visible">
                <div>
                  <div className="eyebrow">04 / CALLING THE GOOD BRANDS</div>
                  <h2>Put your brand<br />in good hands.</h2>
                </div>
                <p>Less interrupting. More being part of the moment. Let's make a campaign that gets picked up — literally.</p>
              </div>
              <div className="brand-grid">
                <article className="brand-card advertisers reveal visible">
                  <div>
                    <div className="eyebrow">FOR ADVERTISERS ↗</div>
                    <h3>Your next campaign has a thirst trap.</h3>
                    <p>Sponsored drops, venue takeovers, QR games, offers and custom editions. Let's find the right format for your audience.</p>
                  </div>
                  <button className="btn" onClick={() => scrollToContact('Brand / advertiser')}>SPONSOR A DROP ↗</button>
                </article>
                <article className="brand-card venues reveal visible" id="venues">
                  <div>
                    <div className="eyebrow">FOR VENUES & EVENTS ↗</div>
                    <h3>Good guests. Good water. Zero drama.</h3>
                    <p>Hosting a wedding, conference, campus event or gathering? Partner with us to arrange sponsor-funded water for your guests.</p>
                  </div>
                  <button className="btn" onClick={() => scrollToContact('Venue / event organiser')}>HOST A DROP ↗</button>
                </article>
              </div>
            </div>
          </section>

          {/* 05 / Manifesto */}
          <section className="manifesto">
            <div className="scribble">✳</div>
            <div className="eyebrow">A LITTLE REMINDER</div>
            <h2>HYDRATION<br />IS HOT.<br /><span>THIRST IS NOT.</span></h2>
            <p>Drink up. Have a laugh. Pass the good stuff on.</p>
            <button className="btn dark" onClick={() => scrollToContact()}>LET'S MAKE A DROP ↗</button>
          </section>

          {/* 06 / FAQ */}
          <section id="faq" className="wrap">
            <div className="section-head reveal visible">
              <div>
                <div className="eyebrow">05 / THE QUICK Q'S</div>
                <h2>Okay, but<br />how does it work?</h2>
              </div>
              <p>Fair questions. Here's the short version.</p>
            </div>
            <div className="faq-list reveal visible">
              {[
                { q: "Wait, the water is actually free?", a: "That's the plan: sponsors fund the campaign and consumers receive the water at no charge. Availability depends on the event and campaign allocation." },
                { q: "Where can I find PAANI POP?", a: "We're building our first distribution partnerships around events, banquet halls, workplaces and campuses in India. Public availability will be announced as locations are confirmed." },
                { q: "I'm a brand. What can I sponsor?", a: "You can explore sponsored drops, exclusive venue campaigns, shared sponsorships and optional QR-led experiences. We'll scope quantities, audience, location, creative and reporting together." },
                { q: "I run a venue. Does it cost me anything?", a: "Our proposed model is sponsor-funded water for an agreed event allocation. Venue participation, quantities, delivery and sponsor visibility are agreed before each campaign." },
                { q: "Is PAANI POP available everywhere yet?", a: "Not yet. We're validating manufacturing, packaging compliance and our first venue partnerships before announcing a launch schedule." }
              ].map((item, idx) => {
                const isOpen = !!openFaqs[idx];
                return (
                  <div key={idx} className={`faq ${isOpen ? 'open' : ''}`}>
                    <button type="button" onClick={() => toggleFaq(idx)} aria-expanded={isOpen}>
                      {item.q} <span>{isOpen ? '−' : '＋'}</span>
                    </button>
                    {isOpen && <p>{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 07 / Contact Form */}
          <section className="contact" id="contact">
            <div className="wrap contact-grid">
              <div className="reveal visible">
                <div className="eyebrow">06 / YOUR MOVE</div>
                <h2>Got a crowd?<br />Got a brand?<br />Let's POP.</h2>
                <p>Tell us what you're planning. We're putting together our first sponsored drops in India and would love to hear from brands and venues interested in being early partners.</p>
                <div className="pill"><span className="dot"></span> EARLY PARTNER ENQUIRIES OPEN</div>
              </div>
              <form className="contact-form reveal visible" id="leadform" onSubmit={handleLeadSubmit}>
                <div className="eyebrow">LET'S GET THE BALL ROLLING</div>
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={leadName}
                    onChange={e => setLeadName(e.target.value)}
                    placeholder="The name your friends use"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={leadEmail}
                    onChange={e => setLeadEmail(e.target.value)}
                    placeholder="you@yourbrand.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="type">I'm here as a...</label>
                  <select
                    id="type"
                    name="type"
                    value={leadType}
                    onChange={e => setLeadType(e.target.value)}
                  >
                    <option value="Brand / advertiser">Brand / advertiser</option>
                    <option value="Venue / event organiser">Venue / event organiser</option>
                    <option value="Agency / other partner">Agency / other partner</option>
                    <option value="Just curious">Just curious</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">What's the idea?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={leadMessage}
                    onChange={e => setLeadMessage(e.target.value)}
                    placeholder="Event, audience, campaign, city..."
                  ></textarea>
                </div>
                <button className="btn dark" type="submit">SEND THE GOOD STUFF ↗</button>
                {leadSuccess && (
                  <div className="success" role="status" style={{ display: 'block' }}>
                    Nice one! Enquiry logged in demo mode. Connect to your CRM before publishing to receive live notifications.
                  </div>
                )}
                <div className="form-note">
                  We only use these details to respond to your enquiry. Fully compliant with enterprise data protection guidelines.
                </div>
              </form>
            </div>
          </section>
        </main>
      ) : (
        /* Dashboard Playground */
        <div style={{ flex: 1, padding: '10px 0 30px' }}>
          <section className="intro">
            <div>
              <div className="pill">✦ dashboard playground / concept UI</div>
              <h1 id="heroTitle">
                {portalMode === 'brand' ? (
                  <>Your brand. <span style={{ color: 'var(--blue)' }}>In the flow.</span></>
                ) : (
                  <>Big picture. <span style={{ color: 'var(--blue)' }}>Tiny details.</span></>
                )}
              </h1>
              <p id="heroSub">
                {portalMode === 'brand'
                  ? 'Campaigns, carton drops and real-world buzz — all in one place.'
                  : 'The back office for brands, batches, venues and every little moving part.'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div className="mode">
                <button
                  className={portalMode === 'brand' ? 'active' : ''}
                  onClick={() => { setPortalMode('brand'); setBrandPage('overview'); }}
                >
                  ✳ Brand portal
                </button>
                <button
                  className={portalMode === 'ops' ? 'active' : ''}
                  onClick={() => { setPortalMode('ops'); setOpsPage('overview'); }}
                >
                  ⚡ Ops dashboard
                </button>
              </div>
              <button className="btn" onClick={() => setActiveTab('site')}>Exit to Site ↗</button>
            </div>
          </section>

          <div className="app">
            {/* Sidebar Navigation */}
            <aside className="side">
              <div className="side-brand">
                <b id="sideTitle">{portalMode === 'brand' ? 'GOODMOOD™' : 'PAANI POP / OPS'}</b>
                <p id="sideSub">{portalMode === 'brand' ? 'BRAND WORKSPACE · INDIA' : 'INTERNAL CONTROL ROOM'}</p>
              </div>

              {portalMode === 'brand' ? (
                <nav className="nav" id="brandNav">
                  <div className="navlabel">WORKSPACE</div>
                  {[
                    { id: 'overview', label: 'Overview', ico: '◫' },
                    { id: 'campaigns', label: 'Campaigns', ico: '✳' },
                    { id: 'create', label: 'New campaign', ico: '＋' },
                    { id: 'creative', label: 'Creative studio', ico: '▧' },
                    { id: 'reports', label: 'Reports', ico: '↗' },
                    { id: 'billing', label: 'Billing', ico: '₹' },
                    { id: 'team', label: 'Team & settings', ico: '♧' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      className={brandPage === tab.id ? 'active' : ''}
                      onClick={() => setBrandPage(tab.id)}
                    >
                      <span className="ico">{tab.ico}</span>{tab.label}
                    </button>
                  ))}
                </nav>
              ) : (
                <nav className="nav" id="opsNav">
                  <div className="navlabel">CONTROL ROOM</div>
                  {[
                    { id: 'overview', label: 'Overview', ico: '◫' },
                    { id: 'leads', label: 'Advertisers / CRM', ico: '♙' },
                    { id: 'campaigns', label: 'Campaign pipeline', ico: '✳' },
                    { id: 'production', label: 'Production & stock', ico: '▣' },
                    { id: 'venues', label: 'Venues & drops', ico: '⌖' },
                    { id: 'finance', label: 'Finance', ico: '₹' },
                    { id: 'compliance', label: 'Compliance', ico: '✓' },
                    { id: 'users', label: 'Users & roles', ico: '⚙' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      className={opsPage === tab.id ? 'active' : ''}
                      onClick={() => setOpsPage(tab.id)}
                    >
                      <span className="ico">{tab.ico}</span>{tab.label}
                    </button>
                  ))}
                </nav>
              )}

              <div className="side-bottom">
                <span className="avatar" id="avatar">{portalMode === 'brand' ? 'G' : 'P'}</span>
                <span id="userLabel">{portalMode === 'brand' ? 'Goodmood team' : 'PAANI POP team'}</span><br />
                <span className="mini">SIGNED IN · DEMO</span>
              </div>
            </aside>

            {/* Playground Main Panel */}
            <main className="main">
              {portalMode === 'brand' ? (
                <>
                  {brandPage === 'overview' && (
                    <div>
                      <div className="mainhead">
                        <div>
                          <h2>Hey, Goodmood. ✳</h2>
                          <p>Your campaigns are out there doing their thing.</p>
                        </div>
                        <div className="actions">
                          <button className="btn" onClick={() => showToast('Report exported.')}>↓ Download report</button>
                          <button className="btn dark" onClick={() => setBrandPage('create')}>＋ New campaign</button>
                        </div>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Active campaigns</label><strong>03</strong><small>2 live · 1 in production</small><span className="spark">✳</span></div>
                        <div className="stat"><label>Cartons distributed</label><strong>18.4k</strong><small>Across 12 venue drops</small><span className="spark">↗</span></div>
                        <div className="stat"><label>QR scans</label><strong>2,846</strong><small>+18% this campaign period</small><span className="spark">⌁</span></div>
                        <div className="stat"><label>Campaign spend</label><strong>₹2.4L</strong><small>₹80k pending invoice</small><span className="spark">₹</span></div>
                      </div>
                      <div className="banner">
                        <div>
                          <b>Your next big drop is almost here.</b>
                          <p>Summer Sips · Artwork approved · Production starts 28 Nov</p>
                        </div>
                        <button className="btn" onClick={() => setBrandPage('campaigns')}>Track drop ↗</button>
                      </div>
                      <div className="twocol">
                        <section className="panel">
                          <div className="panelhead"><h3>Campaigns in motion</h3><a style={{ cursor: 'pointer' }} onClick={() => setBrandPage('campaigns')}>ALL CAMPAIGNS ↗</a></div>
                          <div className="campaign">
                            <div className="thumb">🍋</div>
                            <div className="cinfo">
                              <b>Summer Sips</b><small>5,000 cartons · Delhi NCR</small>
                              <div className="progress"><i style={{ width: '72%' }}></i></div>
                              <small>72% to distribution</small>
                            </div>
                            <span className="status">IN PRODUCTION</span>
                          </div>
                          <div className="campaign">
                            <div className="thumb pink">🪩</div>
                            <div className="cinfo">
                              <b>Good Vibes Wedding Edit</b><small>10,000 cartons · 4 venues</small>
                              <div className="progress"><i style={{ width: '100%', background: '#ff6fb4' }}></i></div>
                              <small>Distribution confirmed</small>
                            </div>
                            <span className="status blue">LIVE</span>
                          </div>
                          <div className="campaign">
                            <div className="thumb blue">☁</div>
                            <div className="cinfo">
                              <b>Campus Reset</b><small>3,000 cartons · Chandigarh</small>
                              <div className="progress"><i style={{ width: '25%', background: '#ff8a43' }}></i></div>
                              <small>Awaiting artwork approval</small>
                            </div>
                            <span className="status orange">ACTION</span>
                          </div>
                        </section>
                        <section className="panel">
                          <div className="panelhead"><h3>QR activity</h3><span className="tag">LAST 7 DAYS</span></div>
                          <div className="chart">
                            <div className="bar" style={{ height: '35%' }}><span>M</span></div>
                            <div className="bar" style={{ height: '48%' }}><span>T</span></div>
                            <div className="bar" style={{ height: '41%' }}><span>W</span></div>
                            <div className="bar" style={{ height: '68%' }}><span>T</span></div>
                            <div className="bar" style={{ height: '57%' }}><span>F</span></div>
                            <div className="bar" style={{ height: '86%' }}><span>S</span></div>
                            <div className="bar" style={{ height: '72%' }}><span>S</span></div>
                          </div>
                          <p className="chartnote">2,846 total scans · 406 average per day</p>
                        </section>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Things to do</h3><a style={{ cursor: 'pointer' }} onClick={() => setBrandPage('campaigns')}>VIEW TASKS ↗</a></div>
                        <div className="todo">
                          <span className="dot"></span>
                          <div><b>Approve Campus Reset artwork</b><div className="mini">Due 25 Nov · Campaign team is waiting on you</div></div>
                          <span className="status orange">NEEDS YOU</span>
                        </div>
                        <div className="todo">
                          <span className="dot" style={{ background: 'var(--lime)' }}></span>
                          <div><b>Download Good Vibes final report</b><div className="mini">Completed yesterday · Ready to share</div></div>
                          <span className="status">READY</span>
                        </div>
                      </section>
                    </div>
                  )}

                  {brandPage === 'campaigns' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Your campaigns</h2><p>Every drop, one neat little place.</p></div>
                        <button className="btn dark" onClick={() => setCreateModalOpen(true)}>＋ Start a campaign</button>
                      </div>
                      <div className="filter-bar" style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                        <div className="search-field" style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#fff', border: '1.5px solid var(--ink)', borderRadius: '9px', padding: '0 10px' }}>
                          <Search size={15} />
                          <input
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Filter campaigns or formats..."
                            style={{ border: 'none', width: '100%', padding: '10px', outline: 'none', font: 'inherit', fontSize: '12px' }}
                          />
                        </div>
                        <select
                          value={statusFilter}
                          onChange={e => setStatusFilter(e.target.value)}
                          style={{ border: '1.5px solid var(--ink)', borderRadius: '9px', padding: '0 12px', background: '#fff', font: 'inherit', fontSize: '12px' }}
                        >
                          <option value="All">All Statuses</option>
                          <option value="Live">Live</option>
                          <option value="Planning">Planning</option>
                          <option value="In review">In review</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Campaign overview</h3><span className="tag">{filteredCampaigns.length} SHOWING</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead>
                              <tr>
                                <th>Campaign</th>
                                <th>Quantity</th>
                                <th>Location</th>
                                <th>Format & Edition</th>
                                <th>Status</th>
                                <th>Budget</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredCampaigns.map(c => (
                                <tr key={c.id}>
                                  <td><b>{c.name}</b><br /><span className="mini">{c.id} · {c.brand}</span></td>
                                  <td>{c.volume.toLocaleString('en-IN')}</td>
                                  <td>{c.venueTarget}</td>
                                  <td>{c.format} <br /><span className="mini" style={{ color: 'var(--blue)', fontWeight: 700 }}>{c.edition} Edition</span></td>
                                  <td><span className={`status ${c.status === 'Live' ? 'blue' : ''}`}>{c.status}</span></td>
                                  <td><b>{money(c.budget)}</b></td>
                                  <td>
                                    <button
                                      className="btn"
                                      style={{ padding: '4px 8px', fontSize: '10px' }}
                                      onClick={() => setSelectedCampaign(c)}
                                    >
                                      Dossier
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </section>
                      <section className="panel">
                        <div className="panelhead"><h3>Campaign status key</h3></div>
                        <p className="mini">Submitted → Quote shared → Approved → Artwork → Production → Dispatched → At venue → Distributed → Report ready.</p>
                      </section>
                    </div>
                  )}

                  {brandPage === 'create' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Let's make a splash.</h2><p>Tell us the vibe. We'll figure out the logistics.</p></div>
                        <span className="pill">NEW CAMPAIGN BRIEF</span>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>01 / The basics</h3><span className="mini">DEMO FORM</span></div>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}>
                          <label className="mini">CAMPAIGN NAME<input placeholder="e.g. Summer Sips" className="field" /></label>
                          <label className="mini">BRAND / PRODUCT<input placeholder="Your brand name" className="field" /></label>
                          <label className="mini">CAMPAIGN OBJECTIVE
                            <select className="field">
                              <option>Brand awareness</option>
                              <option>Product launch</option>
                              <option>Event sponsorship</option>
                              <option>Store visits</option>
                              <option>Engagement / QR activation</option>
                            </select>
                          </label>
                          <label className="mini">FORMAT
                            <select className="field">
                              <option>Sponsored carton edition</option>
                              <option>Exclusive event edition</option>
                              <option>Shared sponsor edition</option>
                              <option>QR-led activation</option>
                            </select>
                          </label>
                          <label className="mini">CITY / REGION<input placeholder="e.g. Delhi NCR" className="field" /></label>
                          <label className="mini">ESTIMATED QUANTITY
                            <select className="field">
                              <option>1,000–2,500</option>
                              <option>2,500–5,000</option>
                              <option>5,000–10,000</option>
                              <option>10,000+</option>
                            </select>
                          </label>
                        </div>
                        <div className="panelhead" style={{ marginTop: '20px' }}><h3>02 / The brief</h3></div>
                        <textarea className="field" placeholder="What's the campaign idea? Who do you want to reach? Any dates or venue preferences?" style={{ width: '100%', minHeight: '100px' }}></textarea>
                        <div className="panelhead" style={{ marginTop: '20px' }}><h3>03 / Your timeline</h3></div>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}>
                          <label className="mini">PREFERRED START DATE<input type="date" className="field" /></label>
                          <label className="mini">WORK EMAIL<input placeholder="you@brand.com" className="field" /></label>
                        </div>
                        <button className="btn dark" style={{ marginTop: '15px' }} onClick={() => showToast('Campaign brief transmitted to PAANI POP ops queue.')}>Send campaign brief ↗</button>
                      </section>
                    </div>
                  )}

                  {/* Creative Studio with Real 3D Carton Viewer & Print Dielines */}
                  {brandPage === 'creative' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Creative studio 🎨</h2><p>Live 3D proof visualizer and packaging dielines.</p></div>
                        <span className="status orange">1 APPROVAL NEEDED</span>
                      </div>

                      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                        {SPONSOR_CARTONS.map(c => (
                          <button
                            key={c.id}
                            className={`btn ${creativeCarton.id === c.id ? 'lime' : ''}`}
                            style={{ padding: '7px 13px', fontSize: '11px', background: creativeCarton.id === c.id ? 'var(--lime)' : '#fff' }}
                            onClick={() => setCreativeCarton(c)}
                          >
                            {c.name}
                          </button>
                        ))}
                      </div>

                      <div className="twocol">
                        <section className="panel">
                          <div className="panelhead">
                            <h3>3D Carton Proof · {creativeCarton.name}</h3>
                            <a
                              href={`/cartons/carton-${creativeCarton.id === 'custom-empty' ? 'template' : creativeCarton.id}.html`}
                              target="_blank"
                              rel="noreferrer"
                              style={{ font: "700 11px 'DM Sans'", color: 'var(--blue)' }}
                            >
                              Open Full Flat Wrap ↗
                            </a>
                          </div>

                          <div style={{ background: '#f0eee5', border: '1.5px dashed var(--ink)', padding: '16px', borderRadius: '16px' }}>
                            <InteractiveCarton3D carton={creativeCarton} scale={0.46} autoSpin={true} stageHeight={470} />
                          </div>

                          <div className="actions" style={{ marginTop: '14px' }}>
                            <button className="btn lime" onClick={() => showToast('Proof approved and released to production.')}>✓ Approve proof</button>
                            <button className="btn" onClick={() => showToast('Feedback transmitted to design team.')}>Request changes</button>
                            <a
                              href="/cartons/paanipop-sponsor-cartons.html"
                              target="_blank"
                              rel="noreferrer"
                              className="btn"
                              style={{ textDecoration: 'none', background: '#fff' }}
                            >
                              🖨️ Export PDF Dieline ↗
                            </a>
                          </div>
                        </section>

                        <section className="panel">
                          <h3 style={{ font: "700 15px 'Space Grotesk'" }}>Proof checklist</h3>
                          <div className="todo"><span className="dot" style={{ background: 'var(--lime)' }}></span><div>Brand logo and colours match supplied assets</div></div>
                          <div className="todo"><span className="dot" style={{ background: 'var(--lime)' }}></span><div>QR code opens the correct campaign page</div></div>
                          <div className="todo"><span className="dot" style={{ background: 'var(--lime)' }}></span><div>Mandatory product and label information verified</div></div>
                          <div className="todo"><span className="dot" style={{ background: 'var(--lime)' }}></span><div>Artwork dimensions match supplier dieline</div></div>
                          <p className="mini" style={{ marginTop: '18px' }}>Final release remains subject to PAANI POP compliance approval and manufacturer specifications.</p>
                        </section>
                      </div>
                    </div>
                  )}

                  {brandPage === 'reports' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Proof, not puff.</h2><p>Campaign reporting that separates actual distribution from digital engagement.</p></div>
                        <button className="btn" onClick={() => showToast('Report spreadsheet downloaded.')}>↓ Export report</button>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Produced</label><strong>18,400</strong><small>Batch records</small></div>
                        <div className="stat"><label>At venues</label><strong>17,900</strong><small>Venue receipt confirmations</small></div>
                        <div className="stat"><label>Distributed</label><strong>16,250</strong><small>Venue-reported handout</small></div>
                        <div className="stat"><label>QR scans</label><strong>2,846</strong><small>Scan events, not unique people</small></div>
                      </div>
                      <div className="twocol">
                        <section className="panel">
                          <h3 style={{ font: "700 15px 'Space Grotesk'" }}>Distribution funnel</h3>
                          <p className="mini">ILLUSTRATIVE CAMPAIGN TOTAL</p>
                          <div className="todo"><span>Produced</span><b style={{ marginLeft: 'auto' }}>18,400</b></div>
                          <div className="progress"><i style={{ width: '100%' }}></i></div>
                          <div className="todo"><span>Received at venues</span><b style={{ marginLeft: 'auto' }}>17,900</b></div>
                          <div className="progress"><i style={{ width: '97%' }}></i></div>
                          <div className="todo"><span>Confirmed distributed</span><b style={{ marginLeft: 'auto' }}>16,250</b></div>
                          <div className="progress"><i style={{ width: '88%', background: 'var(--pink)' }}></i></div>
                        </section>
                        <section className="panel">
                          <h3 style={{ font: "700 15px 'Space Grotesk'" }}>Engagement pulse</h3>
                          <div className="chart">
                            <div className="bar" style={{ height: '32%' }}><span>M</span></div>
                            <div className="bar" style={{ height: '53%' }}><span>T</span></div>
                            <div className="bar" style={{ height: '42%' }}><span>W</span></div>
                            <div className="bar" style={{ height: '77%' }}><span>T</span></div>
                            <div className="bar" style={{ height: '60%' }}><span>F</span></div>
                            <div className="bar" style={{ height: '91%' }}><span>S</span></div>
                            <div className="bar" style={{ height: '70%' }}><span>S</span></div>
                          </div>
                          <p className="chartnote">Scan activity by day · illustrative only</p>
                        </section>
                      </div>
                    </div>
                  )}

                  {brandPage === 'billing' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Money matters.</h2><p>Quotes, invoices and campaign spend without the email archaeology.</p></div>
                        <button className="btn" onClick={() => showToast('Statement generated.')}>↓ Statements</button>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Total campaign value</label><strong>₹3.2L</strong><small>Approved quotes</small></div>
                        <div className="stat"><label>Paid</label><strong>₹2.4L</strong><small>75% received</small></div>
                        <div className="stat"><label>Outstanding</label><strong>₹80k</strong><small>1 invoice pending</small></div>
                        <div className="stat"><label>Next due</label><strong>30 Nov</strong><small>PP-INV-026</small></div>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Recent documents</h3><span className="tag">FY 2026–27</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead><tr><th>Document</th><th>Campaign</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
                            <tbody>
                              <tr>
                                <td><b>PP-INV-026</b><br /><span className="mini">Invoice · 15 Nov</span></td>
                                <td>Summer Sips</td>
                                <td>₹80,000</td>
                                <td><span className="status orange">Due</span></td>
                                <td><button className="btn" onClick={() => showToast('Viewing PP-INV-026.')}>View</button></td>
                              </tr>
                              <tr>
                                <td><b>PP-INV-021</b><br /><span className="mini">Invoice · 02 Nov</span></td>
                                <td>Good Vibes</td>
                                <td>₹1,60,000</td>
                                <td><span className="status blue">Paid</span></td>
                                <td><button className="btn" onClick={() => showToast('Viewing PP-INV-021.')}>View</button></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}

                  {brandPage === 'team' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>The people behind the pop.</h2><p>Invite your campaign crew and keep permissions tidy.</p></div>
                        <button className="btn dark" onClick={() => showToast('Invite link generated.')}>＋ Invite teammate</button>
                      </div>
                      <section className="panel">
                        <div className="campaign">
                          <span className="avatar">A</span>
                          <div className="cinfo"><b>Alex Mehra</b><small>alex@goodmood.in · You</small></div>
                          <span className="status">OWNER</span>
                        </div>
                        <div className="campaign">
                          <span className="avatar" style={{ background: 'var(--lime)' }}>S</span>
                          <div className="cinfo"><b>Simran Kaur</b><small>simran@goodmood.in</small></div>
                          <span className="status blue">CAMPAIGN EDITOR</span>
                        </div>
                        <div className="campaign">
                          <span className="avatar" style={{ background: '#dce2ff' }}>R</span>
                          <div className="cinfo"><b>Rohan Das</b><small>rohan@goodmood.in</small></div>
                          <span className="status">BILLING VIEWER</span>
                        </div>
                      </section>
                    </div>
                  )}
                </>
              ) : (
                /* OPS DASHBOARD */
                <>
                  {opsPage === 'overview' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Ops, let's cook. ⚡</h2><p>One control room for every carton, client and campaign.</p></div>
                        <div className="actions">
                          <button className="btn" onClick={() => showToast('Daily operational brief compiled.')}>↓ Daily brief</button>
                          <button className="btn dark" onClick={() => setOpsPage('leads')}>＋ Add advertiser</button>
                        </div>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Pipeline value</label><strong>₹8.6L</strong><small>7 open opportunities</small><span className="spark">↗</span></div>
                        <div className="stat"><label>Live campaigns</label><strong>06</strong><small>Across 3 cities</small><span className="spark">✳</span></div>
                        <div className="stat"><label>Cartons in production</label><strong>24.5k</strong><small>2 supplier orders</small><span className="spark">▣</span></div>
                        <div className="stat"><label>Pending actions</label><strong>09</strong><small>3 need attention today</small><span className="spark">!</span></div>
                      </div>
                      <div className="banner">
                        <div>
                          <b>3 things need a human today.</b>
                          <p>Artwork sign-off · Supplier batch docs · Venue quantity reconciliation</p>
                        </div>
                        <button className="btn" onClick={() => setOpsPage('campaigns')}>Clear the queue ↗</button>
                      </div>
                      <div className="twocol">
                        <section className="panel">
                          <div className="panelhead"><h3>Campaign pipeline</h3><span className="tag">THIS MONTH</span></div>
                          <div className="campaign"><div className="thumb">🍋</div><div className="cinfo"><b>Summer Sips · Goodmood</b><small>5,000 cartons · Delhi NCR</small></div><span className="status">Production</span></div>
                          <div className="campaign"><div className="thumb pink">🪩</div><div className="cinfo"><b>Wedding Edit · House of Noor</b><small>10,000 cartons · Gurugram</small></div><span className="status blue">Live</span></div>
                          <div className="campaign"><div className="thumb blue">☁</div><div className="cinfo"><b>Campus Reset · Daybreak</b><small>3,000 cartons · Chandigarh</small></div><span className="status orange">Artwork</span></div>
                          <div className="campaign"><div className="thumb">🌈</div><div className="cinfo"><b>Fresh Start · Bloom Labs</b><small>2,500 cartons · Jaipur</small></div><span className="tag">Quote</span></div>
                        </section>
                        <section className="panel">
                          <div className="panelhead"><h3>Ops pulse</h3><span className="tag">DEMO DATA</span></div>
                          <div className="todo"><span className="dot"></span><div><b>Supplier QC docs missing</b><div className="mini">Order PO-026 · 5,000 cartons</div></div></div>
                          <div className="todo"><span className="dot"></span><div><b>Venue reconciliation overdue</b><div className="mini">Noor Palace · 350 cartons</div></div></div>
                          <div className="todo"><span className="dot" style={{ background: 'var(--lime)' }}></span><div><b>Advance payment received</b><div className="mini">Goodmood · ₹1,20,000</div></div></div>
                        </section>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Today's command list</h3><span className="mini">LIVE QUEUE</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead><tr><th>Task</th><th>Owner</th><th>Due</th><th>Priority</th></tr></thead>
                            <tbody>
                              <tr><td><b>Approve Campus Reset proof</b></td><td>Creative</td><td>Today</td><td><span className="status orange">High</span></td></tr>
                              <tr><td><b>Collect supplier test report</b></td><td>Operations</td><td>Today</td><td><span className="status orange">High</span></td></tr>
                              <tr><td><b>Reconcile Noor Palace stock</b></td><td>Campaigns</td><td>Tomorrow</td><td><span className="status">Normal</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}

                  {opsPage === 'leads' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Brand people, meet water people.</h2><p>Advertiser CRM · from first hello to repeat sponsor.</p></div>
                        <button className="btn dark" onClick={() => showToast('New advertiser modal active.')}>＋ Add company</button>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Active advertisers</label><strong>14</strong><small>5 repeat clients</small></div>
                        <div className="stat"><label>New leads</label><strong>23</strong><small>This month</small></div>
                        <div className="stat"><label>Qualified pipeline</label><strong>₹8.6L</strong><small>7 opportunities</small></div>
                        <div className="stat"><label>Conversion</label><strong>28%</strong><small>Active rate</small></div>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Advertiser accounts</h3><span className="tag">ALL LEADS</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead><tr><th>Company</th><th>Category</th><th>Contact</th><th>Pipeline</th><th>Owner</th></tr></thead>
                            <tbody>
                              <tr><td><b>Goodmood</b><br /><span className="mini">Verified · 3 campaigns</span></td><td>FMCG</td><td>Alex Mehra</td><td><span className="status blue">Repeat client</span></td><td>Aditya</td></tr>
                              <tr><td><b>House of Noor</b><br /><span className="mini">Verified · 1 campaign</span></td><td>Fashion</td><td>Rhea Kapoor</td><td><span className="status">Active</span></td><td>Simran</td></tr>
                              <tr><td><b>Daybreak</b><br /><span className="mini">Review pending</span></td><td>Education</td><td>Kabir S.</td><td><span className="status orange">Qualification</span></td><td>Aditya</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}

                  {opsPage === 'campaigns' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Campaign control tower</h2><p>Move every campaign through the right gates. No mystery status.</p></div>
                        <button className="btn dark" onClick={() => setCreateModalOpen(true)}>＋ Create campaign</button>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Campaign queue</h3><span className="tag">{campaignList.length} IN FLIGHT</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead><tr><th>Campaign / Client</th><th>Quantity</th><th>Stage</th><th>Next gate</th><th>Owner</th></tr></thead>
                            <tbody>
                              {campaignList.map(c => (
                                <tr key={c.id}>
                                  <td><b>{c.name}</b><br /><span className="mini">{c.brand} · {c.id}</span></td>
                                  <td>{c.volume.toLocaleString('en-IN')}</td>
                                  <td><span className={`status ${c.status === 'Live' ? 'blue' : ''}`}>{c.status}</span></td>
                                  <td>{c.status === 'Live' ? 'Reconcile venue' : 'Batch QC'}</td>
                                  <td>Aditya</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}

                  {opsPage === 'production' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>From factory to flex.</h2><p>Supplier, batch, stock and quality control.</p></div>
                        <button className="btn dark" onClick={() => showToast('PO order draft created.')}>＋ New production order</button>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>In production</label><strong>24.5k</strong><small>2 open POs</small></div>
                        <div className="stat"><label>Available stock</label><strong>8,200</strong><small>Across 3 designs</small></div>
                        <div className="stat"><label>Reserved</label><strong>6,500</strong><small>For upcoming drops</small></div>
                        <div className="stat"><label>QC holds</label><strong>500</strong><small>Batch review required</small></div>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Production orders</h3><span className="tag">SUPPLIER VIEW</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead><tr><th>PO / Supplier</th><th>Design</th><th>Qty</th><th>Batch</th><th>Status</th></tr></thead>
                            <tbody>
                              <tr><td><b>PO-026 · AquaPack</b></td><td>Summer Sips</td><td>5,000</td><td>AP-2611</td><td><span className="status orange">QC docs pending</span></td></tr>
                              <tr><td><b>PO-024 · ClearCarton</b></td><td>Wedding Edit</td><td>10,000</td><td>CC-2609</td><td><span className="status blue">Released</span></td></tr>
                              <tr><td><b>PO-027 · AquaPack</b></td><td>Campus Reset</td><td>3,000</td><td>Not assigned</td><td><span className="tag">Awaiting proof</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}

                  {opsPage === 'venues' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Where the drops happen.</h2><p>Venue partners, dispatches and handout reconciliation.</p></div>
                        <button className="btn dark" onClick={() => showToast('Venue intake opened.')}>＋ Add venue</button>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Active venues</label><strong>18</strong><small>Across 3 cities</small></div>
                        <div className="stat"><label>Cartons dispatched</label><strong>21.2k</strong><small>Campaign total</small></div>
                        <div className="stat"><label>Received</label><strong>20.6k</strong><small>Venue confirmations</small></div>
                        <div className="stat"><label>To reconcile</label><strong>600</strong><small>Open variance</small></div>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Venue drop tracker</h3><span className="tag">LIVE EXAMPLE</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead><tr><th>Venue / event</th><th>City</th><th>Sent</th><th>Received</th><th>Distributed</th><th>Status</th></tr></thead>
                            <tbody>
                              <tr><td><b>Noor Palace</b><br /><span className="mini">Wedding · 22 Nov</span></td><td>Gurugram</td><td>2,000</td><td>2,000</td><td>1,650</td><td><span className="status orange">Reconcile</span></td></tr>
                              <tr><td><b>Studio 9</b><br /><span className="mini">Launch · 21 Nov</span></td><td>Delhi</td><td>1,500</td><td>1,500</td><td>1,500</td><td><span className="status blue">Closed</span></td></tr>
                              <tr><td><b>North Campus</b><br /><span className="mini">Student fest · 25 Nov</span></td><td>Delhi</td><td>3,000</td><td>0</td><td>0</td><td><span className="tag">Scheduled</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}

                  {opsPage === 'finance' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Numbers don't lie.</h2><p>Campaign cashflow and contribution, without mixing up revenue and profit.</p></div>
                        <button className="btn" onClick={() => showToast('Finance summary exported.')}>↓ Export</button>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Invoiced</label><strong>₹12.5L</strong><small>Current month</small></div>
                        <div className="stat"><label>Collected</label><strong>₹9.2L</strong><small>74% received</small></div>
                        <div className="stat"><label>Receivables</label><strong>₹3.3L</strong><small>Across 4 invoices</small></div>
                        <div className="stat"><label>Contribution</label><strong>₹2.1L</strong><small>Before fixed overhead</small></div>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Campaign-level finance</h3><span className="tag">SAMPLE FIGURES</span></div>
                        <div className="tablewrap">
                          <table>
                            <thead><tr><th>Campaign</th><th>Revenue</th><th>Variable cost</th><th>Contribution</th><th>Payment</th></tr></thead>
                            <tbody>
                              <tr><td><b>Summer Sips</b></td><td>₹2.50L</td><td>₹1.90L</td><td>₹60k</td><td><span className="status orange">Advance only</span></td></tr>
                              <tr><td><b>Wedding Edit</b></td><td>₹5.00L</td><td>₹3.80L</td><td>₹1.20L</td><td><span className="status blue">Paid</span></td></tr>
                              <tr><td><b>Campus Reset</b></td><td>₹1.50L</td><td>₹1.14L</td><td>₹36k</td><td><span className="tag">Quote</span></td></tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}

                  {opsPage === 'compliance' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Trust is the whole thing.</h2><p>Nothing gets printed or shipped until the right checks are green.</p></div>
                        <span className="pill">GATEKEEPER MODE</span>
                      </div>
                      <div className="grid">
                        <div className="stat"><label>Open checks</label><strong>07</strong><small>Across campaigns</small></div>
                        <div className="stat"><label>Approved artwork</label><strong>12</strong><small>Version controlled</small></div>
                        <div className="stat"><label>Supplier docs</label><strong>2/3</strong><small>Current records</small></div>
                        <div className="stat"><label>QC holds</label><strong>01</strong><small>Must be resolved</small></div>
                      </div>
                      <section className="panel">
                        <div className="panelhead"><h3>Compliance checklist</h3><span className="tag">INTERNAL REVIEW</span></div>
                        <div className="todo"><span className="dot"></span><div><b>Verify current manufacturer licence</b><div className="mini">AquaPack · Document renewal check</div></div><span className="status orange">Open</span></div>
                        <div className="todo"><span className="dot"></span><div><b>Review batch test report</b><div className="mini">PO-026 · Before release</div></div><span className="status orange">Open</span></div>
                        <div className="todo"><span className="dot" style={{ background: 'var(--lime)' }}></span><div><b>Artwork legal label check</b><div className="mini">Wedding Edit · Version 04</div></div><span className="status blue">Approved</span></div>
                        <div className="todo"><span className="dot" style={{ background: 'var(--lime)' }}></span><div><b>QR destination and offer terms</b><div className="mini">Good Vibes · Checked</div></div><span className="status blue">Approved</span></div>
                      </section>
                    </div>
                  )}

                  {opsPage === 'users' && (
                    <div>
                      <div className="mainhead">
                        <div><h2>Who can touch what?</h2><p>Role-based access for a small team that will grow.</p></div>
                        <button className="btn dark" onClick={() => showToast('Invite link generated.')}>＋ Invite staff</button>
                      </div>
                      <section className="panel">
                        <div className="campaign"><span className="avatar">A</span><div className="cinfo"><b>Founder / Super Admin</b><small>Full access · System owner</small></div><span className="status">ADMIN</span></div>
                        <div className="campaign"><span className="avatar" style={{ background: 'var(--lime)' }}>S</span><div className="cinfo"><b>Sales Manager</b><small>CRM, briefs, quotes, client pipeline</small></div><span className="status blue">SALES</span></div>
                        <div className="campaign"><span className="avatar" style={{ background: '#dce2ff' }}>O</span><div className="cinfo"><b>Operations Manager</b><small>Suppliers, stock, batches, dispatch</small></div><span className="status">OPS</span></div>
                        <div className="campaign"><span className="avatar" style={{ background: 'var(--pink)' }}>F</span><div className="cinfo"><b>Finance</b><small>Invoices, receipts, payables, contribution</small></div><span className="status">FINANCE</span></div>
                      </section>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
          <div className="footnote">PAANI POP / CONCEPT PLAYGROUND / SAMPLE COMPANIES, CAMPAIGNS & METRICS ARE ILLUSTRATIVE</div>
        </div>
      )}

      {/* Global Footer with Hashlilly entity details */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <a className="logo" href="#top">PAANI<span className="logo-mark">✳</span>POP</a>
            <div className="footer-links">
              <a href="#why" onClick={() => setActiveTab('site')}>The idea</a>
              <a href="#cartons-showcase" onClick={() => setActiveTab('site')}>3D cartons</a>
              <a href="#template-builder" onClick={() => setActiveTab('site')}>Design studio</a>
              <a href="#editions" onClick={() => setActiveTab('site')}>The vibes</a>
              <a href="#brands" onClick={() => setActiveTab('site')}>For brands</a>
              <a href="#contact" onClick={() => setActiveTab('site')}>Contact</a>
              <a
                href="/cartons/carton-template.html"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}
              >
                ✦ Template generator ↗
              </a>
              <a
                href="/cartons/paanipop-sponsor-cartons.html"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                Print dielines ↗
              </a>
              <button
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', font: 'inherit', padding: 0 }}
                onClick={() => { setActiveTab('portal'); setPortalMode('brand'); }}
              >
                Brand portal
              </button>
              <button
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', font: 'inherit', padding: 0 }}
                onClick={() => { setActiveTab('portal'); setPortalMode('ops'); }}
              >
                Ops console
              </button>
            </div>
          </div>
          <div style={{ margin: '25px 0 15px', fontSize: '11px', color: '#aaa', lineHeight: 1.6 }}>
            <div>
              © 2026 HASHLILLY (OPC) PRIVATE LIMITED. Deskai, LillyPost, Soulamore, Terraclaw, That's Missing, BoozedIN, SyncNode, Telegram Drive, God's Eye, Rojgaar, Wardrobe, Metro Connect, and PAANI POP are trademarks of HASHLILLY (OPC) PRIVATE LIMITED.
            </div>
            <div style={{ marginTop: '8px' }}>
              HASHLILLY (OPC) PRIVATE LIMITED | CIN: U62099PB2026OPC068567 | Reg No: UDYAM-PB-20-0003915 <br />
              Registered Address: 399, MANNAT ENCLAVE -2, BHABAT SUB TEHSIL, Zirakpur, Rajpura, Mohali- 140603, Punjab <br />
              Grievance Officer: tech.hashlilly@gmail.com | Advertising automation platforms, software engineering, and experimental laboratory systems.
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 PAANI POP. MADE FOR GOOD VIBES.</span>
            <span>FREE WATER. FULL ENTERTAINMENT.</span>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {toast && (
        <div className="toast show">
          {toast}
        </div>
      )}

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="modal-backdrop" onClick={() => setSelectedCampaign(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedCampaign(null)}><X /></button>
            <div className="eyebrow" style={{ color: 'var(--blue)' }}>CAMPAIGN DOSSIER · {selectedCampaign.id}</div>
            <h2 style={{ font: "800 24px 'Space Grotesk'", margin: '10px 0' }}>{selectedCampaign.name}</h2>
            <p style={{ marginBottom: '14px', fontSize: '12px' }}>Brand: <b>{selectedCampaign.brand}</b> · Edition: <b>{selectedCampaign.edition}</b></p>
            <div style={{ background: '#f6f4ec', padding: '16px', border: '1.5px solid var(--ink)', borderRadius: '12px', marginBottom: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
              <div><span>Format:</span> <br /><b>{selectedCampaign.format}</b></div>
              <div><span>Status:</span> <br /><b style={{ textTransform: 'uppercase', color: 'var(--blue)' }}>{selectedCampaign.status}</b></div>
              <div><span>Distribution Volume:</span> <br /><b>{selectedCampaign.volume.toLocaleString('en-IN')} units</b></div>
              <div><span>Budget Commitment:</span> <br /><b>{money(selectedCampaign.budget)}</b></div>
              <div><span>Target Locations:</span> <br /><b>{selectedCampaign.venueTarget}</b></div>
              <div><span>Run Window:</span> <br /><b>{selectedCampaign.start} – {selectedCampaign.end}</b></div>
            </div>
            <div style={{ background: 'var(--lime)', padding: '12px', borderRadius: '8px', border: '1px solid var(--ink)', fontSize: '11px', marginBottom: '16px' }}>
              <b>✓ Packaging Compliance Passed:</b> 500 ml standards, legal metrology, and verified batch QC checks cleared.
            </div>
            <button className="btn dark" onClick={() => setSelectedCampaign(null)} style={{ width: '100%' }}>Close Dossier</button>
          </div>
        </div>
      )}

      {/* Create Campaign Modal */}
      {createModalOpen && (
        <CreateCampaignModal
          close={() => setCreateModalOpen(false)}
          onAdd={handleAddCampaign}
        />
      )}
    </div>
  );
}

function CreateCampaignModal({ close, onAdd }: { close: () => void; onAdd: (c: Campaign) => void }) {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('Goodmood');
  const [format, setFormat] = useState('Banquet & Event takeover');
  const [edition, setEdition] = useState<'Her' | 'His' | 'Everyone' | 'Special'>('Everyone');
  const [volume, setVolume] = useState(5000);
  const [venueTarget, setVenueTarget] = useState('Delhi NCR Venues');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `PP-0${Math.floor(Math.random() * 900 + 100)}`;
    const budget = volume * 50;
    onAdd({
      id,
      name,
      brand,
      format,
      edition,
      volume: Number(volume),
      status: 'Planning',
      start: 'Dec 2026',
      end: 'Jan 2027',
      budget,
      reach: 0,
      venueTarget
    });
    close();
  };

  return (
    <div className="modal-backdrop" onClick={close}>
      <form className="modal" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        <button type="button" className="modal-close" onClick={close}><X /></button>
        <div className="eyebrow" style={{ color: 'var(--blue)' }}>NEW CAMPAIGN BRIEF</div>
        <h2 style={{ font: "800 24px 'Space Grotesk'", margin: '10px 0' }}>Launch a new drop.</h2>
        <p style={{ fontSize: '12px', marginBottom: '14px' }}>Configure a sponsored water run for your target venues and audience.</p>

        <div className="field">
          <label>CAMPAIGN NAME</label>
          <input required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Summer Spark Activation" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div className="field">
            <label>SPONSOR BRAND</label>
            <input required value={brand} onChange={e => setBrand(e.target.value)} />
          </div>
          <div className="field">
            <label>PACKAGING EDITION</label>
            <select value={edition} onChange={e => setEdition(e.target.value as any)}>
              <option value="Everyone">Everyone Edition (Universal)</option>
              <option value="Her">Her Edition (Lifestyle)</option>
              <option value="His">His Edition (Distinct Visual)</option>
              <option value="Special">Special Edition (Event/Wedding)</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div className="field">
            <label>CAMPAIGN FORMAT</label>
            <select value={format} onChange={e => setFormat(e.target.value)}>
              <option>Banquet & Event takeover</option>
              <option>Campus sampling</option>
              <option>Sports & fitness drop</option>
              <option>Corporate hydration</option>
            </select>
          </div>
          <div className="field">
            <label>TARGET VOLUME (UNITS)</label>
            <input type="number" min="1000" step="1000" value={volume} onChange={e => setVolume(Number(e.target.value))} />
          </div>
        </div>

        <div className="field">
          <label>TARGET DISTRIBUTION CLUSTER</label>
          <input required value={venueTarget} onChange={e => setVenueTarget(e.target.value)} placeholder="e.g. South Delhi Banquets & Aerocity" />
        </div>

        <div style={{ background: '#eef1e6', padding: '12px', borderRadius: '8px', margin: '14px 0', fontSize: '11px', color: '#4f5945' }}>
          <b>Estimated Budget (at ₹50/carton):</b> {money(volume * 50)} <br />
          Includes contract filling, 4-side packaging artwork, QR landing page, and venue dispatch.
        </div>

        <button className="btn dark" type="submit" style={{ width: '100%' }}>Create campaign in pipeline ↗</button>
      </form>
    </div>
  );
}
