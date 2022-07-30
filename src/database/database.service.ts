import { Injectable } from '@nestjs/common';
const MockUtils = require('./mocks');

@Injectable()
export class DatabaseService {
  mockUtils: any;

  constructor() {
    this.mockUtils = new MockUtils();
  }

  getUser() {
    return this.mockUtils.getUser();
  }

  getUserRestrictions(userId) {
    return this.mockUtils.getUserRestrictions(userId);
  }

  async getUserPurchases(userId, limit = 10, offset = 0) {
    const purchases = await this.mockUtils.getUserPurchases(userId);
    if (offset >= purchases.length) {
      const error = new Error('Bad request');
      //error.status = 400;
      throw error;
    }
    return {
      total: purchases.length,
      offset,
      limit,
      data: purchases.slice(offset, limit * (offset + 1)),
    };
  }

  getLevel(levelId) {
    return this.mockUtils.getLevel(levelId);
  }

  getShipment(shipmentId) {
    return this.mockUtils.getShipment(shipmentId);
  }

  getPayment(paymentId) {
    return this.mockUtils.getPayment(paymentId);
  }
}
