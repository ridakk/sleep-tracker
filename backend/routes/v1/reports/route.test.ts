/* eslint-disable import/no-extraneous-dependencies */

import request from 'supertest';
import { faker } from '@faker-js/faker';
import { sub, add, startOfDay, format } from 'date-fns';
import app from '../../../application';
import SleepModel from '../sleeps/model';

const username1 = faker.person.fullName().toLowerCase();
const username2 = faker.person.fullName().toLowerCase();
const startOfCurrentDay = startOfDay(new Date());

describe('v1.reports.test', () => {
  beforeAll(() => {});
  describe('get /v1/reports', () => {
    beforeAll(async () => {
      const gender1 = faker.person.gender();
      const gender2 = faker.person.gender();

      await SleepModel.bulkCreate([
        {
          name: username1,
          gender: gender1,
          duration: 8,
          date: add(startOfCurrentDay, { hours: 4 }),
        },
        {
          name: username1,
          gender: gender1,
          duration: 8,
          date: startOfCurrentDay,
        },
        {
          name: username1,
          gender: gender1,
          duration: 4,
          date: sub(startOfCurrentDay, { days: 1 }),
        },
        {
          name: username1,
          gender: gender1,
          duration: 5,
          date: sub(startOfCurrentDay, { days: 6 }),
        },
        {
          name: username1,
          gender: gender1,
          duration: 8,
          date: sub(startOfCurrentDay, { days: 8 }),
        },
        {
          name: username2,
          gender: gender2,
          duration: 8,
          date: startOfCurrentDay,
        },
      ]);
    });

    it('returns entry counts per user', async () => {
      const result = await request(app).get('/v1/reports/counts').set('Accept', 'application/json');

      expect(result.status).toEqual(200);
      expect(result.body.result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: username1,
            count: 5,
          }),
          expect.objectContaining({
            name: username2,
            count: 1,
          }),
        ]),
      );
    });

    it('returns entry counts for user 1', async () => {
      const result = await request(app).get(`/v1/reports/weekly?name=${username1}`).set('Accept', 'application/json');

      expect(result.status).toEqual(200);
      expect(result.body.result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: username1,
            date: format(startOfCurrentDay, 'yyyy-MM-dd'),
            sum: 16,
          }),
          expect.objectContaining({
            name: username1,
            date: format(sub(startOfCurrentDay, { days: 1 }), 'yyyy-MM-dd'),
            sum: 4,
          }),
          expect.objectContaining({
            name: username1,
            date: format(sub(startOfCurrentDay, { days: 6 }), 'yyyy-MM-dd'),
            sum: 5,
          }),
        ]),
      );

      expect(result.body.result).toEqual(
        expect.not.arrayContaining([
          expect.objectContaining({
            name: username1,
            date: format(sub(startOfCurrentDay, { days: 8 }), 'yyyy-MM-dd'),
          }),
        ]),
      );
    });

    it('returns entry counts for user 2', async () => {
      const result = await request(app).get(`/v1/reports/weekly?name=${username2}`).set('Accept', 'application/json');

      expect(result.status).toEqual(200);
      expect(result.body.result).toEqual([
        expect.objectContaining({
          name: username2,
          date: format(startOfCurrentDay, 'yyyy-MM-dd'),
          sum: 8,
        }),
      ]);
    });
  });
});
