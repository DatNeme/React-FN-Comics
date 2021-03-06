import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from 'react-router-dom';
import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

export default function Item({ id, price, image, stock }) {
  return (
    <>
      <ProductContainer>
      <Circle />
            <Image src={image} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>${price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "help"}}>
                    <Link to={`/product/${id}`}><InfoOutlined />Detalles</Link>
                </Icon>
            </Info>
    </ProductContainer>
    </>  
  );
}
