import React, { useState } from 'react';

export interface SponsorCartonData {
  id: string;
  name: string;
  tagline: string;
  roofColor: string;
  roofInk: string;
  bgGrad: string;
  textColor: string;
  badgeText: string;
  frontHtml: React.ReactNode;
  sideAHtml: React.ReactNode;
  backHtml: React.ReactNode;
  sideBHtml: React.ReactNode;
}

export const SPONSOR_CARTONS: SponsorCartonData[] = [
  {
    id: 'custom-empty',
    name: 'Your Brand Here',
    tagline: 'This could be yours. Your logo, colors, campaign QR code, and real-world distribution.',
    roofColor: '#d6ff42',
    roofInk: '#161616',
    bgGrad: 'linear-gradient(170deg, #FFFFFF 0%, #F5F5ED 100%)',
    textColor: '#161616',
    badgeText: 'THIS COULD BE YOURS',
    frontHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
            YOUR BRAND SPOT ✦
          </div>
          <h2 style={{ font: "900 32px/.92 'Space Grotesk', sans-serif", margin: 0, letterSpacing: '-1.5px', textTransform: 'uppercase' }}>
            THIS<br />
            COULD BE<br />
            <span style={{ background: '#d6ff42', padding: '0 6px', border: '1.5px solid #161616', borderRadius: '4px', display: 'inline-block', transform: 'rotate(-2deg)' }}>
              YOURS!
            </span>
          </h2>
          <div style={{ border: '2px dashed #161616', borderRadius: '10px', padding: '10px 12px', marginTop: '14px', background: 'rgba(214,255,66,0.25)' }}>
            <p style={{ fontSize: '12px', lineHeight: 1.4, margin: 0, fontWeight: 700 }}>
              Put your company billboard into thousands of real hands at events, campuses & summits.
            </p>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {['100% FREE WATER', 'VIRAL REACH', 'SMART QR'].map((pill, i) => (
              <span key={i} style={{ border: '1px solid #161616', borderRadius: '99px', padding: '3px 8px', fontSize: '10px', fontWeight: 800, background: '#fff' }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ borderTop: '2px solid #161616', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ fontWeight: 900 }}>PAANI POP!</span>
            <span>SPONSOR PACK · 500 ML</span>
          </div>
        </div>
      </div>
    ),
    sideAHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase', fontWeight: 700 }}>YOUR CAMPAIGN</div>
          <h3 style={{ font: "800 22px/1.1 'Space Grotesk', sans-serif", margin: '6px 0 8px' }}>Your headline.<br />Your voice.</h3>
          <p style={{ fontSize: '12px', lineHeight: 1.4, margin: 0, color: '#444' }}>Tell your brand story, announce your product launch, or recruit the brightest talent.</p>
          <div style={{ border: '1.5px dashed #161616', borderRadius: '8px', padding: '10px', marginTop: '12px', fontSize: '11px', background: '#fff' }}>
            <div style={{ fontWeight: 800, color: '#161616', marginBottom: '4px' }}>CUSTOM ACTIVATION:</div>
            <div style={{ color: '#555', lineHeight: 1.35 }}>• Full 4-sided customized wrap dieline<br />• Dedicated offer landing page<br />• Live scan analytics dashboard</div>
          </div>
        </div>
        <div style={{ background: '#161616', color: '#d6ff42', borderRadius: '8px', padding: '8px 10px', font: "700 10px/1.3 'JetBrains Mono', monospace" }}>
          RESERVE YOUR SPONSORSHIP DROP
        </div>
      </div>
    ),
    backHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase', fontWeight: 700 }}>INTERACTIVE QR</div>
          <h3 style={{ font: "800 20px/1.1 'Space Grotesk', sans-serif", margin: '6px 0 8px' }}>Scan · Connect</h3>
          <div style={{ background: '#fff', color: '#161616', padding: '10px', borderRadius: '10px', border: '1.5px solid #161616', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '6px 0' }}>
            <div style={{ width: '85px', height: '85px', border: '2px dashed #5068ff', borderRadius: '8px', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '10px', textAlign: 'center', color: '#5068ff', background: '#f5f5ff' }}>
              YOUR<br />CAMPAIGN<br />QR CODE
            </div>
            <span style={{ font: "700 10px/1 'JetBrains Mono', monospace" }}>yourbrand.com</span>
          </div>
          <div style={{ fontSize: '11px', color: '#555', lineHeight: 1.35 }}>
            Every carton connects directly to your app, website, waitlist or voucher.
          </div>
        </div>
        <div style={{ fontSize: '9px', lineHeight: 1.35, color: '#777', borderTop: '1px solid #ddd', paddingTop: '6px' }}>
          Packaged drinking water · 500 ml · Free.<br /><b>FSSAI Lic. No.</b> [PENDING] · <b>Batch:</b> see cap
        </div>
      </div>
    ),
    sideBHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase', fontWeight: 700 }}>DISTRIBUTION</div>
          <h3 style={{ font: "800 20px/1.1 'Space Grotesk', sans-serif", margin: '6px 0 8px' }}>Targeted Drops</h3>
          <div style={{ display: 'grid', gap: '8px', fontSize: '11.5px', lineHeight: 1.35, marginTop: '10px' }}>
            <div style={{ borderLeft: '3px solid #5068ff', paddingLeft: '8px' }}><b>Tech Summits & Hackathons</b><br />Engage high-intent founders & engineers.</div>
            <div style={{ borderLeft: '3px solid #d6ff42', paddingLeft: '8px' }}><b>College Fests & Youth Hubs</b><br />Direct hands-on physical discovery.</div>
            <div style={{ borderLeft: '3px solid #FF6FB5', paddingLeft: '8px' }}><b>Co-Working & Corporate Offices</b><br />Daily desk presence throughout the workday.</div>
          </div>
        </div>
        <div style={{ background: '#d6ff42', border: '1.5px solid #161616', borderRadius: '8px', padding: '8px', fontSize: '10px', fontWeight: 800, textAlign: 'center' }}>
          ⚡ 100% FREE WATER · 100% ATTENTION
        </div>
      </div>
    )
  },
  {
    id: 'resumeengine',
    name: 'ResumeEngine AI',
    tagline: 'Beat ATS bots. Tailor your resume to any job description and score higher with recruiters.',
    roofColor: '#161616',
    roofInk: '#3DDC84',
    bgGrad: '#F7F7F2',
    textColor: '#161616',
    badgeText: 'CAREER ACCELERATION ENGINE',
    frontHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ font: "900 20px/.9 'Archivo', sans-serif", letterSpacing: '-0.5px', textTransform: 'uppercase' }}>
              ResumeEngine<b style={{ background: '#3DDC84', padding: '1px 5px', borderRadius: '4px', marginLeft: '3px', fontSize: '12px' }}>AI</b>
            </div>
            <span style={{ font: "700 9px/1 'JetBrains Mono', monospace", color: '#6b6b70' }}>by Hashlilly</span>
          </div>
          {/* ATS Gauge Score */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '14px 0 10px' }}>
            <svg width="74" height="74" viewBox="0 0 100 100" aria-hidden="true" style={{ flex: 'none' }}>
              <circle cx="50" cy="50" r="38" fill="none" stroke="#e2e2dc" strokeWidth="11" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="#3DDC84" strokeWidth="11" strokeLinecap="round" strokeDasharray="231 252" transform="rotate(-90 50 50)" />
              <text x="50" y="58" textAnchor="middle" fontFamily="Archivo" fontWeight="900" fontSize="28" fill="#161616">92</text>
            </svg>
            <div style={{ font: "700 11px/1.4 'JetBrains Mono', monospace" }}>
              ATS SCORE<br />
              <s style={{ color: '#E5484D' }}>41</s> → <b style={{ color: '#12804A' }}>92</b><br />
              MATCHED TO JD
            </div>
          </div>
          <h2 style={{ font: "900 27px/.95 'Archivo', sans-serif", textTransform: 'uppercase', letterSpacing: '-0.8px', margin: '4px 0 8px' }}>
            Rejected before a <span style={{ background: '#3DDC84', padding: '0 4px', borderRadius: '3px' }}>human</span> ever read it?
          </h2>
          <p style={{ fontSize: '12px', lineHeight: 1.4, margin: '6px 0 0', color: '#333' }}>
            Beat every ATS filter in 10 seconds. Tailor your resume to any job description.
          </p>
        </div>
        <div>
          <div style={{ borderTop: '2px solid #161616', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ fontWeight: 900 }}>PAANI POP!</span>
            <span>FREE WATER · 500 ML</span>
          </div>
        </div>
      </div>
    ),
    sideAHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", letterSpacing: '1px', color: '#12804A', textTransform: 'uppercase' }}>
            Why you get ghosted
          </div>
          <h3 style={{ font: "900 20px/.95 'Archivo', sans-serif", textTransform: 'uppercase', margin: '6px 0 8px' }}>
            A bot reads it first.
          </h3>
          <div style={{ background: '#fff', border: '1.5px solid #161616', borderRadius: '8px', padding: '8px 10px', boxShadow: '3px 3px 0 #161616', fontSize: '11px', lineHeight: 1.35 }}>
            Most companies filter applications through an <b>ATS</b> scanning for exact JD keywords.
          </div>
          {/* Visual flow chart */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 0', font: "800 10px/1.2 'JetBrains Mono', monospace", textAlign: 'center' }}>
            <div>YOUR<br />RESUME</div>
            <span style={{ fontSize: '14px' }}>→</span>
            <div style={{ background: '#161616', color: '#fff', padding: '5px 7px', borderRadius: '5px' }}>ATS<br />BOT</div>
            <span style={{ color: '#E5484D', fontSize: '16px' }}>✕</span>
            <div style={{ color: '#E5484D' }}>AUTO<br />REJECT</div>
          </div>
          <div style={{ background: '#fff', border: '1.5px solid #161616', borderRadius: '8px', padding: '8px 10px', boxShadow: '3px 3px 0 #3DDC84', fontSize: '11px', lineHeight: 1.35 }}>
            <b>ResumeEngine</b> injects missing JD keywords into your achievements in your own voice.
          </div>
        </div>
        <div style={{ font: "700 10px 'JetBrains Mono', monospace", color: '#12804A' }}>
          ✓ Verified ATS parser friendly
        </div>
      </div>
    ),
    backHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", letterSpacing: '1px', color: '#12804A', textTransform: 'uppercase' }}>
            Scan · Score yours free
          </div>
          <h3 style={{ font: "900 20px/.95 'Archivo', sans-serif", textTransform: 'uppercase', margin: '6px 0 8px' }}>
            Get past the bot.<br />Get the call.
          </h3>
          <div style={{ background: '#fff', border: '1.5px solid #161616', borderRadius: '8px', padding: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px', margin: '4px 0' }}>
            <div style={{ width: '80px', height: '80px', background: '#3DDC84', color: '#161616', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
              RESUME<br />ENGINE<br />QR
            </div>
            <span style={{ font: "700 9px 'JetBrains Mono', monospace" }}>resumeengine.ai</span>
          </div>
          <div style={{ fontSize: '10.5px', lineHeight: 1.35, color: '#444', marginTop: '6px' }}>
            • Free ATS Match Score<br />
            • Instant keyword gap report<br />
            • Google Docs & Word export
          </div>
        </div>
        <div style={{ fontSize: '9px', lineHeight: 1.35, color: '#777', borderTop: '1px solid #ccc', paddingTop: '6px' }}>
          Packaged drinking water · 500 ml · Free.<br /><b>Sponsored by ResumeEngine AI by Hashlilly.</b>
        </div>
      </div>
    ),
    sideBHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", letterSpacing: '1px', color: '#12804A', textTransform: 'uppercase' }}>
            How it works
          </div>
          <h3 style={{ font: "900 20px/.95 'Archivo', sans-serif", textTransform: 'uppercase', margin: '6px 0 8px' }}>
            4 steps in 10s.
          </h3>
          <div style={{ display: 'grid', gap: '6px', fontSize: '11px', lineHeight: 1.3 }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#161616', color: '#3DDC84', font: "800 10px/18px monospace", textAlign: 'center', flex: 'none' }}>1</span>
              <span>Paste job description.</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#161616', color: '#3DDC84', font: "800 10px/18px monospace", textAlign: 'center', flex: 'none' }}>2</span>
              <span>See ATS score & missing words.</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#161616', color: '#3DDC84', font: "800 10px/18px monospace", textAlign: 'center', flex: 'none' }}>3</span>
              <span>Tailor resume & cover letter.</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#161616', color: '#3DDC84', font: "800 10px/18px monospace", textAlign: 'center', flex: 'none' }}>4</span>
              <span>Edit in Docs & export PDF.</span>
            </div>
          </div>
        </div>
        <div style={{ background: '#161616', color: '#3DDC84', borderRadius: '8px', padding: '8px 10px', font: "800 10px/1.3 'JetBrains Mono', monospace" }}>
          FREE PLAN AVAILABLE<br /><span style={{ color: '#fff', fontWeight: 600 }}>Start with a free ATS score.</span>
        </div>
      </div>
    )
  },
  {
    id: 'influenceos',
    name: 'InfluenceOS',
    tagline: 'Niche creator marketing: verified engagement, Brand Fit Index (BFI), and performance escrow.',
    roofColor: '#FF8A6B',
    roofInk: '#2A1290',
    bgGrad: 'linear-gradient(165deg,#5B3DF5 0%,#4325D9 60%,#3418B8 100%)',
    textColor: '#FFFFFF',
    badgeText: 'CREATOR ECONOMY INFRASTRUCTURE',
    frontHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ font: "800 20px/1 'Plus Jakarta Sans', sans-serif" }}>
              Influence<b>OS</b>
            </div>
            <span style={{ font: "700 9px/1 'JetBrains Mono', monospace", color: '#FFC7B6' }}>by Hashlilly</span>
          </div>
          {/* Geo targeting preview radar */}
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '10px', padding: '8px 10px', margin: '10px 0 8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 800, color: '#FFA48A' }}>
              <span>⌕ TARGET: PUNE</span>
              <span>SKINCARE · 18–34</span>
            </div>
            <div style={{ fontSize: '10px', margin: '5px 0 2px', display: 'flex', justifyContent: 'space-between' }}>
              <span>City Audience Fit</span><b>62%</b>
            </div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{ width: '62%', height: '100%', background: '#FFA48A' }} />
            </div>
          </div>
          <h2 style={{ font: "800 28px/.95 'Plus Jakarta Sans', sans-serif", letterSpacing: '-1px', margin: '6px 0 8px' }}>
            Right city.<br />Right people.<br />
            <span style={{ color: '#FFA48A' }}>Paid per view.</span>
          </h2>
          <p style={{ fontSize: '12px', lineHeight: 1.4, margin: '4px 0 0', color: '#E4E0FF' }}>
            Niche influencer marketing for brands that want results, not vibes.
          </p>
        </div>
        <div>
          <div style={{ borderTop: '2px solid rgba(255,255,255,0.25)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ fontWeight: 900, color: '#FFA48A' }}>PAANI POP!</span>
            <span>FREE WATER · 500 ML</span>
          </div>
        </div>
      </div>
    ),
    sideAHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#FFC7B6', textTransform: 'uppercase' }}>For brands</div>
          <h3 style={{ font: "800 19px/1.1 'Plus Jakarta Sans', sans-serif", margin: '5px 0 8px' }}>
            Don't buy reach.<br />Find your people.
          </h3>
          <div style={{ display: 'grid', gap: '6px', fontSize: '11px', lineHeight: 1.35 }}>
            <div style={{ display: 'flex', gap: '6px' }}><span>✓</span><span>Filtered by exact niche & city</span></div>
            <div style={{ display: 'flex', gap: '6px' }}><span>✓</span><span>Follower demographics check</span></div>
            <div style={{ display: 'flex', gap: '6px' }}><span>✓</span><span>Anti-fake-follower audit before payment</span></div>
            <div style={{ display: 'flex', gap: '6px' }}><span>✓</span><span>Live Instagram & YouTube sync</span></div>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px', fontSize: '10px', color: '#FFC7B6', lineHeight: 1.35 }}>
          Launch in one city with creators whose followers live right there.
        </div>
      </div>
    ),
    backHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#FFC7B6', textTransform: 'uppercase' }}>Scan to start</div>
          <h3 style={{ font: "800 19px/1.1 'Plus Jakarta Sans', sans-serif", margin: '5px 0 8px' }}>
            Brands launch.<br />Creators get paid.
          </h3>
          <div style={{ background: '#fff', color: '#161616', padding: '8px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px', margin: '4px 0' }}>
            <div style={{ width: '80px', height: '80px', background: '#5B3DF5', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
              INFLU<br />ENCE<br />QR
            </div>
            <span style={{ font: "700 9px 'JetBrains Mono', monospace", color: '#161616' }}>influence-os.com</span>
          </div>
          <div style={{ fontSize: '10.5px', color: '#E4E0FF', marginTop: '6px' }}>
            Brand or creator? Scan to launch campaigns or sign up.
          </div>
        </div>
        <div style={{ fontSize: '9px', lineHeight: 1.35, color: '#D6CFFF', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '6px' }}>
          Packaged drinking water · 500 ml · Free.<br /><b>Sponsored by InfluenceOS by Hashlilly.</b>
        </div>
      </div>
    ),
    sideBHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#FFC7B6', textTransform: 'uppercase' }}>The BFI Score</div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', margin: '6px 0 8px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '3px solid #FFA48A', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '14px', color: '#FFA48A', flex: 'none' }}>
              91
            </div>
            <div style={{ fontSize: '10.5px', lineHeight: 1.35 }}>
              <b>Brand Fit Index:</b> measures audience alignment so you never waste budget.
            </div>
          </div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#FFC7B6', textTransform: 'uppercase', marginTop: '8px' }}>Escrow, paid per view</div>
          <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px', fontSize: '10.5px', lineHeight: 1.4, marginTop: '4px' }}>
            <b style={{ color: '#FFA48A' }}>100K views = ₹10,000</b><br />
            Every 10K views releases ₹1,000.<br />
            Stops at 90K? <b>₹9,000</b> paid out.
          </div>
        </div>
        <div style={{ font: "800 9px/1.3 'Plus Jakarta Sans', sans-serif", color: '#FFC7B6', letterSpacing: '0.5px' }}>
          BRANDS PAY FOR DELIVERED VIEWS ONLY
        </div>
      </div>
    )
  },
  {
    id: 'soulamore',
    name: 'Soulamore',
    tagline: 'Peer-to-peer support circles at the base, licensed psychologists on top. Gentle, warm, private.',
    roofColor: '#F4976C',
    roofInk: '#1F1B1A',
    bgGrad: 'linear-gradient(170deg,#FFF5EE 0%,#FDE6D8 60%,#F9CDB6 100%)',
    textColor: '#1F1B1A',
    badgeText: 'MENTAL WELLNESS CIRCLES',
    frontHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", letterSpacing: '1px', color: '#B4532C', textTransform: 'uppercase', marginBottom: '6px' }}>
            circles for real life
          </div>
          <h2 style={{ font: "500 32px/1.02 'Fraunces', serif", margin: 0, letterSpacing: '-0.8px' }}>
            Drink water.<br />
            <em style={{ fontStyle: 'italic', color: '#C95F36' }}>Speak your mind.</em>
          </h2>
          <p style={{ fontSize: '12px', lineHeight: 1.4, marginTop: '10px', color: '#5A4A42' }}>
            Safe spaces, therapist-moderated circles, and 24/7 self-care toolkits.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
            {['Student Stress', 'Burnout', 'Heartbreak', 'Grief'].map((tag, i) => (
              <span key={i} style={{ border: '1px solid #1F1B1A', borderRadius: '99px', padding: '2px 7px', fontSize: '9.5px', fontWeight: 700, background: 'rgba(255,255,255,0.5)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ borderTop: '2px solid rgba(31,27,26,0.25)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ fontWeight: 900, color: '#C95F36' }}>PAANI POP!</span>
            <span>FREE WATER · 500 ML</span>
          </div>
        </div>
      </div>
    ),
    sideAHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#B4532C', textTransform: 'uppercase' }}>How we support you</div>
          <h3 style={{ font: "600 20px/1.1 'Fraunces', serif", margin: '4px 0 8px' }}>
            Three layers.<br />Zero judgment.
          </h3>
          <div style={{ display: 'grid', gap: '6px' }}>
            <div style={{ background: '#FFF5EE', borderRadius: '8px', padding: '6px 8px', border: '1px solid #1F1B1A' }}>
              <b style={{ fontSize: '11px' }}>01 · Peer Circles</b>
              <div style={{ fontSize: '10px', color: '#555', lineHeight: 1.3 }}>Small groups who understand your exact situation.</div>
            </div>
            <div style={{ background: '#FDE6D8', borderRadius: '8px', padding: '6px 8px', border: '1px solid #1F1B1A' }}>
              <b style={{ fontSize: '11px' }}>02 · Psychologists</b>
              <div style={{ fontSize: '10px', color: '#555', lineHeight: 1.3 }}>1:1 therapy when you want deeper, confidential work.</div>
            </div>
            <div style={{ background: '#F9CDB6', borderRadius: '8px', padding: '6px 8px', border: '1px solid #1F1B1A' }}>
              <b style={{ fontSize: '11px' }}>03 · 24/7 Tools</b>
              <div style={{ fontSize: '10px', color: '#555', lineHeight: 1.3 }}>Breathing exercises, prompts & mood tracker.</div>
            </div>
          </div>
        </div>
        <div style={{ font: "italic 11px 'Fraunces', serif", color: '#B4532C' }}>
          Safe, warm, and completely anonymous.
        </div>
      </div>
    ),
    backHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#B4532C', textTransform: 'uppercase' }}>Join a circle today</div>
          <h3 style={{ font: "600 19px/1.1 'Fraunces', serif", margin: '5px 0 8px' }}>
            You don't have to carry it alone.
          </h3>
          <div style={{ background: '#fff', color: '#161616', padding: '8px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px', margin: '4px 0' }}>
            <div style={{ width: '80px', height: '80px', background: '#F4976C', color: '#1F1B1A', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
              SOULA<br />MORE<br />QR
            </div>
            <span style={{ font: "700 9px 'JetBrains Mono', monospace" }}>soulamore.com</span>
          </div>
        </div>
        <div>
          <div style={{ background: '#1F1B1A', color: '#FFF5EE', borderRadius: '8px', padding: '7px 9px', fontSize: '9.5px', lineHeight: 1.3, marginBottom: '6px' }}>
            <b>Crisis helpline:</b> Tele-MANAS <b>14416</b> (24x7 India).
          </div>
          <div style={{ fontSize: '8.5px', lineHeight: 1.3, color: '#777', borderTop: '1px solid rgba(0,0,0,0.15)', paddingTop: '4px' }}>
            Packaged drinking water · 500 ml · Free · Sponsored by Soulamore.
          </div>
        </div>
      </div>
    ),
    sideBHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#B4532C', textTransform: 'uppercase' }}>Maybe this is you</div>
          <h3 style={{ font: "600 19px/1.1 'Fraunces', serif", margin: '5px 0 8px' }}>
            Stories like yours.
          </h3>
          <div style={{ display: 'grid', gap: '5px', fontSize: '10.5px' }}>
            <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: '6px', padding: '5px 8px', font: "italic 11px/1.3 'Fraunces', serif" }}>
              "New city, new job, nobody to call after work."
            </div>
            <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: '6px', padding: '5px 8px', font: "italic 11px/1.3 'Fraunces', serif" }}>
              "Burnt out, still answering emails at 1 a.m."
            </div>
            <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: '6px', padding: '5px 8px', font: "italic 11px/1.3 'Fraunces', serif" }}>
              "Grieving quietly so nobody worries about me."
            </div>
          </div>
        </div>
        <div style={{ font: "700 10px 'DM Sans', sans-serif", color: '#5A4A42' }}>
          Whatever you're carrying, there's a circle that has carried it too.
        </div>
      </div>
    )
  },
  {
    id: 'thatsmissing',
    name: "That's Missing",
    tagline: 'Market gap radar scanning real-time government gazettes, news, and builder feeds.',
    roofColor: '#FDE047',
    roofInk: '#131313',
    bgGrad: '#131313',
    textColor: '#F5F5F0',
    badgeText: 'FOUNDER INTELLIGENCE RADAR',
    frontHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Outfit", sans-serif' }}>
        <div>
          <div style={{ font: "900 22px/1 'Outfit', sans-serif", color: '#FDE047', textTransform: 'uppercase' }}>
            That's<br />Missing.
          </div>
          {/* Radar graphic */}
          <div style={{ border: '1px solid rgba(253,224,71,0.35)', borderRadius: '10px', padding: '8px', margin: '10px 0 8px', background: 'rgba(253,224,71,0.06)' }}>
            <div style={{ font: "800 10px 'JetBrains Mono', monospace", color: '#FDE047', display: 'flex', justifyContent: 'space-between' }}>
              <span>RADAR SCAN</span>
              <span>LIVE SIGNAL</span>
            </div>
            <div style={{ fontSize: '10.5px', color: '#ccc', margin: '4px 0 0', lineHeight: '1.3' }}>
              News • PIB Gazettes • State Budgets • Tech Breakouts
            </div>
          </div>
          <h2 style={{ font: "900 26px/.95 'Outfit', sans-serif", textTransform: 'uppercase', margin: '4px 0 6px', letterSpacing: '-0.8px' }}>
            Stop building 20 things.<br />
            <span style={{ color: '#FDE047' }}>Build the missing one.</span>
          </h2>
          <p style={{ fontSize: '12px', lineHeight: 1.4, margin: '4px 0 0', color: '#cfcfc8' }}>
            AI that scans real world friction to identify problems genuinely worth solving.
          </p>
        </div>
        <div>
          <div style={{ borderTop: '2px solid #333', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ fontWeight: 900, color: '#FDE047' }}>PAANI POP!</span>
            <span>FREE WATER · 500 ML</span>
          </div>
        </div>
      </div>
    ),
    sideAHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Outfit", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#FDE047', textTransform: 'uppercase' }}>The Radar</div>
          <h3 style={{ font: "900 19px/1 'Outfit', sans-serif", textTransform: 'uppercase', margin: '5px 0 8px' }}>
            What we scan daily
          </h3>
          <div style={{ display: 'grid', gap: '5px', fontSize: '10.5px', lineHeight: 1.3 }}>
            <div><b style={{ color: '#FDE047' }}>NEWS:</b> Breaking trade & regulatory shifts</div>
            <div><b style={{ color: '#FDE047' }}>PIB:</b> Central government ministry releases</div>
            <div><b style={{ color: '#FDE047' }}>BUDGET:</b> Subsidy reallocations & new policies</div>
            <div><b style={{ color: '#FDE047' }}>FOUNDERS:</b> Real-time builder complaint signals</div>
          </div>
        </div>
        <div style={{ color: '#aaa', fontSize: '10.5px', lineHeight: 1.3 }}>
          Every world shift opens a structural gap. Find it before competitors do.
        </div>
      </div>
    ),
    backHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Outfit", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#FDE047', textTransform: 'uppercase' }}>Scan · Find your build</div>
          <h3 style={{ font: "900 19px/1 'Outfit', sans-serif", textTransform: 'uppercase', margin: '5px 0 8px' }}>
            Know what to build next.
          </h3>
          <div style={{ background: '#fff', color: '#161616', padding: '8px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px', margin: '4px 0' }}>
            <div style={{ width: '80px', height: '80px', background: '#FDE047', color: '#131313', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
              MISSING<br />RADAR<br />QR
            </div>
            <span style={{ font: "700 9px 'JetBrains Mono', monospace", color: '#161616' }}>thatsmissing.com</span>
          </div>
        </div>
        <div style={{ fontSize: '9px', lineHeight: 1.35, color: '#888', borderTop: '1px solid #333', paddingTop: '6px' }}>
          Packaged drinking water · 500 ml · Free.<br /><b>Sponsored by That's Missing by Hashlilly.</b>
        </div>
      </div>
    ),
    sideBHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Outfit", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", color: '#FDE047', textTransform: 'uppercase' }}>Signal → Build</div>
          <h3 style={{ font: "900 19px/1 'Outfit', sans-serif", textTransform: 'uppercase', margin: '5px 0 8px' }}>
            From noise to idea
          </h3>
          <div style={{ display: 'grid', gap: '6px', fontSize: '10.5px' }}>
            <div style={{ borderLeft: '2px solid #FDE047', paddingLeft: '8px' }}><b>01 Spot signal:</b> Policy or budget shift detected.</div>
            <div style={{ borderLeft: '2px solid #FDE047', paddingLeft: '8px' }}><b>02 Score gap:</b> Size of affected audience & competition.</div>
            <div style={{ borderLeft: '2px solid #FDE047', paddingLeft: '8px' }}><b>03 Build solution:</b> Clear PRD & project starter kit.</div>
          </div>
        </div>
        <div style={{ font: "700 10px 'JetBrains Mono', monospace", color: '#FDE047' }}>
          STOP GUESSING. START BUILDING.
        </div>
      </div>
    )
  },
  {
    id: 'wardrobe',
    name: 'Wardrobe',
    tagline: 'Scan your closet once, get smart outfits every morning. Never have nothing to wear.',
    roofColor: '#1D1A16',
    roofInk: '#F4EFE6',
    bgGrad: '#F4EFE6',
    textColor: '#1D1A16',
    badgeText: 'SMART WARDROBE CURATION',
    frontHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "italic 800 24px/1 'Playfair Display', serif" }}>
            wardrobe.<span style={{ color: '#D99A3A' }}>✦</span>
          </div>
          {/* Polaroid style closet snapshots */}
          <div style={{ display: 'flex', gap: '6px', margin: '10px 0 8px' }}>
            <div style={{ background: '#fff', padding: '4px 6px', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', font: "700 9px monospace", transform: 'rotate(-3deg)' }}>
              👕 TOP 23
            </div>
            <div style={{ background: '#fff', padding: '4px 6px', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', font: "700 9px monospace", transform: 'rotate(2deg)' }}>
              👖 JEANS 11
            </div>
            <div style={{ background: '#fff', padding: '4px 6px', borderRadius: '4px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', font: "700 9px monospace", transform: 'rotate(-2deg)' }}>
              🧥 BLAZER 04
            </div>
          </div>
          <h2 style={{ font: "800 26px/1 'DM Sans', sans-serif", letterSpacing: '-1px', margin: '6px 0 8px' }}>
            40 tops. 30 jeans.<br />
            <em style={{ font: "italic 800 28px/1 'Playfair Display', serif", color: '#C27F1E' }}>"Nothing to wear."</em>
          </h2>
          <p style={{ fontSize: '12px', lineHeight: 1.4, margin: 0, color: '#444' }}>
            Your digital closet that styles fresh outfits daily from clothes you already own.
          </p>
        </div>
        <div>
          <div style={{ borderTop: '2px solid #1D1A16', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ fontWeight: 900 }}>PAANI POP!</span>
            <span>FREE WATER · 500 ML</span>
          </div>
        </div>
      </div>
    ),
    sideAHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'DM Sans', sans-serif", letterSpacing: '1px', color: '#C27F1E', textTransform: 'uppercase' }}>How it works</div>
          <h3 style={{ font: "italic 800 19px/1 'Playfair Display', serif", margin: '5px 0 8px' }}>
            Scan once.<br />Dressed forever.
          </h3>
          <div style={{ display: 'grid', gap: '5px', fontSize: '11px', lineHeight: 1.35 }}>
            <div><b>1. Scan clothes:</b> Takes minutes to catalog your wardrobe.</div>
            <div><b>2. Wake up to looks:</b> Combos tailored to today's weather.</div>
            <div><b>3. Plan your week:</b> Prep meetings, dinner dates, workouts.</div>
            <div><b>4. Cost-per-wear:</b> See which pieces earn their spot.</div>
          </div>
        </div>
        <div style={{ font: "italic 700 11px/1.3 'Playfair Display', serif", color: '#C27F1E' }}>
          For anyone with a full closet and nothing to wear.
        </div>
      </div>
    ),
    backHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'DM Sans', sans-serif", letterSpacing: '1px', color: '#C27F1E', textTransform: 'uppercase' }}>Scan · Get the app</div>
          <h3 style={{ font: "italic 800 19px/1 'Playfair Display', serif", margin: '5px 0 8px' }}>
            More outfits.<br />Less stress.
          </h3>
          <div style={{ background: '#fff', color: '#1D1A16', padding: '8px', borderRadius: '8px', border: '1.5px solid #1D1A16', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px', margin: '4px 0' }}>
            <div style={{ width: '80px', height: '80px', background: '#FFE07A', color: '#1D1A16', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
              WARD<br />ROBE<br />QR
            </div>
            <span style={{ font: "700 9px 'JetBrains Mono', monospace" }}>wardrobe-app.in</span>
          </div>
        </div>
        <div style={{ fontSize: '9px', lineHeight: 1.35, color: '#777', borderTop: '1px solid #ccc', paddingTop: '6px' }}>
          Packaged drinking water · 500 ml · Free.<br /><b>Sponsored by Wardrobe by Hashlilly.</b>
        </div>
      </div>
    ),
    sideBHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'DM Sans', sans-serif", letterSpacing: '1px', color: '#C27F1E', textTransform: 'uppercase' }}>Trip Mode</div>
          <h3 style={{ font: "italic 800 19px/1 'Playfair Display', serif", margin: '5px 0 8px' }}>
            Packing made simple
          </h3>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '8px', fontSize: '10.5px', lineHeight: 1.35, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
            <div style={{ font: "700 9px monospace", color: '#888', marginBottom: '3px' }}>PARIS · 5 DAYS · RAIN FORECAST</div>
            <div>Capsule wardrobe builder mixes 6 pieces into 5 distinct looks. Zero overpacking.</div>
          </div>
        </div>
        <div style={{ background: '#FFE07A', borderRadius: '6px', padding: '6px 8px', font: "700 11px/1.2 'DM Sans', sans-serif", color: '#1D1A16' }}>
          Trench + white tee = Day 3 sorted.
        </div>
      </div>
    )
  },
  {
    id: 'hashlilly',
    name: 'Hashlilly',
    tagline: 'The lab behind the tools. Own your work, own your audience, no algorithm tax.',
    roofColor: '#1A1230',
    roofInk: '#F6F3EC',
    bgGrad: 'radial-gradient(120% 80% at 80% 0%, #3a1f5c 0%, #1A1230 55%, #0e0a1b 100%)',
    textColor: '#F6F3EC',
    badgeText: 'INDEPENDENT SOFTWARE LAB',
    frontHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"Outfit", sans-serif' }}>
        <div>
          <div style={{ fontSize: '10px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FF9E8A', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
            INDEPENDENT SOFTWARE LAB
          </div>
          <h2 style={{ font: "800 28px/.98 'Outfit', sans-serif", margin: 0, letterSpacing: '-1.2px' }}>
            Own your work.<br />
            <span style={{ background: 'linear-gradient(90deg,#FF8A65,#E06AA8,#B58CFF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Own your audience.
            </span>
          </h2>
          <p style={{ fontSize: '12px', lineHeight: 1.4, marginTop: '8px', color: '#d8d2e6' }}>
            Tools that cut out the middleman: for job seekers, creators, brands and builders.
          </p>
          <div style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '6px 8px', marginTop: '10px', background: 'rgba(255,255,255,0.05)', fontSize: '10.5px' }}>
            🚀 6 active products • Pune & Bangalore
          </div>
        </div>
        <div>
          <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>
            <span style={{ fontWeight: 900 }}>PAANI POP!</span>
            <span>FREE WATER · 500 ML</span>
          </div>
        </div>
      </div>
    ),
    sideAHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", letterSpacing: '1px', color: '#FF9E8A', textTransform: 'uppercase' }}>THE FAMILY</div>
          <h3 style={{ font: "800 19px/1.1 'Outfit', sans-serif", margin: '5px 0 8px' }}>One lab. Many tools.</h3>
          <div style={{ fontSize: '10.5px', lineHeight: 1.35 }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '4px 0' }}><b>ResumeEngine:</b> Beat ATS. Get the call.</div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '4px 0' }}><b>InfluenceOS:</b> Creators paid per view.</div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '4px 0' }}><b>That's Missing:</b> Problem radar for builders.</div>
            <div style={{ padding: '4px 0' }}><b>Soulamore:</b> Peer circles & therapy.</div>
          </div>
        </div>
        <div style={{ color: '#FF9E8A', fontSize: '10px', fontWeight: 700 }}>
          hashlilly.in • Built in India
        </div>
      </div>
    ),
    backHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", letterSpacing: '1px', color: '#FF9E8A', textTransform: 'uppercase' }}>EXPLORE THE LAB</div>
          <h3 style={{ font: "800 19px/1.1 'Outfit', sans-serif", margin: '5px 0 8px' }}>Built in India.<br />Made to be owned.</h3>
          <div style={{ background: '#fff', color: '#161616', padding: '8px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px', margin: '4px 0' }}>
            <div style={{ width: '80px', height: '80px', background: '#161616', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
              HASH<br />LILLY<br />QR
            </div>
            <span style={{ font: "700 9px 'JetBrains Mono', monospace", color: '#161616' }}>hashlilly.in</span>
          </div>
        </div>
        <div style={{ fontSize: '8.5px', opacity: 0.8, borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '6px' }}>
          Sponsored by HASHLILLY (OPC) PRIVATE LIMITED. Ad space by PaaniPop!
        </div>
      </div>
    ),
    sideBHtml: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: '"DM Sans", sans-serif' }}>
        <div>
          <div style={{ font: "700 10px/1 'JetBrains Mono', monospace", letterSpacing: '1px', color: '#FF9E8A', textTransform: 'uppercase' }}>WHAT WE BELIEVE</div>
          <h3 style={{ font: "800 19px/1.1 'Outfit', sans-serif", margin: '5px 0 8px' }}>No algorithm tax.</h3>
          <div style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '7px', marginBottom: '6px', fontSize: '10.5px', lineHeight: 1.35 }}>
            <b>Own your audience.</b><br />Reach shouldn't depend on an opaque feed.
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '7px', fontSize: '10.5px', lineHeight: 1.35 }}>
            <b>Zero middlemen.</b><br />Direct connection between creators, brands and users.
          </div>
        </div>
        <div style={{ font: "700 10px 'JetBrains Mono', monospace", color: '#FF9E8A' }}>
          HASHLILLY LABS · 2026
        </div>
      </div>
    )
  }
];

