import { Request, Response, Router } from 'express';
import got from 'got';

export class ProxyRouter {
    public static init(router: Router): Router {
        router.get('/video/:url', ProxyRouter.proxy);
        router.get('/', ProxyRouter.hello);
        return router;
    }

    private static hello(req: Request, res: Response): void {
        res.send('Hello from ProxyRouter');
    }

    private static async proxy(req: Request, res: Response): Promise<Response> {
        const url = decodeURIComponent(req.params.url);

        const range = req.headers.range;
        if (!range)
            return res.status(400).send('Requires Range header');

        const CHUNK_SIZE = 10 ** 6; // 1MB

        const start = Number(range?.split('-')[0].replace(/\D/g, ''));
        const end = start + CHUNK_SIZE;

        got.stream(url, { headers: { range: `bytes=${start}-${end}` } }).pipe(res);

        return res;
    }
}
