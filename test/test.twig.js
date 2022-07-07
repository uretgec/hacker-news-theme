const Twig = require('twig');
const fs = require('fs');

const twig = Twig.twig

describe('Twig.js templates render ->', function () {
    Twig.cache(false);
    
    it('should be able to generate index.html', function () {
        const template = twig({
            id: 'fs-node-sync',
            path: './templates/twigjs/index.twig',
            async: false,
            rethrow: true,
            strict_variables: true, // MUST
        });
        // Render the template
        let data = JSON.parse(fs.readFileSync('./data/data.json'))

        try {
            console.log(template.render(data));
        } catch(error) {
            console.log(error);
            error.type.should.equal('TwigException');
        }
    });

});