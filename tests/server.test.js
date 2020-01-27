import server from '../server';

describe('Server', ()=>{
    it('Is running in current port', () => {
        expect(server.port).toEqual(5000)
    })
});
