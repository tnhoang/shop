import React from "react";
import { Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { COLOR, FONT } from "../../constants/css";
import { Text, Btn } from "../base";
import { HeaderButtons, HearderButton } from "../Main/Elements";

import {
  ContainerBig,
  PreviewContainer,
  PreviewHeader,
  ClosePreview,
  PreviewDetail,
  Img,
  ListImg,
  Tabs,
  Taolaohere,
  PreviewButtons,
} from "./Elements";

export default function ItemPreview({ toggleProps, previewObj }) {
  const [togglePreview, setTogglePreview] = toggleProps;
  return (
    <ContainerBig togglePreview={togglePreview}>
      <PreviewContainer>
        <PreviewHeader>
          <ClosePreview onClick={() => setTogglePreview(() => false)}>
            <LeftOutlined style={{ fontSize: "1.2rem" }} />
          </ClosePreview>
        </PreviewHeader>
        <PreviewDetail>
          <Img width="450px" height="290px"></Img>
          <ListImg>
            <Col span="6">
              <Img width="400px" height="80px"></Img>
            </Col>
            <Col span="6">
              <Img width="400px" height="80px"></Img>
            </Col>
            <Col span="6">
              <Img width="400px" height="80px"></Img>
            </Col>
            <Col span="6">
              <Img width="400px" height="80px"></Img>
            </Col>
          </ListImg>
          <Text fontSize={FONT.xlarge}>{previewObj.title}</Text>
          <Text color={COLOR.textLight}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            officia nisi amet, in iure tenetur dicta explicabo inventore nam
            vero?
          </Text>
          <PreviewButtons>
            <Btn></Btn>
            <Btn primary large>
              Add to cart
            </Btn>
          </PreviewButtons>
          <Tabs>
            <HeaderButtons>
              <HearderButton active>Details</HearderButton>
              <HearderButton>Reviews (50)</HearderButton>
            </HeaderButtons>
          </Tabs>
          <Taolaohere>
            <Text color={COLOR.textLight}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              officia nisi amet, in iure tenetur dicta explicabo inventore nam
              vero?
            </Text>
            <Text color={COLOR.textLight}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              officia nisi amet, in iure tenetur dicta explicabo inventore nam
              vero?
            </Text>
            <Text color={COLOR.textLight}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              officia nisi amet, in iure tenetur dicta explicabo inventore nam
              vero?
            </Text>
            <Text color={COLOR.textLight}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              officia nisi amet, in iure tenetur dicta explicabo inventore nam
              vero?
            </Text>
            <Text color={COLOR.textLight}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              officia nisi amet, in iure tenetur dicta explicabo inventore nam
              vero?
            </Text>
          </Taolaohere>
        </PreviewDetail>
      </PreviewContainer>
    </ContainerBig>
  );
}
