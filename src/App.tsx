import { useMemo, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, BarChart3, Bell, Building2, Check, ChevronDown,
  CircleHelp, ClipboardList, Download, Droplets, Filter, Gift,
  LayoutDashboard, Menu, Package, Plus, QrCode, Search, Settings,
  ShieldCheck, Sparkles, Target, Truck, Users, Wallet, X
} from 'lucide-react';
import { initialCampaigns, type Campaign, money } from './data';

type Area = 'site' | 'brand' | 'ops';
type Item = { label:string; icon: typeof LayoutDashboard };
const brandNav:Item[] = [
  {label:'Overview',icon:LayoutDashboard},{label:'Campaigns',icon:Target},{label:'Creative studio',icon:Sparkles},
  {label:'Reports',icon:BarChart3},{label:'Billing',icon:Wallet},{label:'Team',icon:Users}
];
const opsNav:Item[] = [
  {label:'Overview',icon:LayoutDashboard},{label:'Advertiser CRM',icon:Building2},{label:'Campaign pipeline',icon:ClipboardList},
  {label:'Production & stock',icon:Package},{label:'Venue network',icon:Truck},{label:'Finance',icon:Wallet},
  {label:'Compliance',icon:ShieldCheck},{label:'Users & roles',icon:Users}
];

export default function App(){
  const [area,setArea]=useState<Area>('site');
  const [page,setPage]=useState('Overview');
  const [mobile,setMobile]=useState(false);
  const [query,setQuery]=useState('');
  const [status,setStatus]=useState('All');
  const [campaignList,setCampaignList]=useState<Campaign[]>(initialCampaigns);
  const [activeCampaignModal,setActiveCampaignModal]=useState(false);
  const [contactModal,setContactModal]=useState(false);
  const [selectedCampaign,setSelectedCampaign]=useState<Campaign | null>(null);
  const [toast,setToast]=useState('');

  const notify=(message:string)=>{setToast(message);window.setTimeout(()=>setToast(''),3400)};
  const go=(next:Area,section='Overview')=>{setArea(next);setPage(section);setMobile(false)};

  const handleAddCampaign=(newC:Campaign)=>{
    setCampaignList(prev=>[newC,...prev]);
    notify(`Campaign "${newC.name}" added to pipeline.`);
  };

  const filtered=useMemo(()=>campaignList.filter(c=>(status==='All'||c.status===status)&&[c.name,c.brand,c.id,c.format,c.edition].join(' ').toLowerCase().includes(query.toLowerCase())),[campaignList,query,status]);

  if(area==='site') return <div className="app-shell">
    <header className="site-nav">
      <a className="wordmark" href="#top"><span className="logo-drop"><Droplets size={19}/></span>PAANI<span>POP</span></a>
      <nav><a href="#how">How it works</a><a href="#brands">For brands</a><a href="#venues">For venues</a><a href="#about">Our idea</a></nav>
      <div className="nav-actions"><button className="text-btn" onClick={()=>go('brand')}>Brand login</button><button className="btn btn-dark" onClick={()=>go('brand','Campaigns')}>Work with us <ArrowUpRight size={16}/></button></div>
      <button className="mobile-menu" onClick={()=>setMobile(!mobile)} aria-label="Open menu"><Menu/></button>
    </header>
    {mobile&&<div className="mobile-nav"><a href="#how" onClick={()=>setMobile(false)}>How it works</a><a href="#brands" onClick={()=>setMobile(false)}>For brands</a><a href="#venues" onClick={()=>setMobile(false)}>For venues</a><button onClick={()=>go('brand')}>Brand portal</button></div>}
    <main id="top">
      <section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"/> A LITTLE REFRESHMENT. A LOT OF POSSIBILITY.</div><h1>Water that<br/><em>gets people</em><br/>talking.</h1><p className="hero-sub">A free bottle in your hand. A brand worth remembering. PAANI POP turns everyday hydration into a better kind of brand experience.</p><div className="hero-buttons"><button className="btn btn-dark btn-lg" onClick={()=>go('brand','Campaigns')}>Become an advertiser <ArrowUpRight size={17}/></button><a className="under-link" href="#how">Get to know us <ArrowRight size={16}/></a></div><div className="hero-note"><span className="note-icon"><Gift size={17}/></span><span>Good water. Great brands. <b>Always free to enjoy.</b></span></div></div>
        <div className="hero-art"><div className="sun-disc"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="water-card"><span>STAY A LITTLE</span><b>LONGER.</b><i>JUST ADD WATER ↗</i></div><div className="water-pack"><div className="pack-top">PAANI POP <Droplets size={13}/></div><div className="pack-main">GOOD<br/><em>VIBES.</em></div><div className="pack-bottom"><span>DRINK UP.</span><QrCode size={38}/></div></div><div className="art-sticker">100%<small>REFRESHED</small></div><div className="floating-caption">A new kind of<br/>brand real estate ↗</div></div>
        <div className="hero-bottom"><span>01 / THE IDEA</span><span>MADE FOR MOMENTS THAT MATTER</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>
      <section className="ticker"><div>FREE WATER <b>✳</b> FULL ENTERTAINMENT <b>✳</b> BETTER BRAND CONNECTIONS <b>✳</b> FREE WATER <b>✳</b> FULL ENTERTAINMENT <b>✳</b> BETTER BRAND CONNECTIONS <b>✳</b></div></section>
      <section className="section intro" id="how"><div className="section-kicker">02 / A SIMPLE IDEA</div><div className="intro-grid"><h2>Thirsty for<br/><em>something</em><br/>different?</h2><div><p className="intro-lead">We believe a bottle of water can do more than quench a thirst.</p><p>PAANI POP brings together people, places and brands through free packaged drinking water. Brands sponsor the experience. People enjoy the water. Venues get a thoughtful add-on for their guests.</p><p className="muted">A small everyday utility, with a little more meaning built in.</p></div></div>
        <div className="steps">{[{n:'01',icon:Droplets,title:'We source',body:'We work with qualified manufacturing and filling partners to bring safe, quality water to the table.'},{n:'02',icon:Target,title:'Brands sponsor',body:'Advertisers choose a format, audience and campaign that fits their story and budget.'},{n:'03',icon:Gift,title:'People enjoy',body:'Water is shared free at events, campuses and other everyday gathering places.'},{n:'04',icon:QrCode,title:'Stories travel',body:'Optional QR experiences can connect the pack to a campaign page and measurable engagement.'}].map(s=><article key={s.n}><span>{s.n}</span><s.icon/><h3>{s.title}</h3><p>{s.body}</p></article>)}</div>
      </section>
      <section className="section brand-section" id="brands"><div className="section-kicker">03 / FOR BRANDS</div><div className="split-heading"><h2>Your brand.<br/><em>In good company.</em></h2><p>Be part of the moment people already welcome. Put your message on a useful product, in the places your audience gathers.</p></div><div className="brand-tiles">
        <div className="brand-tile tile-dark"><div className="tile-top">01 / BRAND PARTNERS</div><div className="tile-art"><div className="mini-pack"><span>PAANI POP</span><b>MAKE<br/>IT<br/><i>MATTER.</i></b><small>YOUR BRAND HERE</small></div><span className="tile-spark">✳</span></div><h3>Show up<br/>with purpose.</h3><p>Campaign-led packaging, event presence and QR-enabled experiences, designed around your audience.</p><button onClick={()=>go('brand','Campaigns')}>Explore brand portal <ArrowUpRight/></button></div>
        <div className="brand-tile tile-lime"><div className="tile-top">02 / VENUE PARTNERS</div><div className="venue-graphic"><div className="venue-circle">GOOD<br/>THINGS<br/><i>HAPPEN</i><br/>HERE.</div><span>✳</span></div><h3>Make your<br/>guests feel good.</h3><p>Offer complimentary drinking water with a partner-funded model that can fit your event or venue.</p><button onClick={()=>setContactModal(true)}>Partner with us <ArrowUpRight/></button></div>
      </div></section>
      <section className="section moments" id="venues"><div className="section-kicker">04 / WHERE WE SHOW UP</div><h2>Made for the<br/><em>in-between moments.</em></h2><div className="moment-grid">{[{tag:'01 / CELEBRATIONS',symbol:'✳',title:<>Weddings<br/>& gatherings</>,body:'A thoughtful welcome for the people who came to celebrate.',cls:'moment-wedding'},{tag:'02 / CAMPUS LIFE',symbol:'↗',title:<>Campuses<br/>& communities</>,body:'Connect with the next generation where life actually happens.',cls:'moment-campus'},{tag:'03 / AT WORK',symbol:'⌂',title:<>Offices<br/>& workplaces</>,body:'Bring a refreshingly simple perk to the working day.',cls:'moment-work'},{tag:'04 / OUT & ABOUT',symbol:'◎',title:<>Sports<br/>& events</>,body:'Keep people refreshed while the good stuff unfolds.',cls:'moment-sport'}].map((m,i)=><article className={'moment-card '+m.cls} key={i}><div className="moment-index">{m.tag}</div><div className="moment-symbol">{m.symbol}</div><h3>{m.title}</h3><p>{m.body}</p></article>)}</div></section>
      <section className="manifesto" id="about"><div className="manifesto-mark"><Droplets size={26}/></div><div className="section-kicker">05 / THE PAANI POP PROMISE</div><h2>Not another ad.<br/><em>A better way to show up.</em></h2><p>Less interruption. More usefulness. A little more joy in the everyday.</p><button className="btn btn-cream btn-lg" onClick={()=>setContactModal(true)}>Let's make something happen <ArrowUpRight/></button><div className="manifesto-foot">PAANI POP · FREE WATER. FULL ENTERTAINMENT.</div></section>
    </main>
    <footer className="site-footer">
      <div className="site-footer-top">
        <a className="wordmark" href="#top"><span className="logo-drop"><Droplets size={18}/></span>PAANI<span>POP</span></a>
        <p>Free water. Full entertainment.</p>
        <div className="site-footer-links">
          <button onClick={()=>go('brand')}>Brand portal</button>
          <button onClick={()=>go('ops')}>Operations</button>
          <a href="mailto:hello@paanipop.in">Contact</a>
        </div>
      </div>
      <div className="site-footer-legal">
        <div className="site-footer-copyright">
          © 2026 HASHLILLY (OPC) PRIVATE LIMITED. Deskai, LillyPost, Soulamore, Terraclaw, That's Missing, BoozedIN, SyncNode, Telegram Drive, God's Eye, Rojgaar, Wardrobe, Metro Connect, and PAANI POP are trademarks of HASHLILLY (OPC) PRIVATE LIMITED.
        </div>
        <div className="site-footer-entity">
          HASHLILLY (OPC) PRIVATE LIMITED | CIN: U62099PB2026OPC068567 | Reg No: UDYAM-PB-20-0003915 <br />
          Registered Address: 399, MANNAT ENCLAVE -2, BHABAT SUB TEHSIL, Zirakpur, Rajpura, Mohali- 140603, Punjab <br />
          Grievance Officer: tech.hashlilly@gmail.com <br />
          Advertising automation platforms, software engineering, and experimental laboratory systems.
        </div>
      </div>
    </footer>
    {contactModal&&<ContactModal close={()=>setContactModal(false)} notify={notify}/>}
    {toast&&<Toast message={toast}/>}
  </div>;

  const nav=area==='brand'?brandNav:opsNav;
  return <div className="app-shell portal-shell">
    <aside className={'sidebar '+(mobile?'show':'')}><div className="portal-brand"><div className="portal-logo"><Droplets/></div><div><b>PAANI POP</b><small>{area==='brand'?'BRAND PARTNER PORTAL':'OPERATIONS CONSOLE'}</small></div><button className="side-close" onClick={()=>setMobile(false)}><X/></button></div><div className="workspace-label">{area==='brand'?'WORKSPACE':'CONTROL ROOM'}</div><nav>{nav.map(({label,icon:Icon})=><button key={label} className={page===label?'active':''} onClick={()=>{setPage(label);setMobile(false)}}><Icon size={17}/>{label}{label==='Campaigns'&&area==='brand'?<span className="nav-count">{campaignList.length}</span>:null}</button>)}</nav><div className="side-bottom"><div className="help-card"><CircleHelp size={18}/><b>Need a hand?</b><p>Our team is here to help you keep things moving.</p><a href="mailto:hello@paanipop.in">Contact support <ArrowUpRight size={13}/></a></div><button className="side-settings" onClick={()=>notify('Settings will be enabled with account management.') }><Settings size={16}/> Settings</button><div className="profile"><div className="avatar">{area==='brand'?'MP':'PP'}</div><div><b>{area==='brand'?'Mango People':'PAANI POP Team'}</b><small>{area==='brand'?'Brand partner':'Administrator preview'}</small></div><ChevronDown size={16}/></div></div></aside>
    <div className="portal-main"><header className="portal-top"><button className="mobile-menu portal-mobile" onClick={()=>setMobile(true)}><Menu/></button><div className="crumb">PAANI POP <span>/</span> {area==='brand'?'BRAND PORTAL':'OPERATIONS'} <span>/</span> <b>{page}</b></div><div className="top-actions"><button className="icon-button" onClick={()=>notify('You are all caught up.')}><Bell size={18}/><i/></button><div className="top-avatar">{area==='brand'?'MP':'PP'}</div><button className="exit-button" onClick={()=>go('site')}>Exit portal <ArrowUpRight size={14}/></button></div></header>
      <main className="portal-content">
        {page==='Overview'?<Overview area={area} setPage={setPage} openNew={()=>setActiveCampaignModal(true)} campaigns={campaignList} onSelect={setSelectedCampaign}/>:
         page==='Campaigns'||page==='Campaign pipeline'?<CampaignsPage area={area} rows={filtered} query={query} setQuery={setQuery} status={status} setStatus={setStatus} openNew={()=>setActiveCampaignModal(true)} onSelect={setSelectedCampaign} notify={notify}/>:
         <GenericPage page={page} notify={notify} openNew={()=>setActiveCampaignModal(true)}/>}
      </main>
      <footer className="portal-footer"><span>PAANI POP · {area==='brand'?'BRAND PARTNER PORTAL':'OPERATIONS CONSOLE'}</span><span>PREVIEW ENVIRONMENT · DATA SHOWN IS ILLUSTRATIVE</span></footer>
    </div>
    {contactModal&&<ContactModal close={()=>setContactModal(false)} notify={notify}/>}
    {activeCampaignModal&&<CreateCampaignModal close={()=>setActiveCampaignModal(false)} onAdd={handleAddCampaign}/>}
    {selectedCampaign&&<CampaignDetailModal campaign={selectedCampaign} close={()=>setSelectedCampaign(null)}/>}
    {toast&&<Toast message={toast}/>}
  </div>;
}

