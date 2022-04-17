import React, { FC, useState, useRef } from 'react';
import { useOnClickOutside } from '../../customHooks';
import iconMore from '../../assets/images/icons/more.svg';
import { PopupMoreInner, CardMore, Settings, SettingsText } from './styles';

interface popupMoreInterface {
  className?: string;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
};

const PopupMore: FC<popupMoreInterface> = ({ className, onEditClick, onDeleteClick }) => {
  const rootRef = useRef(null);

  const [popup, togglePopup] = useState(false);
  useOnClickOutside(rootRef, () => togglePopup(false));

  return (
    <div
      className={className}
      ref={rootRef}
      onClick={e => e.stopPropagation()}
    >
      <PopupMoreInner>
        <CardMore
          onClick={e => {
            e.stopPropagation();
            togglePopup(!popup);
          }}
        >
          <img src={iconMore} alt="Button more" />
        </CardMore>
        <Settings className={popup ? "is-open" : ""}>
            {
              onEditClick &&
                <li>
                  <SettingsText
                    className="button-reset settings--edit"
                    onClick={() => {
                      onEditClick();
                      togglePopup(!popup);
                    }}
                  >Edit</SettingsText>
                </li>
            }
            {
              onDeleteClick &&
                <li>
                  <SettingsText
                    className="button-reset settings--delete"
                    onClick={() => {
                      onDeleteClick();
                      togglePopup(!popup);
                    }}
                  >Delete</SettingsText>
                </li>
            }
        </Settings>
      </PopupMoreInner>
    </div>
  );
};

export default PopupMore;
