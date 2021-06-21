import React from "react";
import { COLOR, FONT } from "../../constants";
import { Text } from "../Text";
import styled from "styled-components";
import { Btn, MyText } from "../baseComponents";
import { HeaderButtons, HearderButton } from "../Main";

export const PreviewContainer = styled.div`
  padding: 30px;
  display: grid;
  justify-content: center;
  width: 100%;
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

export default function ItemPreview() {
  return (
    <PreviewContainer>
      <Img width="100%" height="400px"></Img>
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
      </MyText>
      <Tabs>
        <HeaderButtons>
          <HearderButton active width="50%">
            Details
          </HearderButton>
          <HearderButton width="50%">Reviews (50)</HearderButton>
        </HeaderButtons>
      </Tabs>
      <Taolaohere>Tao lao</Taolaohere>
      <PreviewButtons>
        <Btn></Btn>
        <Btn>Add to cart</Btn>
      </PreviewButtons>
    </PreviewContainer>
  );
}
