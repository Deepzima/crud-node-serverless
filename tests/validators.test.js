import { itemParamsSchema } from '../src/validators/item.validators';
import { ItemID } from './mocks';

describe('Item Joi validators', () => {
    const allowed = { ID: ItemID };
    const notAllowed = { ID: '1' };
    const empty = {};

    describe('Params validation', () => {
        it('Should validate the UUID', () => {
            const { error } = itemParamsSchema.validate(allowed);

            expect(error).toBeUndefined();
        });

        it('Should invalidate with UUID not valid', () => {
            const { error } = itemParamsSchema.validate(notAllowed);
            const errorTypes = error.details.map(el => el.type);

            expect(error).toBeDefined();
            expect(errorTypes.length).toBeGreaterThan(0);
            expect(errorTypes.includes('string.guid')).toBe(true);
        });

        it('Should invalidate if empty', () => {
            const { error } = itemParamsSchema.validate(empty);
            const errorTypes = error.details.map(el => el.type);

            expect(error).toBeDefined();
            expect(errorTypes.length).toBeGreaterThan(0);
            expect(errorTypes.includes('any.required')).toBe(true);
        })
    })
});
