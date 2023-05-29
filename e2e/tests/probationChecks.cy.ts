import { BaseMethods } from "../../cypress/common/base";
import {baseSelectors} from "../../cypress/common/selectors";

const basePage: BaseMethods = new BaseMethods()

describe('BSpace Probation Appraisal Check',  () => {
    context('It check probation appraisal functionality', () => {
        it('Add KPI', () => {
            basePage.openLocalhost({
                number: 3001
            })
            basePage.clickElementWithText({
                selector: baseSelectors.tags.coreElements.div,
                text: 'My Probation',
                wait: 1000
            })
            basePage.clickElementWithText({
                selector: baseSelectors.tags.coreElements.div,
                text: 'Probation Appraisal'
            })
            basePage.clickElementWithText({
                selector: baseSelectors.tags.coreElements.div,
                text: 'Add KPI',
                wait: 1000
            })
            basePage.fillField({
                selector: '#newKPI',
                text: 'Beramal shaleh'
            })
            basePage.fillField({
                selector: '#newWeight',
                text: '10'
            })
            basePage.fillField({
                selector: '#newTarget',
                text: '100'
            })
            basePage.fillField({
                selector: '#newLeadTo',
                text: 'Spiritual'
            })
            basePage.clickElementBySelector({
                selector: '#saveNewData',
                wait: 1000
            })
            basePage.checkElementWithTextPresence({
                selector: baseSelectors.tags.coreElements.div,
                text: 'Beramal shaleh',
                visibilityState: 'be.visible'
            })
        })
    });
});
