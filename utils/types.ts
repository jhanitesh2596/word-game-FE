
interface Letter {
  id: number;
  value?: string;
  presentInWord?: boolean
  isRightPlace?: boolean
  isChecked?: boolean,
  isInOrder?:boolean,
  notPresent?:boolean
}

export type {Letter}