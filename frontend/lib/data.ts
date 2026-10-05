export type Service={id?:number;title:string;slug:string;short_description:string;description?:string};
export type ServiceVisual={src:string;alt:string;position:string;heroScale:number};
export const services:Service[]=[
{title:'Coffee Farm Planning & Establishment',slug:'coffee-farm-planning',short_description:'Plan the establishment or improvement of a Robusta or Arabica farm around production goals, investment and long-term viability.'},
{title:'Coffee Product Development, Branding & Marketing Advisory',slug:'product-development-branding',short_description:'Shape coffee products for market with clear positioning, brand direction and a practical route to customers.'},
{title:'Value Chain-Based Capacity Building for Coffee SMEs',slug:'capacity-building',short_description:'Build the management, financial and market capabilities coffee SMEs need to operate consistently and grow.'},
{title:'Bankable Business Plan Development for SMEs',slug:'business-plan-development',short_description:'Turn an agribusiness idea into a decision-ready plan with clear operating assumptions and a credible funding case.'},
{title:'Commodity Trade Advisory for SMEs',slug:'commodity-trade-advisory',short_description:'Assess commodity opportunities with a clearer view of market conditions, quality requirements and trade risk.'}
];
export const audiences=['Coffee farmers & farm investors','Coffee SMEs','Agribusiness entrepreneurs','Commodity traders','Food & agricultural enterprises','Start-ups & growing SMEs','Cooperatives & producer groups','Development programmes & organisations','Businesses seeking financing or investment'];
export const serviceVisuals:Record<string,ServiceVisual>={
  'coffee-farm-planning':{src:'/images/photography/coffee-harvest.webp',alt:'Coffee farmer selectively harvesting ripe cherries',position:'center center',heroScale:1.08},
  'product-development-branding':{src:'/images/photography/product-branding.webp',alt:'Coffee product development and market positioning session',position:'center center',heroScale:1.08},
  'capacity-building':{src:'/images/photography/farmer-training.webp',alt:'Practical coffee value-chain capacity building session',position:'center center',heroScale:1.08},
  'business-plan-development':{src:'/images/photography/business-advisory.webp',alt:'Agribusiness advisory and business planning meeting',position:'center center',heroScale:1.08},
  'commodity-trade-advisory':{src:'/images/photography/commodity-warehouse.webp',alt:'Coffee commodity warehouse and trade operations',position:'center center',heroScale:1.08},
};
export const API=process.env.NEXT_PUBLIC_API_URL||'http://127.0.0.1:8000/api';
export async function getServices(){try{const r=await fetch(`${API}/services/`,{next:{revalidate:60}});if(r.ok)return await r.json()}catch{}return services}
