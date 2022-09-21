import styled from "styled-components";

export const Value = styled.span`
  margin: 0 10px;
`;

export const Arrow = styled.span<{ name: string }>`
  cursor: pointer;
`;

export const Quantity = styled.div`
  width: 23%;
  padding-right: 15px;
  display: flex;
`;

export const NameAndPrice = styled.span`
  width: 23%;
  padding-right: 15px;
`;

export const RemoveButton = styled.span<{ name: string }>`
  cursor: pointer;
  padding-right: 10px;
  margin-left: 8px;
`;

export const ImageContainer = styled.div`
  width: 23%;

  img {
    width: 100%;
    height: 100%;
    padding-right: 15px;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 15px 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
`;
