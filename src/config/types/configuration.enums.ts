// тут мы указали допустимые значения для типа окружения, чтобы для локальной разработки устанавливать значение local
// для стенда разработчика - development и т.д.
export enum Environment {
  Local = 'local',
  Development = 'development',
  Test = 'test',
  Preprod = 'preprod',
  Production = 'production',
}