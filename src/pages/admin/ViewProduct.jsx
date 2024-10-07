import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ViewProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  const getProduct = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/products/${productId}`,
    })
      .then(({ data }) => {
        if (data.id) {
          setProductDetails(data);
        } else {
          throw Error("Product not found");
        }
      })
      .catch(() => navigate("/admin/NotFound"));
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-[-2em] bg-gray-100">
      {productDetails && (
        <>
          <Card
            shadow={false}
            className="relative w-full max-w-4xl text-center shadow-lg flex flex-row bg-white"
          >
            <CardHeader
              floated={false}
              shadow={false}
              className="w-1/2 h-64 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${productDetails?.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
            </CardHeader>

            <CardBody className="w-1/2 p-6 flex flex-col justify-center">
              <Typography variant="h4" className="mb-4 font-bold text-gray-900">
                {productDetails?.title}
              </Typography>
              <Typography variant="body1" className="mb-4 text-gray-600">
                {productDetails?.description}
              </Typography>
              <Typography variant="body2" className="mb-4 text-gray-700">
                Price:{" "}
                <span className="font-semibold">${productDetails?.price}</span>
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                Rating: {productDetails?.rating?.rate} / 5 (
                {productDetails?.rating?.count} reviews)
              </Typography>
            </CardBody>
          </Card>

          <Button onClick={() => navigate(-1)} color="amber" className="mt-6">
            BACK
          </Button>
        </>
      )}
    </div>
  );
};

export default ViewProduct;
