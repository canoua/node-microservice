// import { IsEnum, IsString } from 'class-validator'
import { IsEnum, IsString } from 'class-validator';
import { Environment } from './types/configuration.enums';

export class ApplicationConfig {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(Environment, { always: true })
  NODE_ENV: Environment;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ always: true })
  SERVICE_NAME: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ always: true })
  HTTP_HOST: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ always: true })
  HTTP_PORT: string | number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ always: true })
  HTTP_PREFIX: string | number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ always: true })
  HTTP_VERSION: string;
}
