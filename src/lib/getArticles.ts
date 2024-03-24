import { getCRM } from '@/lib/getCRM';

export function getArticles() {
	return getCRM({
		url: '/articles',
		method: 'GET',
	});
}

export function getArticle(id: string) {
	return getCRM({
		url: `/articles/${id}`,
		method: 'GET',
	});
}
