import { useState, useEffect } from "react";
import useGetRequest from "./useGetRequest";
import { Bid } from "../types";

const useBids = (houseId: number) => {
  const [bids, setBids] = useState<Bid[]>([]);
  const { get, loadingState } = useGetRequest(`/api/bids/${houseId}`);

  useEffect(() => {
    const fetchBids = async () => {
      const bids = await get();
      setBids(bids);
    };
    fetchBids();
  }, [get]);

  const postBid = async (bid: Omit<Bid, "id">) => {
    await fetch(`/api/bids/${bid.houseId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bid),
    });
  };

  const addBid = (bid: Omit<Bid, "id">) => {
    postBid(bid);
    setBids([...bids, { ...bid, id: Date.now() }]); // temporary ID
  };

  return { bids, loadingState, addBid };
};

export default useBids;
