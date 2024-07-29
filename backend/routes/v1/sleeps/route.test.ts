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
        gender: faker.person.gender().toLowerCase(),
        duration: 10,
      });

      expect(result.status).toEqual(200);
    });

    it('returns 400 if gender is different for an existing user', async () => {
      const username = faker.person.fullName().toLowerCase();
      const first = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: username,
        gender: faker.person.gender().toLowerCase(),
        duration: 10,
      });

      expect(first.status).toEqual(200);

      const second = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: username,
        gender: 'dummy-gender',
        duration: 10,
      });

      expect(second.status).toEqual(400);
      expect(second.body.details).toEqual('user name exists with a different gender');
    });

    it('returns 400 if total duration exceeds 24 hours', async () => {
      const username = faker.person.fullName().toLowerCase();
      const gender = faker.person.gender().toLowerCase();
      const first = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: username,
        gender,
        duration: 10,
      });

      expect(first.status).toEqual(200);

      const second = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: username,
        gender,
        duration: 15,
      });

      expect(second.status).toEqual(400);
      expect(second.body.details).toEndWith('remaining hours left: 14');
    });

    it('returns 400 if existing total duration is 24 hours', async () => {
      const username = faker.person.fullName().toLowerCase();
      const gender = faker.person.gender().toLowerCase();
      const first = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: username,
        gender,
        duration: 24,
      });

      expect(first.status).toEqual(200);

      const second = await request(app).post('/v1/sleeps').set('Accept', 'application/json').send({
        name: username,
        gender,
        duration: 0,
      });

      expect(second.status).toEqual(400);
      expect(second.body.details).toEndWith('remaining hours left: 0');
    });
  });
});
