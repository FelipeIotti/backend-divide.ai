import { IPersonsDTO } from '@modules/transactions/dtos/IPersonsDTO';
import { Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';


@Entity("transactions")
export class Transactions{
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  memberPay: string;

  @Column()
  amount: number;

  @Column()
  type: string;

  @Column()
  category: string;

  @Column()
  date: Date;

  @Column()
  persons: IPersonsDTO[];
}