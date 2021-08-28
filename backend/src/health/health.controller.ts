import { Controller, Head, HttpCode } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Head()
  @HttpCode(204)
  check() {
    return;
  }
}