function Toast({message}:{message:string}){return <div className="toast"><Check size={16}/>{message}</div>}
function Stat({label,value,delta,icon:Icon}:{label:string;value:string;delta:string;icon:typeof Target}){return <div className="stat-card"><div className="stat-top"><span>{label}</span><Icon size={18}/></div><strong>{value}</strong><small>{delta}</small></div>}
function Overview({area,setPage,openNew,campaigns,onSelect}:{area:Area;setPage:(s:string)=>void;openNew:()=>void;campaigns:Campaign[];onSelect:(c:Campaign)=>void}){
 const brand=area==='brand';
 const totalVol=campaigns.reduce((acc,c)=>acc+c.volume,0);
 const totalBudget=campaigns.reduce((acc,c)=>acc+c.budget,0);
 return <><div className="page-heading"><div><div className="portal-eyebrow">{brand?'YOUR BRAND WORKSPACE':'THE BIG PICTURE'}</div><h1>{brand?'Good morning, Mango People.':'Good morning, team.'}</h1><p>{brand?'Here’s what’s happening with your PAANI POP campaigns.':'Here’s your operating snapshot across campaigns, partners and distribution.'}</p></div><button className="btn btn-dark" onClick={openNew}><Plus size={16}/>{brand?'New campaign':'Add campaign'}</button></div>
  <div className="stat-grid">
    <Stat label={brand?'Active campaigns':'Total campaigns'} value={String(campaigns.filter(c=>c.status==='Live').length)} delta={brand?'1 currently live':`${campaigns.length} in registry`} icon={Target}/>
    <Stat label={brand?'Units sponsored':'Units in circulation'} value={totalVol.toLocaleString('en-IN')} delta="Across active runs" icon={Package}/>
    <Stat label={brand?'Campaign reach':'Audience engagement'} value={brand?'8.4K':String(campaigns.reduce((a,b)=>a+b.reach,0).toLocaleString('en-IN'))} delta={brand?'Estimated campaign views':'Verified physical deliveries'} icon={Users}/>
    <Stat label={brand?'Total investment':'Sponsor committed'} value={money(totalBudget)} delta={brand?'Current campaign value':'Active pipeline budget'} icon={Wallet}/>
  </div>
  <div className="dashboard-grid"><section className="panel"><div className="panel-heading"><div><span className="panel-kicker">CAMPAIGN ACTIVITY</span><h2>{brand?'Your campaigns':'Campaign pipeline'}</h2></div><button className="link-btn" onClick={()=>setPage(brand?'Campaigns':'Campaign pipeline')}>View all <ArrowRight size={15}/></button></div><CampaignTable rows={campaigns} onSelect={onSelect}/></section>
   <section className="panel progress-panel"><div className="panel-heading"><div><span className="panel-kicker">AT A GLANCE</span><h2>{brand?'Campaign progress':'Operations pulse'}</h2></div><span className="live-indicator">● LIVE PIPELINE</span></div><Progress label="Creative approvals" value="4 / 5" width="80%"/><Progress label="Production readiness" value="3 / 5" width="60%"/><Progress label="Distribution planning" value="85%" width="85%"/><div className="notice"><ShieldCheck size={17}/><div><b>Compliance comes first</b><p>Pack copy, water standards and partner documents must be approved before a campaign is released.</p></div></div></section></div>
  <div className="quick-grid"><Quick icon={Sparkles} label={brand?'Open creative studio':'Review production'} onClick={()=>setPage(brand?'Creative studio':'Production & stock')}/><Quick icon={BarChart3} label={brand?'See campaign reports':'Manage venue network'} onClick={()=>setPage(brand?'Reports':'Venue network')}/><Quick icon={Wallet} label="View billing & invoices" onClick={()=>setPage('Billing')}/></div></>;
}
function Progress({label,value,width}:{label:string;value:string;width:string}){return <div className="progress-block"><div className="progress-line"><span>{label}</span><b>{value}</b></div><div className="progress-track"><i style={{width}}/></div></div>}
function Quick({icon:Icon,label,onClick}:{icon:typeof Target;label:string;onClick:()=>void}){return <button onClick={onClick}><span><Icon/></span><b>{label}</b><ArrowUpRight/></button>}

