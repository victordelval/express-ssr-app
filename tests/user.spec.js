import got from 'got'
import { expect } from 'chai'
import cheerio from 'cheerio'

import server from '../src'

describe('Home Test', () => {
    beforeEach(() => {
        server.start()
    })

    afterEach(() => {
        server.close()
    })

    describe('GET /pepebotika', () => {
        it('it should use a name send by route', async () => {
            const response = await got('http://localhost:9000/pepebotika')
            const $ = cheerio.load(response.body)
            expect($('.bd-title').text()).to.be.equal('Bienvenido usuario pepebotika')
        })
    })
})