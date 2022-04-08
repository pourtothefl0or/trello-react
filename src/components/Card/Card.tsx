import React from 'react';
import styled from 'styled-components';
import { PopupMore } from '../../ui';
import { COLORS, PRIMARY } from '../../constants';
import iconComments from '../../assets/images/icons/comments.svg';

const Card = ({...props}: any) => {
  return (
    <StyledCard>
      <CardMore
        editPopupClick={props.editPopupClick}
        deletePopupClick={props.deletePopupClick}
      />
      <CardText>
        <CardTitle>{props.title}</CardTitle>
        <CardDescr>{props.description}</CardDescr>
      </CardText>
      <CardComments onClick={props.commentsButtonClick}>{props.commentsSum} comments</CardComments>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: ${PRIMARY.border};
  padding: 35px 15px 25px;
  background-color: ${COLORS.alabaster};
`;

const CardMore = styled(PopupMore)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const CardText = styled.div`
  margin-bottom: 25px;
`;

const CardTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 16px;
  color: ${COLORS.black};
`;

const CardDescr = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS.topaz};
`;

const CardComments = styled.button.attrs({
  className: 'button-reset'
})`
  align-self: end;
  margin: 0;
  padding-left: 20px;
  font-size: 12px;
  color: ${COLORS.topaz};
  background-image: url(${iconComments});
  background-size: 15px 15px;
  background-position: left center;
  background-repeat: no-repeat;
`;

export default Card;
