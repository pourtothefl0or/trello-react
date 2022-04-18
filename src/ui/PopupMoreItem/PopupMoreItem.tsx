import React from 'react';
import { StyledPopupMoreItem } from './styles';

interface PopupMoreItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PopupMoreItem: React.FC<PopupMoreItemProps> = ({ children, ...props }) => {
  return (
    <li>
      <StyledPopupMoreItem {...props}>{children}</StyledPopupMoreItem>
    </li>
  )
}

export default PopupMoreItem;
