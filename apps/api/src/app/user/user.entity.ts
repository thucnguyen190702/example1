import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class User{
  @ObjectIdColumn()
  id:ObjectID;

  @Column()
  name:string;

  @Column()
  lastname:string;

  @Column()
  email:string;

  @Column()
  phone:string;
}
