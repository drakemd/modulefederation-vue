import { BaseMethods } from "../../cypress/common/base";
import {baseSelectors} from "../../cypress/common/selectors";

const basePage: BaseMethods = new BaseMethods()

describe('BSpace Navigation Check',  () => {
    context('It check app menu navigation functionality', () => {
        it('Navigate to Probation screen', () => {
            basePage.openLocalhost({
                number: 3001
            })
            basePage.clickElementWithText({
                selector: baseSelectors.tags.coreElements.div,
                text: 'My Probation',
                wait: 1000
            })
            basePage.checkElementWithTextPresence({
                selector: baseSelectors.tags.coreElements.div,
                text: 'Coaching',
                visibilityState: 'be.visible'
            })
        })
    });
});
