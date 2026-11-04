import { SUGGEST } from "@/shared/api/endpoints";
import type { QuoteRequestType } from "../types/quote-request.type";

export async function postQuoteRequest(data: QuoteRequestType) {
  const res = await fetch(SUGGEST, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
