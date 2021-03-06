import { LeftOutlined } from "@ant-design/icons";
import { Col } from "antd";
import React from "react";
import { useStore } from "../../store/useStore";
import { COLOR, FONT } from "../../utils/constants/css";
import { Btn, Text } from "../base";
import {
  ClosePreview,
  ContainerBig,
  HeaderButtons,
  HearderButton,
  Img,
  ListImg,
  PreviewButtons,
  PreviewContainer,
  PreviewDetail,
  PreviewHeader,
  Tabs,
  Taolaohere,
} from "./Elements";

export default function ItemPreview() {
  const previewState = useStore((state) => state.previewState);
  const togglePreview = useStore((state) => state.togglePreview);
  const previewObj = useStore((state) => state.previewObj);

  return (
    <ContainerBig previewState={previewState}>
      <PreviewContainer>
        <PreviewHeader>
          <ClosePreview onClick={togglePreview}>
            <LeftOutlined style={{ fontSize: "1.2rem" }} />
          </ClosePreview>
        </PreviewHeader>
        <PreviewDetail>
          <Img width="450px" height="290px"></Img>
          <ListImg>
            <Col span="5">
              <Img width="400px" height="80px"></Img>
            </Col>
            <Col span="5">
              <Img width="400px" height="80px"></Img>
            </Col>
            <Col span="5">
              <Img width="400px" height="80px"></Img>
            </Col>
            <Col span="5">
              <Img width="400px" height="80px"></Img>
            </Col>
          </ListImg>
          <Text fontSize={FONT.xlarge}>
            {previewObj.title ? previewObj.title : "None"}
          </Text>
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
