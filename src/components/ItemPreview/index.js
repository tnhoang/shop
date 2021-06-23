import React, { useState } from "react";
import { COLOR, FONT } from "../../constants";
import { Text } from "../Text";
import styled from "styled-components";
import { Btn, MyText } from "../baseComponents";
import { HeaderButtons, HearderButton } from "../Main";

import { HeartOutlined } from "@ant-design/icons";

export const PreviewContainer = styled.div`
  /* ${({ togglePreview }) =>
    togglePreview ? `display: none;` : `display: block;`}; */
  overflow-y: scroll;
  height: 100vh;
  padding: 30px;
  @media (min-width: 767px) {
    /* max-width: 450px; */
    /* display: grid; */
    justify-content: center;
    width: 430px;
    ${({ togglePreview }) =>
      togglePreview ? `display: none;` : `display: block;`};
  }

  @media (max-width: 766px) {
    width: 100%;

    /* ${({ togglePreview }) =>
      togglePreview ? `display: none;` : `display: block;`}; */
    position: fixed;
    /* bottom: 0; */

    ${({ togglePreview }) => (togglePreview ? `right: -100%;` : `right: 0;`)}
    /* right: 200%; */
    /* left: 0; */
    /* z-index: 9999; */
    background-color: #fff;
  }
`;
export const Img = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: silver;
  border-radius: 12px;
`;
export const ListImg = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;
export const Description = styled.div``;
export const PreviewTabs = styled.div``;
export const Tabs = styled.div`
  height: 48px;
`;
export const Taolaohere = styled.div``;
export const PreviewButtons = styled.div``;

export const HeaderPersonal = styled.div`
  display: flex;
  height: 66px;
  align-items: center;
  column-gap: 20px;
`;
export const Cart = styled.div``;
export const Favorite = styled.div``;
export const Profile = styled.div``;

export default function ItemPreview({ togglePreview, setTogglePreview }) {
  return (
    <PreviewContainer togglePreview={togglePreview}>
      <HeaderPersonal>
        <Cart>
          <HeartOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              setTogglePreview((c) => !c);
            }}
          />
        </Cart>
        <Favorite>
          <HeartOutlined style={{ fontSize: "2rem" }} />
        </Favorite>
        <Profile>
          <HeartOutlined style={{ fontSize: "2rem" }} />
        </Profile>
      </HeaderPersonal>
      <Img idth="190px" height="290px"></Img>
      <ListImg>
        <Img width="90px" height="90px"></Img>
        <Img width="90px" height="90px"></Img>
        <Img width="90px" height="90px"></Img>
        <Img width="90px" height="90px"></Img>
      </ListImg>
      <Text fontSize={FONT.large}>Lorem ipsum dolor sit.</Text>
      <MyText type="light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
      </MyText>{" "}
      <Tabs>
        <HeaderButtons>
          <HearderButton active width="50%">
            Details
          </HearderButton>
          <HearderButton width="50%">Reviews (50)</HearderButton>
        </HeaderButtons>
      </Tabs>
      <Taolaohere>
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>{" "}
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>
        <MyText type="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          officia nisi amet, in iure tenetur dicta explicabo inventore nam vero?
        </MyText>
      </Taolaohere>
      <PreviewButtons>
        <Btn></Btn>
        <Btn>Add to cart</Btn>
      </PreviewButtons>
    </PreviewContainer>
  );
}
