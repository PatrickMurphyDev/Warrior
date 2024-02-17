import fs from 'fs';
import path from 'path';

const POST_FOLDER_NAME = 'assets/locations/Ellensburg';
const POSTS_DIRECTORY = path.join(process.cwd(), 'public', POST_FOLDER_NAME);

export const getDirectoryFileList = () => {
  return fs.readdirSync(POSTS_DIRECTORY);
};
