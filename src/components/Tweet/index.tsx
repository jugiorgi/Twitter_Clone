import React from 'react';

import { 
  Container, 
  Retweeted, 
  Body, 
  Avatar, 
  Content, 
  Header, 
  Dot, 
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
 } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Eliza Taylor</strong>
            <span>@elizajane</span>
            <Dot />
            <time>19 de nov</time>
          </Header>

          <Description>Brazil, I love you all 🧡💜</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              1.541.541
            </Status>
            <Status>
              <RetweetIcon />
              2.512.584
            </Status>
            <Status>
              <LikeIcon />
              8.165.156
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;