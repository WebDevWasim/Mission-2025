"use client";
import { useParams } from "next/navigation";

const NotFount = () => {
  const params = useParams();
  console.log(params);

  return <div>Docs Not found</div>;
};

export default NotFount;
