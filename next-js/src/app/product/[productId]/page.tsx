export const metadata = {
  title: "PLP",
  description: "Product listing page",
};

const Product = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return <div>ProductId - {productId}</div>;
};

export default Product;
