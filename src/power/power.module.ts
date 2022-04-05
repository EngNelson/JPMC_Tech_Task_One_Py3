import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
// import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