function CampaignTable({rows,onSelect}:{rows:Campaign[];onSelect:(c:Campaign)=>void}){
  return <div className="table-wrap"><table><thead><tr><th>CAMPAIGN</th><th>FORMAT & EDITION</th><th>VOLUME</th><th>BUDGET</th><th>STATUS</th><th>ACTIONS</th></tr></thead><tbody>{rows.map(c=><tr key={c.id}><td><div className="campaign-name">{c.name}<small>{c.id} · {c.brand}</small></div></td><td><div>{c.format}</div><small style={{color:'#748d3e',fontWeight:700}}>{c.edition} Edition</small></td><td>{c.volume.toLocaleString('en-IN')} units</td><td>{money(c.budget)}<small>{c.venueTarget}</small></td><td><span className={'status status-'+c.status.toLowerCase().replace(' ','-')}>{c.status}</span></td><td><button className="row-more" onClick={()=>onSelect(c)} style={{fontSize:'12px',fontWeight:700,background:'#ecefe4',padding:'4px 8px',borderRadius:'4px'}}>View</button></td></tr>)}</tbody></table></div>
}

function CampaignsPage({area,rows,query,setQuery,status,setStatus,openNew,onSelect,notify}:{area:Area;rows:Campaign[];query:string;setQuery:(v:string)=>void;status:string;setStatus:(v:string)=>void;openNew:()=>void;onSelect:(c:Campaign)=>void;notify:(v:string)=>void}){
  return <><div className="page-heading"><div><div className="portal-eyebrow">CAMPAIGN MANAGEMENT</div><h1>{area==='brand'?'Your campaigns.':'Campaign pipeline.'}</h1><p>Keep every brief, approval and activation moving in one place.</p></div><button className="btn btn-dark" onClick={openNew}><Plus size={16}/>Create campaign</button></div><div className="filter-bar"><div className="search-field"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search campaigns, brands, editions or IDs…"/></div><div className="filter-select"><Filter size={15}/><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>Planning</option><option>In review</option><option>Live</option><option>Completed</option></select><ChevronDown size={14}/></div><button className="btn btn-outline" onClick={()=>notify('Export generated for current pipeline filter.')}><Download size={16}/>Export</button></div><section className="panel full-table"><CampaignTable rows={rows} onSelect={onSelect}/>{rows.length===0&&<div className="empty-state">No campaigns match that search. Try another term or status.</div>}</section><p className="data-footnote">All campaigns adhere to PAANI POP 500 ml compliance standards and partner distribution covenants.</p></>
}

