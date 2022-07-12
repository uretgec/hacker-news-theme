const Twig = require('twig');
const fs = require('fs');
const should = require('should');

const twig = Twig.twig

describe('Twig.js templates render ->', function () {

    // Cache Free
    Twig.cache(false);

    // Json Data
    let data;

    before(function() {
        // Render the template
        data = JSON.parse(fs.readFileSync('./data/data.json'))

        // Add single page data
        data.Page = data.Pages[0]

        // Add single post data
        data.Post = data.Posts[0]
    });
    
    it('should be able to generate 404.html', function (done) {
        try {
            const template = twig({
                id: 'fs-node-sync',
                path: './templates/twigjs/404.twig',
                async: false,
                rethrow: true,
                strict_variables: true, // MUST
            });

            output = template.render(data);

            done();
        } catch(error) {            
            error.should.have.property('type','TwigException');

            done(error.message);
        }
    });
    
    it('should be able to generate index.html', function (done) {
        try {
            const template = twig({
                id: 'fs-node-sync',
                path: './templates/twigjs/index.twig',
                async: false,
                rethrow: true,
                strict_variables: true, // MUST
            });

            output = template.render(data);

            done();
        } catch(error) {            
            error.should.have.property('type','TwigException');

            done(error.message);
        }
    });
    
    it('should be able to generate login.html', function (done) {
        try {
            const template = twig({
                id: 'fs-node-sync',
                path: './templates/twigjs/login.twig',
                async: false,
                rethrow: true,
                strict_variables: true, // MUST
            });

            output = template.render(data);

            done();
        } catch(error) {            
            error.should.have.property('type','TwigException');

            done(error.message);
        }
    });
    
    it('should be able to generate page.html', function (done) {
        try {
            const template = twig({
                id: 'fs-node-sync',
                path: './templates/twigjs/page.twig',
                async: false,
                rethrow: true,
                strict_variables: true, // MUST
            });

            output = template.render(data);

            done();
        } catch(error) {            
            error.should.have.property('type','TwigException');

            done(error.message);
        }
    });
    
    it('should be able to generate search.html', function (done) {
        try {
            const template = twig({
                id: 'fs-node-sync',
                path: './templates/twigjs/search.twig',
                async: false,
                rethrow: true,
                strict_variables: true, // MUST
            });

            output = template.render(data);

            done();
        } catch(error) {            
            error.should.have.property('type','TwigException');

            done(error.message);
        }
    });
    
    it('should be able to generate single.html', function (done) {
        try {
            const template = twig({
                id: 'fs-node-sync',
                path: './templates/twigjs/single.twig',
                async: false,
                rethrow: true,
                strict_variables: true, // MUST
            });

            output = template.render(data);

            done();
        } catch(error) {            
            error.should.have.property('type','TwigException');

            done(error.message);
        }
    });

});