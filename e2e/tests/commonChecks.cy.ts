import { BaseMethods } from "../../cypress/common/base";
import {baseSelectors} from "../../cypress/common/selectors";

const basePage: BaseMethods = new BaseMethods()

describe('BSpace Demo',  () => {
    context('It check app names & messages', () => {
        it('Checks dashboard visibility', () => {
            basePage.openLocalhost({
                number: 3001
            })
            basePage.checkElementWithTextPresence({
                selector: baseSelectors.tags.coreElements.div,
                text: 'My Dashboard',
                visibilityState: 'be.visible'
            })
        })
        it('Checks user name visibility', () => {
            basePage.openLocalhost({
                number: 3001
            })
            basePage.checkElementWithTextPresence({
                selector: baseSelectors.tags.coreElements.div,
                text: 'Shinta Dewi Puspita S.',
                visibilityState: 'be.visible'
            })
        })
        it('Checks probation menu visibility', () => {
            basePage.openLocalhost({
                number: 3001
            })
            basePage.checkElementWithTextPresence({
                selector: baseSelectors.tags.coreElements.div,
                text: 'My Probation',
                visibilityState: 'be.visible'
            })
        })
    });
});
