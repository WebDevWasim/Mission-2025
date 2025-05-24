import { Metadata } from "next";

type ReviewProps = {
  params: Promise<{ productId: string; reviewId: string }>;
};

const Review = async ({ params }: ReviewProps) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      Product Id - {productId} & Review Id - {reviewId}
    </div>
  );
};

export const generateMetadata = async ({
  params,
}: ReviewProps): Promise<Metadata> => {
  const { reviewId } = await params;

  return {
    title: `Review ${reviewId}`,
  };
};
export default Review;
