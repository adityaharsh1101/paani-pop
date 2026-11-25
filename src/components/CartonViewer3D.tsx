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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase', marginBottom: '8px' }}>
            YOUR BRAND SPOT ✦
          </div>
          <h2 style={{ font: "900 38px/.92 'Space Grotesk', sans-serif", margin: 0, letterSpacing: '-1.5px', textTransform: 'uppercase' }}>
            THIS<br />
            COULD BE<br />
            <span style={{ background: '#d6ff42', padding: '0 6px', border: '1.5px solid #161616', borderRadius: '4px', display: 'inline-block', transform: 'rotate(-2deg)' }}>
              YOURS!
            </span>
          </h2>
          <div style={{ border: '2px dashed #161616', borderRadius: '12px', padding: '12px', marginTop: '16px', background: 'rgba(214,255,66,0.2)' }}>
            <p style={{ fontSize: '13px', lineHeight: 1.45, margin: 0, fontWeight: 700 }}>
              Put your company billboard into thousands of real hands at events, campuses & summits.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '2px solid #161616', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>
          <span style={{ fontWeight: 900 }}>PAANI POP!</span>
          <span>SPONSOR PACK · 500 ML</span>
        </div>
      </div>
    ),
    sideAHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase' }}>YOUR CAMPAIGN</div>
        <h3 style={{ font: "800 24px/1.1 'Space Grotesk', sans-serif", margin: '6px 0 10px' }}>Your headline.<br />Your voice.</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.45 }}>Tell your brand story, announce your product launch, or recruit the brightest talent.</p>
        <div style={{ border: '1.5px dashed #aaa', borderRadius: '8px', padding: '10px', marginTop: '12px', fontSize: '11px', color: '#666' }}>
          [RESERVED FOR YOUR CAMPAIGN BULLETS]
        </div>
      </div>
    ),
    backHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase' }}>INTERACTIVE QR</div>
        <h3 style={{ font: "800 22px/1.1 'Space Grotesk', sans-serif", margin: '6px 0 10px' }}>Your Website</h3>
        <div style={{ background: '#fff', color: '#161616', padding: '12px', borderRadius: '8px', border: '1.5px solid #161616', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '8px 0' }}>
          <div style={{ width: '85px', height: '85px', border: '2px dashed #161616', borderRadius: '6px', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '10px', textAlign: 'center', color: '#5068ff', background: '#f5f5ff' }}>
            YOUR<br />QR CODE<br />HERE
          </div>
          <span style={{ font: "700 11px/1 'JetBrains Mono', monospace" }}>yourbrand.com</span>
        </div>
        <div style={{ fontSize: '11px', color: '#666', marginTop: '8px' }}>
          Visitors scan to claim your offer, app download, or survey.
        </div>
      </div>
    ),
    sideBHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#5068ff', textTransform: 'uppercase' }}>DISTRIBUTION</div>
        <h3 style={{ font: "800 22px/1.1 'Space Grotesk', sans-serif", margin: '6px 0 10px' }}>Targeted Drops</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.45 }}>We deliver your water cartons to curated banquets, student festivals, tech summits, or offices.</p>
        <div style={{ background: '#d6ff42', border: '1.5px solid #161616', borderRadius: '8px', padding: '10px', marginTop: '14px', fontSize: '11px', fontWeight: 700 }}>
          ⚡ 100% Free water. 100% Brand attention.
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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FF9E8A', textTransform: 'uppercase', marginBottom: '8px' }}>
            INDEPENDENT SOFTWARE LAB
          </div>
          <h2 style={{ font: "800 36px/.98 'Outfit', sans-serif", margin: 0, letterSpacing: '-1.5px' }}>
            Own your work.<br />
            <span style={{ background: 'linear-gradient(90deg,#FF8A65,#E06AA8,#B58CFF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Own your audience.
            </span>
          </h2>
          <p style={{ fontSize: '13px', lineHeight: 1.45, marginTop: '12px', color: '#d8d2e6' }}>
            Tools that cut out the middleman: for job seekers, creators, brands and builders.
          </p>
        </div>
        <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>
          <span style={{ fontWeight: 900 }}>PAANI POP!</span>
          <span>FREE WATER · 500 ML</span>
        </div>
      </div>
    ),
    sideAHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FF9E8A', textTransform: 'uppercase' }}>THE FAMILY</div>
        <h3 style={{ font: "800 22px/1.1 'Outfit', sans-serif", margin: '6px 0 10px' }}>One lab.<br />Many tools.</h3>
        <div style={{ fontSize: '12px', lineHeight: 1.4 }}>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.14)', padding: '6px 0' }}><b>ResumeEngine AI</b><br /><span style={{ opacity: 0.8 }}>Beat the ATS. Tailor to any job.</span></div>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.14)', padding: '6px 0' }}><b>InfluenceOS</b><br /><span style={{ opacity: 0.8 }}>Niche creators. Escrow per view.</span></div>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.14)', padding: '6px 0' }}><b>That's Missing</b><br /><span style={{ opacity: 0.8 }}>Find the problem worth solving.</span></div>
          <div style={{ padding: '6px 0' }}><b>Soulamore</b><br /><span style={{ opacity: 0.8 }}>Peer support & psychologist care.</span></div>
        </div>
      </div>
    ),
    backHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FF9E8A', textTransform: 'uppercase' }}>SCAN · EXPLORE THE LAB</div>
        <h3 style={{ font: "800 22px/1.1 'Outfit', sans-serif", margin: '6px 0 12px' }}>Built in India.<br />Made to be owned.</h3>
        <div style={{ background: '#fff', color: '#161616', padding: '10px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '8px 0' }}>
          <div style={{ width: '80px', height: '80px', background: '#161616', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
            HASH<br />LILLY<br />QR
          </div>
          <span style={{ font: "700 11px/1 'JetBrains Mono', monospace" }}>hashlilly.in</span>
        </div>
        <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '12px' }}>
          Sponsored by HASHLILLY (OPC) PRIVATE LIMITED. Ad space by PaaniPop!
        </div>
      </div>
    ),
    sideBHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FF9E8A', textTransform: 'uppercase' }}>WHAT WE BELIEVE</div>
        <h3 style={{ font: "800 22px/1.1 'Outfit', sans-serif", margin: '6px 0 12px' }}>No middlemen.<br />No algorithm tax.</h3>
        <div style={{ border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '10px', padding: '10px', marginBottom: '8px', fontSize: '12px' }}>
          <b>No algorithm tax.</b><br />Reach shouldn't depend on a feed you don't control.
        </div>
        <div style={{ border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '10px', padding: '10px', fontSize: '12px' }}>
          <b>Own your audience.</b><br />Keep the people who chose you, on channels you own.
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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#B4532C', textTransform: 'uppercase', marginBottom: '8px' }}>
            MENTAL WELLNESS CIRCLES
          </div>
          <h2 style={{ font: "500 36px/1.02 'Fraunces', serif", margin: 0, letterSpacing: '-1px' }}>
            Drink water.<br />
            <em style={{ fontStyle: 'italic', color: '#C95F36' }}>Speak your mind.</em>
          </h2>
          <p style={{ fontSize: '13px', lineHeight: 1.45, marginTop: '12px', color: '#4a3d38' }}>
            Safe spaces, therapist-moderated circles, and 24/7 self-care toolkits.
          </p>
        </div>
        <div style={{ borderTop: '2px solid rgba(31,27,26,0.3)', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>
          <span style={{ fontWeight: 900 }}>PAANI POP!</span>
          <span>FREE WATER · 500 ML</span>
        </div>
      </div>
    ),
    sideAHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#B4532C', textTransform: 'uppercase' }}>COMMUNITY</div>
        <h3 style={{ font: "600 22px/1.1 'Fraunces', serif", margin: '6px 0 10px' }}>Your story<br />stays yours.</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Zero judgment, total anonymity. Real human listeners trained to support you through work, grief, or heartbreak.</p>
      </div>
    ),
    backHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#B4532C', textTransform: 'uppercase' }}>CONNECT</div>
        <h3 style={{ font: "600 22px/1.1 'Fraunces', serif", margin: '6px 0 10px' }}>Join a circle</h3>
        <div style={{ background: '#fff', color: '#161616', padding: '10px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '8px 0' }}>
          <div style={{ width: '80px', height: '80px', background: '#F4976C', color: '#1F1B1A', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
            SOULA<br />MORE<br />QR
          </div>
          <span style={{ font: "700 11px/1 'JetBrains Mono', monospace" }}>soulamore.com</span>
        </div>
      </div>
    ),
    sideBHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#B4532C', textTransform: 'uppercase' }}>SAFE & PRIVATE</div>
        <h3 style={{ font: "600 22px/1.1 'Fraunces', serif", margin: '6px 0 10px' }}>Crisis Helpline</h3>
        <div style={{ background: '#1F1B1A', color: '#FFF5EE', borderRadius: '10px', padding: '10px', fontSize: '11px', lineHeight: 1.4 }}>
          Tele-MANAS free 24x7 India support: <b>14416</b>. Soulamore is not an emergency psychiatric service.
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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '1.6px', color: '#FFC7B6', textTransform: 'uppercase', marginBottom: '8px' }}>
            CREATOR ECONOMY INFRASTRUCTURE
          </div>
          <h2 style={{ font: "800 36px/1 'Plus Jakarta Sans', sans-serif", margin: 0, letterSpacing: '-1.8px' }}>
            Creators.<br />
            <span style={{ color: '#FFA48A' }}>Paid per view.</span>
          </h2>
          <p style={{ fontSize: '13px', lineHeight: 1.45, marginTop: '12px', color: '#e0dcff' }}>
            Automated brand matching, city-level creator discovery, and verified escrow contracts.
          </p>
        </div>
        <div style={{ borderTop: '2px solid rgba(255,255,255,0.2)', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>
          <span style={{ fontWeight: 900 }}>PAANI POP!</span>
          <span>FREE WATER · 500 ML</span>
        </div>
      </div>
    ),
    sideAHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FFC7B6', textTransform: 'uppercase' }}>PIPELINE</div>
        <h3 style={{ font: "800 22px/1.1 'Plus Jakarta Sans', sans-serif", margin: '6px 0 10px' }}>Zero fake<br />followers.</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>BFI algorithm filters ghost accounts and evaluates semantic audience alignment automatically.</p>
      </div>
    ),
    backHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FFC7B6', textTransform: 'uppercase' }}>CREATORS & BRANDS</div>
        <h3 style={{ font: "800 22px/1.1 'Plus Jakarta Sans', sans-serif", margin: '6px 0 10px' }}>Get the OS</h3>
        <div style={{ background: '#fff', color: '#161616', padding: '10px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '8px 0' }}>
          <div style={{ width: '80px', height: '80px', background: '#5B3DF5', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
            INFLU<br />ENCE<br />QR
          </div>
          <span style={{ font: "700 11px/1 'JetBrains Mono', monospace" }}>influence-os</span>
        </div>
      </div>
    ),
    sideBHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FFC7B6', textTransform: 'uppercase' }}>ESCROW SECURITY</div>
        <h3 style={{ font: "800 22px/1.1 'Plus Jakarta Sans', sans-serif", margin: '6px 0 10px' }}>Protected Payouts</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Funds sit in automated escrow until the campaign post meets verified reach metrics.</p>
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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FDE047', textTransform: 'uppercase', marginBottom: '8px' }}>
            FOUNDER INTELLIGENCE RADAR
          </div>
          <h2 style={{ font: "900 36px/.95 'Outfit', sans-serif", textTransform: 'uppercase', margin: 0, letterSpacing: '-1px' }}>
            Build what is<br />
            <span style={{ color: '#FDE047' }}>Actually missing.</span>
          </h2>
          <p style={{ fontSize: '13px', lineHeight: 1.45, marginTop: '12px', color: '#bbb' }}>
            Scan economic gaps and market pain points before spending months writing code.
          </p>
        </div>
        <div style={{ borderTop: '2px solid #333', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>
          <span style={{ fontWeight: 900, color: '#FDE047' }}>PAANI POP!</span>
          <span>FREE WATER · 500 ML</span>
        </div>
      </div>
    ),
    sideAHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FDE047', textTransform: 'uppercase' }}>DISCOVERY</div>
        <h3 style={{ font: "900 22px/1 'Outfit', sans-serif", textTransform: 'uppercase', margin: '6px 0 10px' }}>Zero Guesswork.</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Aggregating 500+ policy notifications and consumer frustration queries every day.</p>
      </div>
    ),
    backHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FDE047', textTransform: 'uppercase' }}>RADAR ACCESS</div>
        <h3 style={{ font: "900 22px/1 'Outfit', sans-serif", textTransform: 'uppercase', margin: '6px 0 10px' }}>Scan the Gap</h3>
        <div style={{ background: '#fff', color: '#161616', padding: '10px', borderRadius: '8px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '8px 0' }}>
          <div style={{ width: '80px', height: '80px', background: '#FDE047', color: '#131313', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
            MISSING<br />RADAR<br />QR
          </div>
          <span style={{ font: "700 11px/1 'JetBrains Mono', monospace" }}>thatsmissing.com</span>
        </div>
      </div>
    ),
    sideBHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#FDE047', textTransform: 'uppercase' }}>RADAR RADIAL</div>
        <h3 style={{ font: "900 22px/1 'Outfit', sans-serif", textTransform: 'uppercase', margin: '6px 0 10px' }}>Validation</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Test hypothesis with demand waitlists built right into your dashboard.</p>
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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#12804A', textTransform: 'uppercase', marginBottom: '8px' }}>
            CAREER ACCELERATION ENGINE
          </div>
          <h2 style={{ font: "900 36px/.92 'Archivo', sans-serif", textTransform: 'uppercase', margin: 0, letterSpacing: '-1px' }}>
            Beat the ATS.<br />
            <span style={{ background: '#3DDC84', padding: '0 6px', borderRadius: '4px' }}>Get the interview.</span>
          </h2>
          <p style={{ fontSize: '13px', lineHeight: 1.45, marginTop: '12px', color: '#444' }}>
            Keyword matching, bullet point impact quantification, and recruiter scoring.
          </p>
        </div>
        <div style={{ borderTop: '2px solid #161616', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>
          <span style={{ fontWeight: 900 }}>PAANI POP!</span>
          <span>FREE WATER · 500 ML</span>
        </div>
      </div>
    ),
    sideAHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#12804A', textTransform: 'uppercase' }}>MATCHING</div>
        <h3 style={{ font: "900 22px/.95 'Archivo', sans-serif", textTransform: 'uppercase', margin: '6px 0 10px' }}>Recruiter Fit</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Score 85%+ against ATS filters before sending applications.</p>
      </div>
    ),
    backHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#12804A', textTransform: 'uppercase' }}>START FREE</div>
        <h3 style={{ font: "900 22px/.95 'Archivo', sans-serif", textTransform: 'uppercase', margin: '6px 0 10px' }}>Scan & Optimize</h3>
        <div style={{ background: '#fff', color: '#161616', padding: '10px', borderRadius: '8px', border: '1.5px solid #161616', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '8px 0' }}>
          <div style={{ width: '80px', height: '80px', background: '#3DDC84', color: '#161616', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
            RESUME<br />ENGINE<br />QR
          </div>
          <span style={{ font: "700 11px/1 'JetBrains Mono', monospace" }}>resumeengine.ai</span>
        </div>
      </div>
    ),
    sideBHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1.5px', color: '#12804A', textTransform: 'uppercase' }}>EXPORT</div>
        <h3 style={{ font: "900 22px/.95 'Archivo', sans-serif", textTransform: 'uppercase', margin: '6px 0 10px' }}>One-Click PDF</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Clean, single-page, human-readable formatting engineered for hiring teams.</p>
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
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '11px', fontFamily: '"DM Sans", sans-serif', letterSpacing: '2px', color: '#C27F1E', textTransform: 'uppercase', marginBottom: '8px' }}>
            SMART WARDROBE CURATION
          </div>
          <h2 style={{ font: "800 36px/1 'DM Sans', sans-serif", margin: 0, letterSpacing: '-1.5px' }}>
            Full closet.<br />
            <em style={{ font: "italic 800 40px/1 'Playfair Display', serif", color: '#C27F1E' }}>Nothing to wear?</em>
          </h2>
          <p style={{ fontSize: '13px', lineHeight: 1.45, marginTop: '12px', color: '#555' }}>
            Digital inventory, daily weather-synced outfit suggestions, and pack lists.
          </p>
        </div>
        <div style={{ borderTop: '2px solid #1D1A16', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: '"JetBrains Mono", monospace' }}>
          <span style={{ fontWeight: 900 }}>PAANI POP!</span>
          <span>FREE WATER · 500 ML</span>
        </div>
      </div>
    ),
    sideAHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"DM Sans", sans-serif', letterSpacing: '2px', color: '#C27F1E', textTransform: 'uppercase' }}>OUTFITS</div>
        <h3 style={{ font: "italic 800 22px/1.05 'Playfair Display', serif", margin: '6px 0 10px' }}>Daily Combos</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Pair your existing staples with zero repetitive decision fatigue.</p>
      </div>
    ),
    backHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"DM Sans", sans-serif', letterSpacing: '2px', color: '#C27F1E', textTransform: 'uppercase' }}>DOWNLOAD</div>
        <h3 style={{ font: "italic 800 22px/1.05 'Playfair Display', serif", margin: '6px 0 10px' }}>Scan Your Closet</h3>
        <div style={{ background: '#fff', color: '#1D1A16', padding: '10px', borderRadius: '8px', border: '1.5px solid #1D1A16', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', margin: '8px 0' }}>
          <div style={{ width: '80px', height: '80px', background: '#FFE07A', color: '#1D1A16', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '11px', textAlign: 'center', borderRadius: '4px' }}>
            WARD<br />ROBE<br />QR
          </div>
          <span style={{ font: "700 11px/1 'JetBrains Mono', monospace" }}>wardrobe-app</span>
        </div>
      </div>
    ),
    sideBHtml: (
      <div>
        <div style={{ fontSize: '11px', fontFamily: '"DM Sans", sans-serif', letterSpacing: '2px', color: '#C27F1E', textTransform: 'uppercase' }}>TRAVEL</div>
        <h3 style={{ font: "italic 800 22px/1.05 'Playfair Display', serif", margin: '6px 0 10px' }}>Smart Packing</h3>
        <p style={{ fontSize: '12px', lineHeight: 1.4 }}>Auto-generates trip capsules tailored to destination forecast and luggage size.</p>
      </div>
    )
  }
];

export function InteractiveCarton3D({
  carton,
  scale = 0.58,
  autoSpin = true
}: {
  carton: SponsorCartonData;
  scale?: number;
  autoSpin?: boolean;
}) {
  const [view, setView] = useState<'front' | 'sideA' | 'back' | 'sideB' | 'spin'>(autoSpin ? 'spin' : 'front');
  const [rotation, setRotation] = useState({ rx: -10, ry: -25 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = React.useRef<{ startX: number; startY: number; rx: number; ry: number } | null>(null);

  // Auto-spin effect
  React.useEffect(() => {
    if (view !== 'spin') return;
    let animId: number;
    let lastTime = performance.now();
    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      setRotation(prev => ({ ...prev, ry: prev.ry - dt * 0.022 }));
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [view]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setView('front');
    setIsDragging(true);
    dragRef.current = { startX: e.clientX, startY: e.clientY, rx: rotation.rx, ry: rotation.ry };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setRotation({
      ry: dragRef.current.ry + dx * 0.45,
      rx: Math.max(-35, Math.min(25, dragRef.current.rx - dy * 0.25))
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    dragRef.current = null;
  };

  const setFixedView = (v: 'front' | 'sideA' | 'back' | 'sideB') => {
    setView(v);
    const angles = { front: 0, sideA: -90, back: -180, sideB: -270 };
    setRotation({ rx: -8, ry: angles[v] });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 3D Stage Box */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          height: '420px',
          perspective: '2200px',
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
            transform: `translateY(30px) scale(${scale})`
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
            {/* 4 Faces (300px wide x 760px high) */}
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
                  left: '-150px',
                  top: '-380px',
                  width: '300px',
                  height: '760px',
                  background: carton.bgGrad,
                  color: carton.textColor,
                  padding: '24px 22px',
                  boxSizing: 'border-box',
                  transform: `rotateY(${f.angle}deg) translateZ(150px)`,
                  backfaceVisibility: 'hidden',
                  filter: `brightness(${f.bright})`,
                  border: '1.5px solid rgba(0,0,0,0.25)',
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.1)'
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
                  left: '-150px',
                  width: '300px',
                  height: '186px',
                  top: '-186px',
                  background: carton.roofColor,
                  color: carton.roofInk,
                  transformOrigin: '50% 100%',
                  transform: `rotateY(${deg}deg) translateZ(150px) translateY(-380px) rotateX(53.7deg)`,
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ font: "900 32px/1 'Archivo', sans-serif", letterSpacing: '-1px' }}>PAANI POP!</div>
                <div style={{ font: "700 9px/1 'JetBrains Mono', monospace", letterSpacing: '1px', marginTop: '4px' }}>
                  FREE WATER · SPONSORED BY {carton.name.toUpperCase()}
                </div>
                {deg === 0 && (
                  <div style={{ width: '42px', height: '26px', borderRadius: '5px', background: carton.roofInk, marginTop: '8px' }} />
                )}
              </div>
            ))}

            {/* Left & Right Triangular Gables */}
            {[90, 270].map(deg => (
              <div
                key={deg}
                style={{
                  position: 'absolute',
                  left: '-150px',
                  width: '300px',
                  height: '110px',
                  top: '-110px',
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  background: carton.roofColor,
                  transform: `rotateY(${deg}deg) translateZ(150px) translateY(-380px)`,
                  backfaceVisibility: 'hidden',
                  filter: 'brightness(0.85)'
                }}
              />
            ))}

            {/* Top Fin (Seal line) */}
            <div
              style={{
                position: 'absolute',
                left: '-150px',
                top: '-24px',
                width: '300px',
                height: '24px',
                borderRadius: '4px 4px 0 0',
                background: carton.roofColor,
                transform: 'translateY(-490px)'
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
