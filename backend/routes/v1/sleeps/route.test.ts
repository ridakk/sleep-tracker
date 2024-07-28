/* eslint-disable import/no-extraneous-dependencies */

import request from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../../application';

describe('v1.sleeps.test', () => {
  beforeAll(() => {});
  describe('post /v1/sleeps', () => {
    it('returns 400 with all validation failures', async () => {
      const result = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: 'AS AS',
        gender: '',
        duration: 25,
      });

      expect(result.status).toEqual(400);
    });

    it('returns 200 ok if all validations are correct', async () => {
      const result = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: faker.person.fullName().toLowerCase(),
        gender: faker.person.gender(),
        duration: 10,
      });

      expect(result.status).toEqual(200);
    });
  });
});
