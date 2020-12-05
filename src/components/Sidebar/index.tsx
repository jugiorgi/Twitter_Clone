import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="O que está acontecendo"
            elements={[
              <News title="Assuntos do Momento" description="#WonderBR" />,
              <News title="Assuntos do Momento" description="#WonderBR" />,
              <News title="Assuntos do Momento" description="#WonderBR" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Lindsey Morgan"
                nickname="@linzzmorgan"
              />,
              <FollowSuggestion name="Eliza Taylor" nickname="@MisElizaJane" />,
              <FollowSuggestion
                name="Danielle Rose Russell"
                nickname="@itsdanielleruss"
              />,
              <FollowSuggestion name="Kodaline" nickname="@Kodaline" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
