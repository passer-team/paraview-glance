// global events
export const Events = {
  MSG_INFO: 'MSG_INFO',
  MSG_ERROR: 'MSG_ERROR',
  SCREENSHOT: 'SCREENSHOT',
  LAYOUT_CHANGE: 'LAYOUT_CHANGE',
};

export const Messages = {
  OPEN_ERROR: 'Specified file is currently unsupported',
  DOWNLOAD_FAILED:
    'Failed to download all specified datasets (bad URLs or adblock is on)',
};

export const Widgets = {
  CROP: 'CROP',
};

export default {
  Events,
  Messages,
  Widgets,
};
