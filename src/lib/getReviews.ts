import { getCRM } from "@/lib/getCRM";

export function getReviews() {
  return getCRM({
	url: "/reviews",
	method: "GET",
  });
}

export function getReview(id: string) {
  return getCRM({
	url: `/reviews/${id}`,
	method: "GET",
  });
}