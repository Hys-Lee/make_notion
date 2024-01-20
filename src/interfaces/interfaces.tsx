export interface iSideSignals {
  clicked: boolean;
  hovered: boolean;
}
export interface iOnHover {
  (newSideSignals: iSideSignals): void;
}
