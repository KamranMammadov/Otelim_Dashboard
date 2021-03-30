export class Room {
  id: number;
  room_No: string;
  canSmoke:boolean;
  haveMiniBar:boolean;
  haveWindow:boolean;
  price: number;
  roomTypeId: number;
  roomTypeName: string;
  roomVIewId: number;
  roomVIewName: string;
  capacity: string;
  phone: string;
  constructor(room) {
    {
      this.id = room.id || this.getRandomID();
      this.room_No = room.room_No || '';
      this.roomTypeName = room.roomTypeName || '';
      this.capacity = room.capacity || '';
      this.phone = room.phone || '';
      this.price = room.price || 0;
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
