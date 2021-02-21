import * as mfs from 'm-fs';
import * as path from 'path';

export default async function dirTreeObj(dir: string): Promise<Record<string, unknown>> {
  const res: Record<string, unknown> = {};

  const pathInfos = await mfs.subPathsWithType(dir);
  const files: string[] = [];
  const dirs: string[] = [];
  pathInfos.forEach((p) => {
    if (p.isFile) {
      files.push(p.path);
    } else {
      dirs.push(p.path);
    }
  });
  if (files.length) {
    files.sort();
    res['.'] = files;
  }
  if (dirs.length) {
    await Promise.all(dirs.map(async (d) => (res[d] = await dirTreeObj(path.join(dir, d)))));
  }
  return res;
}
