import {
  BadRequestException,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';

export function mongooseErrorHandler(error: any): HttpException {
  if (
    (error.name === 'MongoError' && error.code === 11000) ||
    error.name === 'ValidationError' ||
    error.name === 'CastError'
  ) {
    throw new BadRequestException(error.message);
  } else {
    throw new InternalServerErrorException(error.message);
  }
}
