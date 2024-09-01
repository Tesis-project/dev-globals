import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class ParseBodyInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        const req: any = context.switchToHttp().getRequest<Request>();

        if (req.body?.body && typeof req.body.body === 'string') {
            try {
                req.body = JSON.parse(req.body.body);
            } catch (error) {
                throw new Error('Invalid JSON format in the body field');
            }
        }

        return next.handle().pipe(
            map(data => data)
        );

    }
}