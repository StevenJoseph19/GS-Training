// mockApi.ts

type Bid = {
  id: number;
  houseId: number;
  bidder: string;
  amount: number;
};

const bidsData: Bid[] = [
  { id: 1, houseId: 1, bidder: "Sonia Reading", amount: 200000 },
  { id: 2, houseId: 1, bidder: "Dick Johnson", amount: 202400 },
  { id: 3, houseId: 2, bidder: "Mohammed Vahls", amount: 302400 },
  { id: 4, houseId: 2, bidder: "Jane Williams", amount: 310500 },
  { id: 5, houseId: 2, bidder: "John Kepler", amount: 315400 },
  { id: 6, houseId: 3, bidder: "Bill Mentor", amount: 201000 },
  { id: 7, houseId: 4, bidder: "Melissa Kirk", amount: 410000 },
  { id: 8, houseId: 4, bidder: "Scott Max", amount: 450000 },
  { id: 9, houseId: 4, bidder: "Christine James", amount: 470000 },
  { id: 10, houseId: 5, bidder: "Omesh Carim", amount: 450000 },
  { id: 11, houseId: 5, bidder: "Charlotte Max", amount: 150000 },
  { id: 12, houseId: 5, bidder: "Marcus Scott", amount: 170000 },
  { id: 13, houseId: 1, bidder: "Roland", amount: 203000 },
];

let nextId = 14;

// Save the original fetch in case you need it for other requests
const originalFetch = window.fetch.bind(window);

window.fetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  // Only handle string URLs
  const url = typeof input === "string" ? input : input.toString();

  // Simulate network delay
  await new Promise((res) => setTimeout(res, 300));

  // GET /api/bids/:houseId
  const match = url.match(/^\/api\/bids\/(\d+)/);
  if (match && (!init || !init.method || init.method === "GET")) {
    const houseId = Number(match[1]);
    const bids = bidsData.filter((b) => b.houseId === houseId);
    return new Response(JSON.stringify(bids), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // POST /api/bids/:houseId
  if (match && init && init.method === "POST") {
    const body = init.body ? JSON.parse(init.body as string) : {};
    const bid: Bid = {
      ...body,
      id: nextId++,
    };
    bidsData.push(bid);
    return new Response(JSON.stringify(bid), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }

  // fallback to original fetch for other requests
  return originalFetch(input, init);
};

export {}; // 👈 This marks the file as a module
