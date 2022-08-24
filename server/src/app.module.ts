import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyService } from './spotify/spotify.service';
import { SpotifyController } from './spotify/spotify.controller';
import { HttpModule } from '@nestjs/axios';

import { HealthCheckController } from './health-check/health-check.controller';

@Module({
  imports: [HttpModule],
  controllers: [
    AppController,
    SpotifyController,
    HealthCheckController,
  ],
  providers: [AppService,  SpotifyService],
})
export class AppModule {}
