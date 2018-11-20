type ModalTypes = 'basic' | 'warn' | 'primary';

export interface ModalData {
  title: string;
  message: string;
  type?: ModalTypes;
}
