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

    describe('GET /', () => {
        it('it should has a class name called home', async () => {
            const response = await got('http://localhost:9000')
            const $ = cheerio.load(response.body)
            expect($('body').hasClass('home')).to.be.true
        })
    })
})