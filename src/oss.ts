import * as core from '@actions/core';
import OSS from 'ali-oss';

/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
export const createClient = (): OSS => {
  const accessKeyId = core.getInput('access-key-id');
  const accessKeySecret = core.getInput('access-key-secret');
  const bucket = core.getInput('bucket');
  const endpoint = core.getInput('endpoint');
  console.log(accessKeyId, accessKeySecret, bucket, endpoint);

  if (!accessKeyId || !accessKeySecret || !bucket || !endpoint) {
    throw new Error('Missing required input');
  }

  // ali-oss类型定义有问题，这里使用OSS构造函数
  const client = new OSS({
    accessKeyId,
    accessKeySecret,
    bucket,
    endpoint,
  });

  return client;
};
