export type Status = 'Planning' | 'In review' | 'Live' | 'Completed';
export type Campaign = {
  id: string;
  name: string;
  brand: string;
  format: string;
  edition: 'Her' | 'His' | 'Everyone' | 'Special';
  volume: number;
  status: Status;
  start: string;
  end: string;
  budget: number;
  reach: number;
  venueTarget: string;
};

export const initialCampaigns: Campaign[] = [
  {id:'PP-026',name:'Campus Cooldown',brand:'Mango People',format:'Campus sampling',edition:'Everyone',volume:12000,status:'Live',start:'12 Nov 2026',end:'28 Nov 2026',budget:600000,reach:8400,venueTarget:'North Campus Hubs'},
  {id:'PP-025',name:'The Wedding Edit',brand:'House of Gul',format:'Wedding distribution',edition:'Her',volume:8000,status:'In review',start:'05 Dec 2026',end:'20 Dec 2026',budget:420000,reach:0,venueTarget:'Delhi NCR Banquet Halls'},
  {id:'PP-024',name:'Good Game Hydration',brand:'Playfield',format:'Sports events',edition:'His',volume:20000,status:'Planning',start:'10 Jan 2027',end:'31 Jan 2027',budget:950000,reach:0,venueTarget:'Corporate Sports Arenas'},
  {id:'PP-023',name:'Office Hours',brand:'Workday Co.',format:'Corporate',edition:'Everyone',volume:5000,status:'Completed',start:'01 Oct 2026',end:'15 Oct 2026',budget:250000,reach:5100,venueTarget:'Cyber City Tech Parks'},
  {id:'PP-022',name:'Metro Express Surge',brand:'Metro Connect',format:'Transit activation',edition:'Special',volume:15000,status:'Planning',start:'15 Feb 2027',end:'05 Mar 2027',budget:750000,reach:0,venueTarget:'Central Metro Interchanges'}
];

export const money = (n: number) =>
  new Intl.NumberFormat('en-IN', {style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
