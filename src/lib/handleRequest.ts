import { RequestMethod } from '../types';

type RequestOptions<T>  ={
	url: string;
	method: RequestMethod;
	body?: T;
}

type ApiResponse<T> = {
	data: T;
	status: number;
}

async function handleRequest<T>(options: RequestOptions<T>): Promise<T> {
	const { url, method, body } = options;
	
	return new Promise((resolve, reject) => {
		fetch(url, {
			method,
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((response) => {
			return response.json();
		})
		.then((data: ApiResponse<T>) => resolve(data.data))
		.catch((error) => reject(error));
	});
}

export default handleRequest;
