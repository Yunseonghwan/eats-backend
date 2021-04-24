import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";

// Respository 는 entity랑 상호작용

//@Entity 는 type ORM이 DB에 저장하게해줌
//@objecttype()자동으로 스키마를 빌드하기위해 사용하는 graphql decorator
@InputType({isAbstract: true})
@ObjectType()
@Entity()
export class Restaurant{
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;
  
    @Field(type => Boolean, { nullable: true })
    @Column({ default: true })
    @IsOptional()
    @IsBoolean()
    isVegan: boolean;
  
    @Field(type => String, { defaultValue: '강남' })
    @Column()
    @IsString()
    address: string;
  
    @Field(type => String)
    @Column()
    @IsString()
    ownersName: string;
  
    @Field(type => String)
    @Column()
    @IsString()
    categoryName: string;
}