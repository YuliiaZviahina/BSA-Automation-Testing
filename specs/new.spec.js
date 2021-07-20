
const { expect } = require('chai');
describe('new clinic add:', function(){
    
    it('should be able to add new clinic', async function(){

        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');

        const emailField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');
        const signInButton = await $('button');

        const link = await $('a[href="clinics"]');
        const addButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');

        const clinicnameField = await $('input[name="name"]');
        const adressField =  await $('input[name="adress"]');

        const ddls = await $$('div.selectStyles__control')

        const statusDdl = ddls[0];
        const cityDdl = ddls[1];

        const stateOption = await $('div.selectStyles__option=state');
        const bostonOption = await $('div.selectStyles__option=Boston, MA');

        await emailField.waitForDisplayed({timeout:5000});
        await emailField.setValue('john_admin2@admin.com');

        await passwordField.waitForDisplayed({timeout:5000});
        await passwordField.setValue('Pa55word');
        
        await signInButton.waitForDisplayed({timeout:5000});
        await signInButton.click();

        await link.waitForDisplayed({timeout:5000});
        await link.click();

        await clinicnameField.waitForDisplayed({timeout:5000});
        await clinicnameField.setValue('Almed');

        await adressField.waitForDisplayed({timeout:5000});
        await adressField.setValue('Avenu 5th, 2');

        await browser.waitUntil(
            async function () {
              const url = await browser.getUrl();
              return url === 'http://46.101.234.121/doctors';
            },
            { timeout: 5000 },
          );
      
          const url = await browser.getUrl();
          expect(url).to.be.eql('http://46.101.234.121/doctors');
          
          await browser.reloadSession();
        });
      });
