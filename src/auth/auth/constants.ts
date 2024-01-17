import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

export const jwtConstants = {
  //   secret: configService.get<string>('JWT_SECRET_KEY'),
  secret: `.env.${process.env.dev}`,
};
