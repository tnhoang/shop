import { LeftOutlined } from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import { COLOR, FONT } from "../../constants/css";
import { Btn, Text } from "../base";
import { HeaderButtons, HearderButton } from "../Main/Elements";
import {
  ClosePreview,
  ContainerBig,
  Img,
  ListImg,
  PreviewButtons,
  PreviewContainer,
  PreviewDetail,
  PreviewHeader,
  Tabs,
  Taolaohere,
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
            <Btn primary="true" large="true">
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
