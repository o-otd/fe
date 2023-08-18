import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SwiperSlide, Swiper } from 'swiper/react';
import { ReactComponent as SuggestionLinkSvg } from '@svg/suggestion-link-btn.svg';
import { Link } from 'react-router-dom';
import useCurrentCategory from 'hooks/useCurrentCategory';
import { IMainProps } from 'types/Home/Today';
import { BottomFilter, Filters, LookTabs } from 'components/Common';

function Main({ categories, baseUrl }: IMainProps) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory, category] = useCurrentCategory();
  const navigation = useNavigate();

  const onClickCategory = (type: string) => {
    if (currentCategory === type) {
      navigation(`/${baseUrl}`);
      setCurrentCategory(undefined);
    } else {
      navigation(`/${baseUrl}?category=${type}`);
      setCurrentCategory(type);
    }
  };

  return (
    <>
      <main>
        <LookTabs />

        <section>
          <SuggestionCategory
            slideToClickedSlide={true}
            spaceBetween={4}
            slidesPerView={'auto'}
            speed={700}
          >
            <ul>
              {categories.map((categoryItem) => (
                <SwiperSlide
                  key={categoryItem.id}
                  onClick={() => onClickCategory(categoryItem.type)}
                >
                  <Category
                    selected={category === categoryItem.type ? true : false}
                  >
                    {categoryItem.name}
                  </Category>
                </SwiperSlide>
              ))}
            </ul>
          </SuggestionCategory>

          <Filters setIsFilterOpen={setIsFilterOpen} />
        </section>

        <Looks>
          <h2>
            <strong>LOOK</strong>’S
          </h2>
          <LooksLists>
            <LooksList>
              <LookListHover>
                <LooksListText>
                  2022
                  <br />
                  자켓룩
                  <br />
                  너무 좋아
                  <br />
                  아주 좋아
                </LooksListText>
                <LooksListLink to={'/'}>
                  <SuggestionLinkSvg />
                </LooksListLink>
              </LookListHover>
            </LooksList>
            <LooksList>
              <div></div>
            </LooksList>
            <LooksList>
              <div></div>
            </LooksList>
            <LooksList>
              <div></div>
            </LooksList>
            <LooksList>
              <div></div>
            </LooksList>
            <LooksList>
              <div></div>
            </LooksList>
          </LooksLists>
        </Looks>
      </main>

      {isFilterOpen && <BottomFilter setIsFilterOpen={setIsFilterOpen} />}
    </>
  );
}

export default Main;

const SuggestionCategory = styled(Swiper)`
  & div {
    & div {
      width: 262px;
      height: 84px;
      display: flex;
      align-items: flex-end;
    }
  }
`;

const Category = styled.div<{ selected: boolean }>`
  width: 262px;
  height: 84px;
  color: ${(props) =>
    props.selected ? props.theme.colors.gray1 : props.theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius20};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.main : props.theme.colors.gray4};

  font-size: ${({ selected }) => (selected ? '42px' : '14px')};
  font-weight: ${({ selected }) => (selected ? '400' : '600')};
  padding: 11px 16px;
  display: flex;
  justify-content: ${({ selected }) => (selected ? 'center' : 'flex-start')};
  align-items: ${({ selected }) => (selected ? 'center' : 'flex-end')};
`;

const Looks = styled.section`
  & h2 {
    font-size: 34px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
    margin: 32px 0;
    margin-left: 16px;

    & strong {
      font-weight: 700;
    }
  }
`;

const LooksLists = styled.ul`
  display: grid;
  grid-template-columns: 185px 185px;
  grid-gap: 4px 4px;
`;

const LooksList = styled.li`
  width: 185px;
  height: 276px;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  background-color: ${({ theme }) => theme.colors.gray5};
  overflow: hidden;
  &:hover {
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const LooksListText = styled.div`
  text-decoration: underline;
  font-size: 27px;
  font-weight: 800;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 33px;
`;

const LooksListLink = styled(Link)`
  display: flex;
  justify-content: center;

  & svg {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray1};
  }
`;

const LookListHover = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.gray1};
  width: 100%;
  height: 100%;
`;
