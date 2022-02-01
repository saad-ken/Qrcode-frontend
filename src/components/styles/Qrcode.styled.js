import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 100px;
  margin: 0 auto;
`;

export const Card = styled.div`
  padding: 12px;
  width: 40%;
  border-radius: 18px;
  box-shadow: 3px 8px 22px rgba(0, 0, 255, 0.2);
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

  h2 {
    font-size: 19px;
    margin-top: 14px;
    padding: 0 3.8px 0 2px;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    margin: 14px 0;
    padding: 0 3px 15px 2px;
    margin-bottom: 3px;
    font-weight: 400;
    opacity: 0.5;
  }
`;
