import {it, describe, expect} from '@jest/globals';
import RandomNumber from '../../core/random-number';


describe('CRUD API tests', () => {
    const rnd = RandomNumber.get();
    const endpoint = `${process.env.PET_STORE_API}/pet`;
    const petOne = {
        id: rnd,
        category: {
            id: 1,
            name: 'cat'
        },
        name: 'Peach',
        status: 'avaliable',
        photoUrls: [],
        tags: []
    };
    const petTwo = {
        id: rnd,
        category: {
            id: 1,
            name: 'dog'
        },
        name: 'Max',
        status: 'avaliable',
        photoUrls: [],
        tags: []
    };

    it('should insert pet', async () => {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(petOne),
        });
        expect(response.ok).toBeTruthy();

        const jsonResponse = await response.json();
        expect(jsonResponse).toEqual(petOne);
    });

    it('should read pet', async () => {
        const response = await fetch(`${endpoint}/${rnd}`);
        expect(response.ok).toBeTruthy();

        const jsonResponse = await response.json();
        expect(jsonResponse).toEqual(petOne);
    });

    it('should updates pet', async () => {
        const response = await fetch(`${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(petTwo)
        });
        expect(response.ok).toBeTruthy();

        const jsonResponse = await response.json();
        expect(jsonResponse).toEqual(petTwo);
    });

    it('should read updated pet', async () => {
        const response = await fetch(`${endpoint}/${rnd}`);
        expect(response.ok).toBeTruthy();

        const jsonResponse = await response.json();
        expect(jsonResponse).toEqual(petTwo);
    });

    it('should delete pet', async () => {
        const responseOne = await fetch(`${endpoint}/${rnd}`, {
            method: 'DELETE'
        });
        expect(responseOne.ok).toBeTruthy();

        const responseTwo = await fetch(`${endpoint}/${rnd}`);
        expect(responseTwo.status).toBe(404);

        const jsonResponse = await responseTwo.json();
        expect(jsonResponse.message).toBe('Pet not found');
    });
});
