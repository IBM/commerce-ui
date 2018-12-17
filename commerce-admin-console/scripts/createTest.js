const
fs = require('fs');
fsExtra = require('fs-extra');
minimist = require('minimist');

const componentsDir = 'src/app';

let opts = {
    string: ['name', 'type', 'srcDir', 'componentName', 'serviceName'],
    default: { name: 'undefined', type: 'undefined', srcDir: 'undefined', componentName: 'undefined', serviceName: 'undefined'}
}

let cmdArgs = minimist(process.argv.slice(2), opts);

if (cmdArgs.name === 'undefined' || cmdArgs.type === 'undefined' || 
    (cmdArgs.type === 'UT' && cmdArgs.srcDir === 'undefined') || (cmdArgs.type === 'UT' && cmdArgs.componentName === 'undefined' && cmdArgs.serviceName === 'undefined')) {
    console.error(`Error: You must specify the following cmd line arguments: name, type, srcDir

    usage: 
        npm run create-test -- --name <test file name> --type <UT> --srcDir <location of source code> --componentName <name of component to test>

        npm run create-test -- --name <test file name> --type <UT> --srcDir <location of source code> --servicetName <name of service to test>
    example:
        npm run create-test -- --name authentication --type UT --srcDir commerce/services/componentTransaction --serviceName AuthenticationTransactionService

    name            name of the test file, .spec.ts will be appended
    type            type of test, possible values are UT and E2E, currently only support UT
    srcDir          directory where the source code resides, relatives to src/app
    componentName   name of component to test, starts with Capital Letter and camelCase
    serviceName     name of service to test, starts with Capital Letter and camelCase
    
    `);
    return;
}

createTestFiles(cmdArgs);


/**
 * This function only generates for UT for now.
 * Once E2E template is generated, we can extend this script
 */
function createTestFiles(opts){
    let templateFileName;
    let newTestFilePath;
    let replaceString;

    if(opts.type =='UT'){
        if (opts.componentName != 'undefined'){
            templateFileName = 'unitTestCmp.spec.ts';
            replaceString = opts.componentName;
            newTestFilePath = `${componentsDir}/${opts.srcDir}/${opts.name.charAt(0).toLowerCase()}${opts.name.slice(1)}.component.spec.ts`;
        }
        if (opts.serviceName != 'undefined'){
            templateFileName = 'unitTestSer.spec.ts';
            replaceString = opts.serviceName;
            newTestFilePath = `${componentsDir}/${opts.srcDir}/${opts.name.charAt(0).toLowerCase()}${opts.name.slice(1)}.service.spec.ts`;
        }

        fsExtra.copy('scripts/template/' + templateFileName, newTestFilePath, err => {
            if (err) {
                console.error(err);
                console.error('Error: Test file generation failed.');
            } 
            else {
                let testFile = fs.readFileSync(newTestFilePath, 'utf8');

                testFile = testFile.replace(/UnitTestTemplate/g, `${replaceString}`);

                testFile = testFile.replace(/filename/g, `${opts.name}`);
    
                fs.writeFile(newTestFilePath, testFile, 'utf8', err => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(newTestFilePath + ' is generated successfully');
                    }
                });
            }
        });
    }    
}

