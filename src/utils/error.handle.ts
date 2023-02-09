import type { Response } from 'express';

const handleHttp = (
  res: Response,
  txtError: string,
  errorRaw?: any,
  statusCode = 500
): Response => {
  console.error(errorRaw);

  return res
    .status(statusCode)
    .send({ ok: false, message: txtError, error: errorRaw });
};

export { handleHttp };
