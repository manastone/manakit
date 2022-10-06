import { ElementHTMLDefaultType_Extended, ElementActionOnClikType } from '../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  opacity?: number | string;
  zIndex?: number | string;
  value?: boolean;
  isClose?: any;
}

export interface OverlayType extends ModuleCustomType, ElementHTMLDefaultType_Extended, ElementActionOnClikType {}