function CampaignDetailModal({campaign,close}:{campaign:Campaign;close:()=>void}){
  return <div className="modal-backdrop" onClick={close}>
    <div className="modal" onClick={e=>e.stopPropagation()}>
      <button type="button" className="modal-close" onClick={close}><X/></button>
      <div className="portal-eyebrow">CAMPAIGN DOSSIER · {campaign.id}</div>
      <h2>{campaign.name}</h2>
      <p style={{marginBottom:'16px'}}>Brand: <b>{campaign.brand}</b> · Edition: <b>{campaign.edition}</b></p>
      <div style={{background:'#fff',padding:'16px',border:'1px solid #dfe3d4',marginBottom:'18px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',fontSize:'12px'}}>
        <div><span>Format:</span> <b>{campaign.format}</b></div>
        <div><span>Status:</span> <b style={{textTransform:'uppercase',color:'#748d3e'}}>{campaign.status}</b></div>
        <div><span>Distribution Volume:</span> <b>{campaign.volume.toLocaleString('en-IN')} units</b></div>
        <div><span>Budget Commitment:</span> <b>{money(campaign.budget)}</b></div>
        <div><span>Target Distribution:</span> <b>{campaign.venueTarget}</b></div>
        <div><span>Campaign Window:</span> <b>{campaign.start} – {campaign.end}</b></div>
      </div>
      <div className="notice" style={{marginBottom:'16px'}}>
        <ShieldCheck size={17}/>
        <div><b>Compliance & Label Sign-Off</b><p>Packaging art reviewed against Legal Metrology & FSSAI 500 ml standards.</p></div>
      </div>
      <button className="btn btn-dark" onClick={close} style={{width:'100%'}}>Done</button>
    </div>
  </div>;
}

