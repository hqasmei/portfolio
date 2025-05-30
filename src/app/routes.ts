import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/posts', 'routes/posts.tsx'),
  route('/posts/:slug', 'routes/posts.$slug.tsx'),
  route('/projects', 'routes/projects.tsx'),
] satisfies RouteConfig;
