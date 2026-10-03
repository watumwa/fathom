export type Service={id?:number;title:string;slug:string;short_description:string;description?:string};
export const services:Service[]=[
{title:'Coffee Farm Planning & Establishment',slug:'coffee-farm-planning',short_description:'Practical advisory for entrepreneurs, farmers and investors establishing or improving coffee farms.'},
{title:'Coffee Product Development, Branding & Marketing Advisory',slug:'product-development-branding',short_description:'Transform coffee products into compelling, market-ready brands with commercially grounded strategy.'},
{title:'Value Chain-Based Capacity Building for Coffee SMEs',slug:'capacity-building',short_description:'Practical programmes designed around the real management, market and operational challenges facing coffee SMEs.'},
{title:'Bankable Business Plan Development for SMEs',slug:'business-plan-development',short_description:'Structured, realistic and commercially focused plans for decision-making, financing readiness and investment conversations.'},
{title:'Commodity Trade Advisory for SMEs',slug:'commodity-trade-advisory',short_description:'Market-aware advisory helping commodity businesses evaluate opportunities and make informed commercial decisions.'}
];
export const audiences=['Coffee farmers & farm investors','Coffee SMEs','Agribusiness entrepreneurs','Commodity traders','Food & agricultural enterprises','Start-ups & growing SMEs','Cooperatives & producer groups','Development programmes & organisations','Businesses seeking financing or investment'];
export const API=process.env.NEXT_PUBLIC_API_URL||'http://127.0.0.1:8000/api';
export async function getServices(){try{const r=await fetch(`${API}/services/`,{next:{revalidate:60}});if(r.ok)return await r.json()}catch{}return services}
