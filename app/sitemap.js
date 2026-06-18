import { products } from '../data/products';
import { site } from '../data/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date();
  const staticPages = ['', '/cart/', '/order/'].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.6,
  }));

  const productPages = products.map((product) => ({
    url: `${site.url}/products/${product.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
