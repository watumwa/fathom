# Fathom website — UI/UX and photography direction

## Changes included in this revision
- Added a stronger editorial image story to About: field, product and processing imagery now work together instead of leaving the page text-heavy.
- Added a premium photographic value-chain band to Who We Serve.
- Expanded Insights from one item into a professional three-card editorial grid plus enquiry CTA.
- Added responsive behavior and subtle image interaction for the new sections.
- Preserved the Fathom forest green, coffee brown, cream and gold visual system.
- Removed generated/development weight from the delivery (`.next`, `node_modules`, `.git`). These should not be distributed in a project ZIP.

## Photography system to use across the final production site
Use real Fathom/client photography wherever possible. Prioritize authentic Uganda/East Africa imagery over generic stock photography.

1. Home hero — wide, high-impact coffee harvest or field image with people present naturally.
2. About — advisor + farmer/client interaction, plus farm/product/processing supporting images.
3. Coffee Farm Planning — healthy coffee field, seedlings, farm layout or agronomist field visit.
4. Product Development & Branding — packaged coffee, cup/cupping, roasting/product presentation.
5. Capacity Building — workshop, cooperative meeting, training session, team around a table.
6. Business Plan Development — advisor/client meeting, notebook/laptop/financial planning context.
7. Commodity Trade — bagged green coffee, warehouse, grading, loading/logistics or export handling.
8. Who We Serve — mix of farmer, SME/processor, cooperative and trade imagery.
9. Insights — each article should have its own editorial image, not a repeated hero image.
10. Contact — human advisory/client image; avoid a generic office stock photo.

## Production photo standards
- Hero/source images: ideally 2000–2600 px wide.
- Card images: 1200–1600 px wide is enough.
- Prefer WebP/AVIF; target roughly 150–350 KB for cards and 350–650 KB for large heroes after compression.
- Keep a consistent warm, natural grade: green foliage, coffee/chocolate tones, realistic skin tones, restrained saturation.
- Avoid visible stock watermarks, staged handshake photos, fake African-farm clichés, and unrelated crops.
- Every meaningful image needs accurate alt text; decorative images should use empty alt text.

## Next high-value improvements
- Replace placeholder/reused images with a unique approved photo set (10–15 photos).
- Add real case studies / projects and measurable outcomes once the company provides them.
- Make Insights database-driven from Django rather than static frontend content.
- Add client/partner logos only when permission and actual relationships are confirmed.
- Add enquiry analytics and conversion events (contact submit, WhatsApp, call, service CTA).
- Add a polished custom 404, loading states and API error states across dynamic content.
- Run Lighthouse after deployment and tune LCP/CLS, image sizes and font loading.
- Add privacy/terms pages if analytics or customer data collection is used in production.
