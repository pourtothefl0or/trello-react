import styled from 'styled-components';
import { COLORS, PRIMARY } from '../../constants';
import iconEdit from '../../assets/images/icons/edit.svg';
import iconDelete from '../../assets/images/icons/delete.svg';

export const PopupMoreInner = styled.div`
  position: relative;
`;

export const CardMore = styled.button`
  width: 20px;
  height: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Settings = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 5;
  border-radius: ${PRIMARY.border};
  padding: 10px 15px;
  background-color: ${COLORS.alabaster};
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25);
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: all ${PRIMARY.animation};
  transition-property: opacity, visibility;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }
`;

export const SettingsText = styled.button`
  position: relative;
  margin: 0;
  padding: 5px 0 5px 20px;
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: ${COLORS.black};
  background-size: 16px;
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