function CreateCampaignModal({close,onAdd}:{close:()=>void;onAdd:(c:Campaign)=>void}){
  const [name,setName]=useState('');
  const [brand,setBrand]=useState('Mango People');
  const [format,setFormat]=useState('Banquet & Event takeover');
  const [edition,setEdition]=useState<'Her' | 'His' | 'Everyone' | 'Special'>('Everyone');
  const [volume,setVolume]=useState(5000);
  const [venueTarget,setVenueTarget]=useState('Delhi NCR Venues');

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    const id=`PP-0${Math.floor(Math.random()*900+100)}`;
    const budget=volume*50; // ₹50 base price
    onAdd({
      id,
      name,
      brand,
      format,
      edition,
      volume:Number(volume),
      status:'Planning',
      start:'Dec 2026',
      end:'Jan 2027',
      budget,
      reach:0,
      venueTarget
    });
    close();
  };

  return <div className="modal-backdrop" onClick={close}>
    <form className="modal" onClick={e=>e.stopPropagation()} onSubmit={handleSubmit}>
      <button type="button" className="modal-close" onClick={close}><X/></button>
      <div className="portal-eyebrow">NEW CAMPAIGN BRIEF</div>
      <h2>Launch a<br/><em>new drop.</em></h2>
      <p>Configure a sponsored water run for your target venues and audience.</p>
      
      <label>CAMPAIGN NAME
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Summer Spark Activation"/>
      </label>
      
      <div className="form-two">
        <label>SPONSOR BRAND
          <input required value={brand} onChange={e=>setBrand(e.target.value)}/>
        </label>
        <label>PACKAGING EDITION
          <select value={edition} onChange={e=>setEdition(e.target.value as any)}>
            <option value="Everyone">Everyone Edition (Universal)</option>
            <option value="Her">Her Edition (Lifestyle)</option>
            <option value="His">His Edition (Distinct Visual)</option>
            <option value="Special">Special Edition (Event/Wedding)</option>
          </select>
        </label>
      </div>

      <div className="form-two">
        <label>CAMPAIGN FORMAT
          <select value={format} onChange={e=>setFormat(e.target.value)}>
            <option>Banquet & Event takeover</option>
            <option>Campus sampling</option>
            <option>Sports & fitness drop</option>
            <option>Corporate hydration</option>
          </select>
        </label>
        <label>TARGET VOLUME (UNITS)
          <input type="number" min="1000" step="1000" value={volume} onChange={e=>setVolume(Number(e.target.value))}/>
        </label>
      </div>

      <label>TARGET DISTRIBUTION CLUSTER
        <input required value={venueTarget} onChange={e=>setVenueTarget(e.target.value)} placeholder="e.g. South Delhi Banquets & Aerocity"/>
      </label>

      <div style={{background:'#eef1e6',padding:'12px',borderRadius:'4px',margin:'14px 0',fontSize:'11px',color:'#4f5945'}}>
        <b>Estimated Budget (at ₹50/carton):</b> {money(volume * 50)} <br/>
        Includes contract filling, 4-side packaging artwork, QR landing page, and venue dispatch.
      </div>

      <button className="btn btn-dark btn-lg" type="submit" style={{width:'100%'}}>Create campaign in pipeline <ArrowUpRight/></button>
    </form>
  </div>;
}

