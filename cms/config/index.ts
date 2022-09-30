import settings from './settings';
import pages from './pages';
import posts from './posts';

const config = {
  cms_manual_init: true,
  load_config_file: false,
  backend: {
    name: 'git-gateway',
    branch: 'main',
    commit_messages: {
      create: 'Create {{collection}} “{{slug}}”',
      update: 'Update {{collection}} “{{slug}}”',
      delete: 'Delete {{collection}} “{{slug}}”',
      uploadMedia: '[skip ci] Upload “{{path}}”',
      deleteMedia: '[skip ci] Delete “{{path}}”',
    },
  },
  media_folder: 'public/uploads',
  public_folder: '/uploads',
  local_backend: true,
  collections: [settings, pages, posts],
};

export default config;
