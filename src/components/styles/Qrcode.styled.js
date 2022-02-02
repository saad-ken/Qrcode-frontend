import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  top: 80px;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 120px;
  margin: 0 auto;
  @media (max-width: 500px) {
    min-width: 250px;
    width: 100%;
  }
`;

export const Card = styled.div`
  padding: 13px;
  width: 40%;
  border-radius: 18px;
  box-shadow: rgb(0 0 0 / 10%) 0 8px 16px;
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 500px) {
    min-width: 250px;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 200px;
    width: 100%;
  }
`;

export const Title = styled.div`
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.darkblue};
    font-size: 16px;
    margin-top: 14px;
    padding: 0 3.8px 0 2px;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    margin: 12px 11px;
    padding: 0 3px 20px 0px;
    margin-bottom: 3px;
    font-weight: 400;
    opacity: 0.5;
  }
`;
