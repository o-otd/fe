import React, { useState } from 'react';
import styled from 'styled-components';
import dummyImage from '../../../styles/images/dummy-profile.png';
import { IConfirmContentCardProps } from 'types/Home/Confirm';

function ConfirmContentCard({
  user,
  content,
  startDate,
  endDate,
  remains,
}: IConfirmContentCardProps) {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);

  const onClickProfile = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    console.log('profile');
  };

  const onClickContentCard = () => {
    setIsContentOpen((prev) => !prev);
  };

  return (
    <ConfirmCard onClick={onClickContentCard}>
      <ConfirmCardInfo>
        <ConfirmCardProfile onClick={onClickProfile}>
          <CoverImage src={user.avatar ? user.avatar : dummyImage} />
        </ConfirmCardProfile>
        <div>
          <ConfirmCardNickName onClick={onClickProfile}>
            {user.name}
          </ConfirmCardNickName>
          <ConfirmCardDate>
            {remains}일 남음
            <span>
              {startDate} ~ {endDate}
            </span>
          </ConfirmCardDate>
        </div>
      </ConfirmCardInfo>

      <ConfirmCardContent $isContentOpen={isContentOpen}>
        {content}
      </ConfirmCardContent>
    </ConfirmCard>
  );
}

export default ConfirmContentCard;

const ConfirmCard = styled.div`
  padding: 22px 16px;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius30};
  cursor: pointer;
`;

const ConfirmCardInfo = styled.div`
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const ConfirmCardProfile = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius50};
  margin-right: 8px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ConfirmCardNickName = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

const ConfirmCardDate = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};

  & span {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray6};
    margin-left: 4px;
  }
`;

const ConfirmCardContent = styled.p<{ $isContentOpen: boolean }>`
  padding-top: 12px;
  overflow: hidden;
  white-space: ${({ $isContentOpen }) =>
    $isContentOpen ? 'initial' : 'nowrap'};
  text-overflow: ${({ $isContentOpen }) =>
    $isContentOpen ? 'initial' : 'ellipsis'};
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray9};
  line-height: 20px;
`;