const pageDetails:Record<string,{kicker:string;title:string;desc:string;metrics:[string,string,string][];items:string[]}>={
 'Creative studio':{kicker:'CREATIVE & APPROVALS',title:'Make the moment yours.',desc:'A shared space for campaign artwork, packaging previews and approval rounds.',metrics:[['Awaiting review','2','Artwork items'],['Approved','6','This quarter'],['Revisions','1','Open round']],items:['Front panel artwork','Back panel & mandatory declarations','QR destination and campaign landing page']},
 'Reports':{kicker:'MEASUREMENT',title:'The story behind the numbers.',desc:'Campaign delivery and engagement reporting will appear here once event tracking is connected.',metrics:[['Units distributed','12,000','Evidenced'],['Estimated reach','8,400','Verified scans'],['QR scans','1,420','Recorded interactions']],items:['Distribution by venue and date','QR scans and landing-page engagement','Campaign completion report']},
 'Billing':{kicker:'FINANCE',title:'Clear numbers. No surprises.',desc:'Review sponsor commitments, invoices and payment milestones.',metrics:[['Campaign value','₹6.0L','Current runs'],['Advance received','₹3.0L','Secured'],['Balance due','₹3.0L','Milestone 2']],items:['Invoice PP-INV-026 · Draft','Campaign advance · Due before production','Final reconciliation · On campaign close']},
 'Team':{kicker:'PEOPLE & ACCESS',title:'Good work takes a team.',desc:'Manage workspace members and their access levels.',metrics:[['Workspace members','4','Active'],['Pending invites','1','In review'],['Access roles','3','Admin, editor, viewer']],items:['Workspace owner · Admin','Campaign manager · Editor','Finance contact · Viewer']},
 'Advertiser CRM':{kicker:'PARTNER RELATIONSHIPS',title:'Good partnerships start here.',desc:'A pipeline of prospective advertisers, active partners and follow-ups.',metrics:[['Active advertisers','8','In pipeline'],['Qualified leads','14','Verified'],['Follow-ups due','5','This week']],items:['Mango People · Active partner','House of Gul · Proposal shared','Playfield · Discovery scheduled']},
 'Production & stock':{kicker:'SUPPLY & FULFILMENT',title:'From approved brief to packed units.',desc:'Track manufacturing partners, batch readiness, stock and dispatches.',metrics:[['Planned units','45,000','Across open campaigns'],['In production','12,000','Running lot'],['Dispatch ready','8,000','Pre-cleared']],items:['Confirm approved packaging artwork','Record supplier batch and quality documents','Release dispatch only after QC and compliance sign-off']},
 'Venue network':{kicker:'DISTRIBUTION',title:'Meet people where they gather.',desc:'Coordinate event, campus, corporate and community distribution partners.',metrics:[['Venue partners','36','Affiliated'],['City clusters','4','Active'],['Upcoming activations','7','Scheduled']],items:['Delhi NCR · 16 partners','Chandigarh · 8 partners','Jaipur · 6 partners']},
 'Finance':{kicker:'FINANCIAL CONTROL',title:'Know every rupee in motion.',desc:'Track campaign commitments, supplier costs, receivables and contribution.',metrics:[['Sponsor value','₹18.4L','Contracted'],['Production payable','₹7.8L','Committed'],['Receivables','₹4.2L','In cycle']],items:['Reconcile sponsor advances before production','Match supplier bills to accepted batches','Close campaign costs after delivery proof']},
 'Compliance':{kicker:'QUALITY & COMPLIANCE',title:'Safe water. Responsible campaigns.',desc:'A release checklist for product, packaging, claims and campaign data handling.',metrics:[['Open checks','4','Under audit'],['Approved items','8','Verified'],['Release holds','1','Awaiting test report']],items:['Verify manufacturer and applicable FSSAI licences','Approve product classification, packaging and label declarations','Document batch testing, traceability and tamper-evidence controls','Review QR landing pages, privacy notices and advertising claims']},
 'Users & roles':{kicker:'ACCESS CONTROL',title:'The right access for the right people.',desc:'A role-based access model for the operations team and partners.',metrics:[['Active users','12','Active'],['Roles','4','RBAC configured'],['Invitations','2','Pending']],items:['Platform administrator · Full access','Operations manager · Campaign and supply access','Finance manager · Billing and reconciliation','Brand partner · Own campaigns and reports only']}
};

