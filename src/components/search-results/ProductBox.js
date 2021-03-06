import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faStar, faComment, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProductBox(props) {
  const product = props.product;

  return (
    <Card className="no-gutters d-flex flex-row flex-sm justify-content-between" style={{ height: "100%" }}>
      <CardImg
        style={{ width: "50%", height: "100%", "object-fit": "cover" }}
        className="border-right"
        src={product.pictures[0]}
        alt="box-product-img"
      />

      <CardBody>
        <h6>
          <a href={`/product?id=${product._id}`}>{product.name}</a>
        </h6>
        <p className="py-3 font-weight-bold">
          {product._id.includes("trendyol.com") ? (
            <span>
              <img
                src="https://patronlarinensesindeyiz.org/wp-content/uploads/2019/09/t0CFAPzZ.jpg"
                alt="trendyol"
                width="18px"
                className="rounded"
              />{" "}
              <a href={product._id}>
                Trendyol <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </span>
          ) : (
            <span>
              <img
                src="https://images.hepsiburada.net/cac/content/www/erised/globalAssets/images/hepsiburada-logo-1024.png"
                alt="hepsiburada"
                width="18px"
                className="rounded border"
              />{" "}
              <a href={product._id}>
                Hepsiburada <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </span>
          )}
        </p>
        <h6>
          <FontAwesomeIcon icon={faTag} className="text-success" />{" "}
          {product.price > 0 ? (
            <span>{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })} ₺</span>
          ) : (
            "Fiyat bilgisi yok"
          )}
        </h6>
        <h6>
          <FontAwesomeIcon icon={faStar} className="text-warning" /> {product.rating.toFixed(1)}{" "}
          <small>({product.number_of_reviews} Rates)</small>
        </h6>
        <h6>
          <FontAwesomeIcon icon={faComment} className="text-info" /> {product.number_of_comments} Comment
        </h6>
      </CardBody>
    </Card>
  );
}
