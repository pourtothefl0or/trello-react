import React, { ButtonHTMLAttributes, FC } from 'react';
import { StyledPopupMoreItem } from './styles';

interface PopupMoreItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PopupMoreItem: FC<PopupMoreItemProps> = (props) => {
  return (
    <li>
      <StyledPopupMoreItem {...props}>{props.children}</StyledPopupMoreItem>
    </li>
  )
}

export default PopupMoreItem;