export function InteractiveCarton3D({
  carton,
  scale = 0.65,
  autoSpin = true
}: {
  carton: SponsorCartonData;
  scale?: number;
  autoSpin?: boolean;
}) {
  const [rotation, setRotation] = useState({ rx: -10, ry: -25 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [view, setView] = useState<'front' | 'sideA' | 'back' | 'sideB' | 'spin'>(autoSpin ? 'spin' : 'front');

  // Realistic compact 500ml proportions:
  // Width: 260px, Height: 520px (ratio: 2.0x height to width)
  // Distance from center: width / 2 = 130px
  // Gable roof height: 160px with 53deg slope
  const W = 260;
  const H = 520;
  const halfW = W / 2; // 130px
  const halfH = H / 2; // 260px
  const roofH = 160;
  const gableH = 95;

  React.useEffect(() => {
    if (view !== 'spin') return;
    const interval = setInterval(() => {
      setRotation(prev => ({
        ...prev,
        ry: (prev.ry + 0.9) % 360
      }));
    }, 24);
    return () => clearInterval(interval);
  }, [view]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setView('front');
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setRotation(prev => ({
      rx: Math.max(-45, Math.min(45, prev.rx - dy * 0.4)),
      ry: prev.ry + dx * 0.5
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const setFixedView = (target: 'front' | 'sideA' | 'back' | 'sideB') => {
    setView(target);
    const yAngles = { front: 0, sideA: -90, back: -180, sideB: -270 };
    setRotation({ rx: -8, ry: yAngles[target] });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 3D Stage Box */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          height: '420px',
          perspective: '2000px',
          display: 'grid',
          placeItems: 'center',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          touchAction: 'none',
          position: 'relative'
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateY(20px) scale(${scale})`
          }}
        >
          {/* 3D Cube Carton Anchor */}
          <div
            style={{
              position: 'relative',
              width: 0,
              height: 0,
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotation.rx}deg) rotateY(${rotation.ry}deg)`,
              transition: isDragging || view === 'spin' ? 'none' : 'transform 0.6s cubic-bezier(0.3,0.7,0.2,1)'
            }}
          >
            {/* 4 Faces (Compact Width: 260px x Height: 520px) */}
            {[
              { key: 'front', angle: 0, content: carton.frontHtml, bright: 1 },
              { key: 'sideA', angle: 90, content: carton.sideAHtml, bright: 0.9 },
              { key: 'back', angle: 180, content: carton.backHtml, bright: 0.82 },
              { key: 'sideB', angle: 270, content: carton.sideBHtml, bright: 0.9 }
            ].map(f => (
              <div
                key={f.key}
                style={{
                  position: 'absolute',
                  left: `-${halfW}px`,
                  top: `-${halfH}px`,
                  width: `${W}px`,
                  height: `${H}px`,
                  background: carton.bgGrad,
                  color: carton.textColor,
                  padding: '20px 18px',
                  boxSizing: 'border-box',
                  transform: `rotateY(${f.angle}deg) translateZ(${halfW}px)`,
                  backfaceVisibility: 'hidden',
                  filter: `brightness(${f.bright})`,
                  border: '1.5px solid rgba(0,0,0,0.22)',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.08)'
                }}
              >
                {f.content}
              </div>
            ))}

            {/* Front & Back Slanted Roofs (Gable top) */}
            {[0, 180].map(deg => (
              <div
                key={deg}
                style={{
                  position: 'absolute',
                  left: `-${halfW}px`,
                  width: `${W}px`,
                  height: `${roofH}px`,
                  top: `-${roofH}px`,
                  background: carton.roofColor,
                  color: carton.roofInk,
                  transformOrigin: '50% 100%',
                  transform: `rotateY(${deg}deg) translateZ(${halfW}px) translateY(-${halfH}px) rotateX(53.7deg)`,
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ font: "900 28px/1 'Archivo', sans-serif", letterSpacing: '-0.8px' }}>PAANI POP!</div>
                <div style={{ font: "700 8.5px/1 'JetBrains Mono', monospace", letterSpacing: '0.8px', marginTop: '4px' }}>
                  FREE WATER · SPONSORED BY {carton.name.toUpperCase()}
                </div>
                {deg === 0 && (
                  <div style={{ width: '38px', height: '22px', borderRadius: '4px', background: carton.roofInk, marginTop: '6px' }} />
                )}
              </div>
            ))}

            {/* Left & Right Triangular Gables */}
            {[90, 270].map(deg => (
              <div
                key={deg}
                style={{
                  position: 'absolute',
                  left: `-${halfW}px`,
                  width: `${W}px`,
                  height: `${gableH}px`,
                  top: `-${gableH}px`,
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  background: carton.roofColor,
                  transform: `rotateY(${deg}deg) translateZ(${halfW}px) translateY(-${halfH}px)`,
                  backfaceVisibility: 'hidden',
                  filter: 'brightness(0.85)'
                }}
              />
            ))}

            {/* Top Fin (Seal line) */}
            <div
              style={{
                position: 'absolute',
                left: `-${halfW}px`,
                top: '-20px',
                width: `${W}px`,
                height: '20px',
                borderRadius: '3px 3px 0 0',
                background: carton.roofColor,
                transform: `translateY(-${halfH + gableH}px)`
              }}
            />
          </div>
        </div>
      </div>

      {/* View Angle Switcher Controls */}
      <div style={{ display: 'flex', gap: '6px', marginTop: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {(['front', 'sideA', 'back', 'sideB'] as const).map(f => (
          <button
            key={f}
            type="button"
            className="btn"
            style={{
              padding: '6px 12px',
              fontSize: '11px',
              fontWeight: 700,
              background: view === f ? 'var(--ink)' : '#fff',
              color: view === f ? '#fff' : 'var(--ink)',
              borderRadius: '99px'
            }}
            onClick={() => setFixedView(f)}
          >
            {f === 'front' ? 'Front' : f === 'sideA' ? 'Side A' : f === 'back' ? 'Back' : 'Side B'}
          </button>
        ))}
        <button
          type="button"
          className="btn lime"
          style={{
            padding: '6px 12px',
            fontSize: '11px',
            fontWeight: 800,
            borderRadius: '99px',
            background: view === 'spin' ? 'var(--lime)' : '#fff'
          }}
          onClick={() => setView('spin')}
        >
          {view === 'spin' ? '⚡ Spinning' : 'Spin 3D'}
        </button>
      </div>
    </div>
  );
}