function GenericPage({page,notify,openNew}:{page:string;notify:(v:string)=>void;openNew:()=>void}){
  const d=pageDetails[page]||pageDetails.Reports;
  return <><div className="page-heading"><div><div className="portal-eyebrow">{d.kicker}</div><h1>{d.title}</h1><p>{d.desc}</p></div><button className="btn btn-dark" onClick={openNew}><Plus size={16}/>{page==='Team'||page==='Users & roles'?'Invite team':page==='Venue network'?'Add partner':'Add new'}</button></div><div className="stat-grid">{d.metrics.map(([label,value,delta],i)=><Stat key={label} label={label} value={value} delta={delta} icon={[Target,Users,BarChart3][i]}/>)}</div><section className="panel detail-panel"><div className="panel-heading"><div><span className="panel-kicker">WORKSPACE CHECKLIST</span><h2>{page==='Compliance'?'Release gates':page==='Production & stock'?'Next in the workflow':'Recent activity & next steps'}</h2></div><span className="live-indicator">LIVE PIPELINE</span></div><div className="check-list">{d.items.map((item,i)=><div className="check-row" key={item}><span className={'check-dot '+(i===0?'done':'')}>{i===0?<Check size={13}/>:i+1}</span><span>{item}</span><button onClick={()=>notify('Workflow node active.')}><ArrowUpRight size={16}/></button></div>)}</div></section><div className="notice wide-notice"><ShieldCheck size={18}/><div><b>Cortex QA Pipeline Active</b><p>This module tracks campaign lifecycles, artwork gates, and distribution metrics aligned with the Venture Charter.</p></div></div></>
}

