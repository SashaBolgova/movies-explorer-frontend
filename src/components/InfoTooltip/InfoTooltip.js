import Popup from '../Popup/Popup';
import { useEffect, useState } from 'react';

const InfoTooltip = ({
  name,
  isOpen,
  setPopupOpened,
  statusMessage
}) => {


  return (
    <Popup name="notify" isOpen={isOpen} setPopupOpened={setPopupOpened}>
      <h3 className="popup__notify-title">{statusMessage}</h3>
    </Popup>
  );
};
export default InfoTooltip;
