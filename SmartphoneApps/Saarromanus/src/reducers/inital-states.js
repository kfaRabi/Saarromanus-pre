import * as sqlite from 'expo-sqlite';

export const DB = sqlite.openDatabase('test-db', '0.1');

export const config = {
	language: 'en-US',
	checForUpdate: false,
};

export const routes = [];
export const route = {};

export const sightCategories = [];

export const sights = [];
export const sight = {};
