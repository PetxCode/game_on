import React from "react";
import styled from "styled-components";

const HeaderNav = ({ clr }) => {
  return (
    <Container
      style={{
        backgroundColor: clr,
      }}
    >
      <Logo src="/images/8.png" />
      <Wrapper>
        <a>
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" />
          <span>series</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" />
          <span>movies</span>
        </a>

        <a>
          <img src="/images/search-icon.svg" />
          <span>search</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" />
          <span>original</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>watchlist</span>
        </a>
      </Wrapper>

      <Profile>
        <img src="/images/images.jpg" />
        <span>Peter</span>
      </Profile>
    </Container>
  );
};

export default HeaderNav;

const Container = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: #090b13; */
  /* background-color: green; */
  display: flex;
  align-items: center;
  position: fixed;
`;

const Profile = styled.div`
  width: 50px;
  height: 70px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 28px;
    border: 4px solid white;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.2px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    margin-right: 15px;

    img {
      width: 20px;
      height: 20px;
      object-fit: contain;
      margin-left: 10px;
      margin-right: 5px;
      opacity: 0.6;
    }

    span {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      position: relative;
      opacity: 0.6;

      &:after {
        content: "";
        height: 2px;
        background: white;
        width: 100%;
        position: absolute;
        top: 18px;
        left: 0;
        right: 0;
        bottom: 0;
        transform: scaleX(1);
        opacity: 0;
        transition: all 350ms;
        transform-origin: center left;
      }
    }

    &:hover {
      cursor: pointer;
      img {
        opacity: 1;
      }
      span {
        opacity: 1;
      }

      span:after {
        opacity: 1;
        transform: scaleX(1.06);
      }
    }
  }
`;
