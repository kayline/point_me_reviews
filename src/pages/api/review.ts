import type { NextApiRequest, NextApiResponse } from "next";
import data from '@/data/reviewsData';
import Review from "@/data/Review";

const getCurrentId = (data: Array<Review>) => {
  return data.sort((a,b) => b.id - a.id)[0].id + 1;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[]>
) {
  if (req.method === "GET") {
    // const id = req.query.id;
    // const review = data.filter(
    //   (r: Review) => r.id == id,
    // );
    // res.status(200).json(review);
    res.status(200);
  } else if (req.method === "POST") {
    const reviewData = req.body;
    reviewData['id'] = getCurrentId(data);
    // TODO: placeholder for updating the data in storage
    res.status(200).json(reviewData);
  } else {
    res.status(404);
  }
}