function ContactModal({close,notify}:{close:()=>void;notify:(v:string)=>void}){
  const [kind,setKind]=useState('Brand');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [company,setCompany]=useState('');
  const [message,setMessage]=useState('');
  return <div className="modal-backdrop" onClick={close}><form className="modal" onClick={e=>e.stopPropagation()} onSubmit={e=>{e.preventDefault();notify('Enquiry submitted successfully. Our partnership team will follow up within 24 hours.');close();}}><button type="button" className="modal-close" onClick={close}><X/></button><div className="portal-eyebrow">LET’S TALK PAANI POP</div><h2>Let’s make a<br/><em>good connection.</em></h2><p>Tell us a little about what you have in mind.</p><label>I AM A<select value={kind} onChange={e=>setKind(e.target.value)}><option>Brand</option><option>Venue / event partner</option><option>Manufacturing partner</option><option>Something else</option></select></label><div className="form-two"><label>YOUR NAME<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/></label><label>WORK EMAIL<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com"/></label></div><label>COMPANY / ORGANISATION<input value={company} onChange={e=>setCompany(e.target.value)} placeholder="Your organisation"/></label><label>A LITTLE MORE<textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="What are you thinking?"/></label><button className="btn btn-dark btn-lg" type="submit">Send an enquiry <ArrowUpRight/></button><small className="form-note">Partnership submissions are processed by HASHLILLY Hub under PAANI POP venture governance.</small></form></div>
}
