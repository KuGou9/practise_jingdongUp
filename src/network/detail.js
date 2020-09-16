import { request } from './request';

export function getDetailDate(id) {
  return request({
    url: '/detail:id',
  });
}
