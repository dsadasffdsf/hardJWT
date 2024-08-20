export interface AlertProps {
  message: string;
  alertType: string;
}
export interface Alert {
  message: string;
  alertType: 'success' | 'error' | 'info' | 'warning' | null;
  visible?: boolean;
}
export interface AlertState {
  alertList: Alert[];
}
