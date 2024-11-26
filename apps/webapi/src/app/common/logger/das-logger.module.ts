import { Module } from '@nestjs/common';
import * as path from 'path';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useFactory: winstonOptionsFactory
    }),
  ],
  exports: [WinstonModule],
})
export class DasLoggerModule {}



function winstonOptionsFactory() {
  const logDir = path.join(process.cwd(), 'logs');
  const enableFileLogging = process.env.ENABLE_FILE_LOGGING === 'true';

  const customLevels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  };

  const customColors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'grey',
  };


  winston.addColors(customColors);



  return {
    levels: customLevels,
    transports: [
      // Always add a console transport
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss-SSS' }),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike('DAS-WebAPI', {
            colors: true,
            prettyPrint: true,
            processId: true,
            appName: true,
          }),
        ),
      }),

      // Conditionally add a file transport
      ...(enableFileLogging
        ? [
          new winston.transports.File({
            filename: 'application.log',
            dirname: logDir,
            level: 'info', // Set the log level for the file
            format: winston.format.combine(
              winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss-SSS' }),
              winston.format.ms(),
              nestWinstonModuleUtilities.format.nestLike('DAS-WebAPI', {
                colors: true,
                prettyPrint: true,
                processId: true,
                appName: true,
              }),
            ),
          }),
        ]
        : []),
    ]
  };
}
