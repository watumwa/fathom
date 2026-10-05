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
  'coffee-farm-planning':{src:'/images/coffee-farm.webp',alt:'Coffee cherries ripening on a healthy coffee plant',position:'center top',heroScale:1.7},
  'product-development-branding':{src:'/images/coffee-cup.webp',alt:'Fresh espresso being prepared',position:'center top',heroScale:1.7},
  'capacity-building':{src:'/images/coffee-cherries.webp',alt:'Roasted coffee moving through processing equipment',position:'center top',heroScale:1.7},
  'business-plan-development':{src:'/images/fathom-field-advisory.png',alt:'A coffee grower and advisor reviewing a crop in the field',position:'center 43%',heroScale:1.015},
  'commodity-trade-advisory':{src:'/images/coffee-processing.webp',alt:'Roasted coffee beans being handled after processing',position:'right top',heroScale:1.7},
};
export const API=process.env.NEXT_PUBLIC_API_URL||'http://127.0.0.1:8000/api';
export async function getServices(){try{const r=await fetch(`${API}/services/`,{next:{revalidate:60}});if(r.ok)return await r.json()}catch{}return services}
