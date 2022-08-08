import { Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("persons")
export class Persons{
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  amount: number;
}
