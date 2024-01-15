import { IsOptional } from "class-validator";

export class ProductDto {
    @IsOptional()
    name: string;

    @IsOptional()
    stock: number ;

    @IsOptional()
    price: number;
}