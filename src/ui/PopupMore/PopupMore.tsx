import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import iconMore from '../../assets/images/icons/more.svg';
import iconEdit from '../../assets/images/icons/edit.svg';
import iconDelete from '../../assets/images/icons/delete.svg';

const PopupMore = ({...props}: any) => {
  const [popup, handlerPopup] = useState(false);

  return (
    <StyledPopumMore className={props.className}>
      <PopupMoreInner>
        <CardMore onClick={() => handlerPopup(!popup)}>
          <img src={iconMore} alt="Button more" />
        </CardMore>
        <Settings className={popup ? "is-open" : ""}>

            {
              props.editPopupClick &&
                <SettingsItem>
                  <SettingsText
                    className="button-reset settings--edit"
                    onClick={() => {
                      props.editPopupClick();
                      handlerPopup(!popup);
                    }}
                  >Edit</SettingsText>
                </SettingsItem>
            }
            {
              props.deletePopupClick &&
                <SettingsItem>
                  <SettingsText
                  className="button-reset settings--delete"
                    onClick={() => {
                      props.deletePopupClick();
                      handlerPopup(!popup);
                    }}
                  >Delete</SettingsText>
                </SettingsItem>
            }
        </Settings>
      </PopupMoreInner>
    </StyledPopumMore>
  );
};

const StyledPopumMore = styled.div``;

const PopupMoreInner = styled.div`
  position: relative;
`;

const CardMore = styled.button.attrs({
  className: 'button-reset'
})`
  width: 15px;
  height: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Settings = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 5;
  border-radius: ${PRIMARY.border};
  padding: 10px;
  background-color: ${COLORS.alabaster};
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25);
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }
`;

const SettingsItem = styled.li``;

const SettingsText = styled.button`
  position: relative;
  margin: 0;
  padding: 5px 0 5px 20px;
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: ${COLORS.black};
  background-size: 15px 15px;
  background-position: left center;
  background-repeat: no-repeat;

  &.settings {
    &--edit {
      background-image: url(${iconEdit});
    }

    &--delete {
      background-image: url(${iconDelete});
    }
  }
`;

export default PopupMore;
