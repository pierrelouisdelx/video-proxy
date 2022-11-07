import { Request, Response, Router } from 'express';
import axios from 'axios';

export class ProxyRouter {
  public static init(router: Router): Router {
    router.get('/video/:url', ProxyRouter.proxy);
    router.get('/', ProxyRouter.hello);
    return router;
  }

  private static hello(req: Request, res: Response): void {
    res.send('Hello from ProxyRouter');
  }

  private static proxy(req: Request, res: Response): Promise<Response> {
    const url = decodeURIComponent(req.params.url);

    axios
      .get(url, {
        responseType: 'stream'
      })
      .then((stream) => {
        res.writeHead(stream.status, stream.headers);
        stream.data.pipe(res);
      })
      .catch((err) => {
        console.error(err.message);
        res.send(err);
      });

    return Promise.resolve(res);
  }
}
