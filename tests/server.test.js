import { expect } from 'chai';
import server from '../server';

describe('Server', ()=>{
    it('tests that server is running current port', async () => {
        expect(server.port).to.equal(5000)

    })
});