export type Status = 'Planning' | 'In review' | 'Live' | 'Completed';
export type Campaign = { id:string; name:string; brand:string; format:string; volume:number; status:Status; start:string; end:string; budget:number; reach:number };
export const campaigns: Campaign[] = [
 {id:'PP-026',name:'Campus Cooldown',brand:'Mango People',format:'Campus sampling',volume:12000,status:'Live',start:'12 Nov 2026',end:'28 Nov 2026',budget:600000,reach:8400},
 {id:'PP-025',name:'The Wedding Edit',brand:'House of Gul',format:'Wedding distribution',volume:8000,status:'In review',start:'05 Dec 2026',end:'20 Dec 2026',budget:420000,reach:0},
 {id:'PP-024',name:'Good Game Hydration',brand:'Playfield',format:'Sports events',volume:20000,status:'Planning',start:'10 Jan 2027',end:'31 Jan 2027',budget:950000,reach:0},
 {id:'PP-023',name:'Office Hours',brand:'Workday Co.',format:'Corporate',volume:5000,status:'Completed',start:'01 Oct 2026',end:'15 Oct 2026',budget:250000,reach:5100}
];
export const money=(n:number)=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
