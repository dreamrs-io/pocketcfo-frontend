
import wordpressApi from '@/api/WordpressApi';

export default async function handler(req, res) {
    const baseUrl = 'https://www.pocketcfos.com/'
    const blogs = await wordpressApi.getPosts();
    const pages = [
        { url: 'tools', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns/income-statement', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns/balance-sheet', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns/cash-flow-statement', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns/receipts', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns/invoicing-billing', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns/purchase-orders', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/tax-returns/payroll-records', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/financial-statements', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/financial-statements/tax-returns-filings', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/financial-statements/balance-statements', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/financial-statements/receipts', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/financial-statements/invoicing-billing', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/financial-statements/purchase-orders', changeFrequency: 'daily', priority: 0.7 },
        { url: 'tools/financial-statements/payroll-records', changeFrequency: 'daily', priority: 0.7 },
        
        { url: 'blogs', changeFrequency: 'daily', priority: 0.7 },
       
       
    ]


    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${baseUrl}</loc>
            <lastmod>2024-02-25T10:34:33.259Z</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
          </url>
          ${pages.map((i) => (
        `
                <url>
                <loc>${baseUrl + i.url}</loc>
                <lastmod>2024-02-25T10:34:33.259Z</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
              </url>
                `
    ))
}
        
          ${blogs.map((i) => (
        `
            <url>
                <loc>${baseUrl + 'blogs/' + i.slug}</loc>
                <lastmod>${i.date}</lastmod>
                <changefreq>never</changefreq>
                <priority>0.7</priority>
              </url>
                `
    ))
}

        </urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.write(sitemapXml);
    res.end();
}